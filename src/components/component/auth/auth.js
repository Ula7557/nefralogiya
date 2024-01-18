import { Button, Input, TextField } from "@mui/material";
import "./auth.scss";
import Img from "../../../assets/img/logo.webp";
import eye from "../../../assets/img/eye.svg";
import { useContext, useState } from "react";
import { request } from "../../../api/request";
import { useNavigate, useParams } from "react-router-dom";
import { Contextvalue } from "../../../context/context";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import { onCallback } from "../get-token";
import { getRedirectUrl} from "../authorize";
import axios from "axios";
const base64url = require("base64url")

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Auth = ({ path }) => {
   
  // const verifier = CryptoJS.AES.encrypt("", "").ciphertext
  //       .toString()
  //       .replace(/\+/g, "-")
  //       .replace(/\//g, "_")
  //       .replace(/=/g, "");



// const redirect_uri = "https://nefro.ssv.uz/auth/callback";
// const redirect_uri = "http://localhost:3004/auth/callback"
// const token_endpoint = "https://test-sso.ssv.uz/oauth/authorize"


// const  pkceChallengeFromVerifier = (v) => {
//    const hashed = sha256(v);

//    return CryptoJS.enc.Base64.stringify(hashed)
//      .replace(/\+/g, "-")
//      .replace(/\//g, "_")
//      .replace(/=/g, "");
//  }

//   console.log('before verifier')
//     const verifier = CryptoJS.lib.WordArray.random(32);
//     // const verifier = '2LyFp0DXPpfcYulWkM9IpfkmDMI8OBlfd_MRthaOqvE'

//     const challenge = pkceChallengeFromVerifier(verifier);

//   window.localStorage.setItem("verifier", challenge);
//   localStorage.setItem("verifier_debug",challenge)
//   const params = new URLSearchParams({
//     client_id: '985170c4-46fd-4e0e-8fca-31ad8bbb89db', // almashtiring boyagisiga almawdi
//     redirect_uri,
//     response_type: 'code',
//     code_challenge_method: 'S256',
//     code_challenge: '6xKQp8FRej8K4bRrFOBe9YpfYoLXkMIpLWxYJTtOZj0',
//   });
// const url = `${token_endpoint}?${params.toString()}`;
// console.log('after verifier')

// window.location =url  verifier qayoqqa ketti??


// console.log('after window.open')
// boshqa internet ishlatib ko'ringchi, blockka tushdi shekilli, bunaqasini endi ko'rishim
//mobile internet ishlatib ko'rinchi, korparativ netda white list qo'yilgan shekilli hozir 1 daqiqa boldi autosaveni o'chirish kerak, qotib yootibdi





  function SSO(e) {
    // request
    //   .post(`/auth/url/`, )
    //   .then(function (res) {
        
    //   })
    //   .then(() => setLoeder(false))
    //   .catch(function (err) {
      
    //   });

    axios
      .post(
        `https://admin-nefro.ssv.uz/api/auth/url`, {
         
        }
      )

      .then(function (response) {
        window.localStorage.setItem("code_verifier",response.data.code_verifier );
       window.location = response.data.url
       console.log('response', response);
       
      })
      .catch(function (error) {
       
      });
      console.log(SSO,'sso');
    
  }





  const navigate = useNavigate();
  const [loader, setLoeder] = useState(false);

  const [login, setLogin] = useState({});
  const { setAuthid } = useContext(Contextvalue);
  const [open, setOpen] = React.useState(false);
  const [warnig, setWarnig] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [eyes, setEyes] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setWarnig(false);
    setError(false);
  };
  function Create(e) {
    const formData = new FormData();
    for (let [key, value] of Object.entries(login)) {
      formData.append(key, value);
    }
    request
      .post(`/login/`, formData)
      .then(function (res) {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("id", res.data.id);
        console.log("resdata", res.data);
        if (res.data.token && res.data.id) {
          setOpen(true);
          navigate(`/doctor`);
          window.location.reload();
        } else if (res.data.token) {
          setOpen(true);
          localStorage.removeItem("id");
          navigate(`/`);
          window.location.reload();
        }
      })
      .catch(function (err) {
        console.log(err);
        if (err.message === "Request failed with status code 401")
          setWarnig(true);
        if (err.message === "Request failed with status code 403")
          setError(true);
      });
    setLoeder(true);
  }

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      setLogin({ ...login, [e.target.name]: String(e.target.checked) });
    } else {
      setLogin({ ...login, [e.target.name]: e.target.value });
    }
  };

   const redirectToSSO = async () => {
     const url = await getRedirectUrl();
     window.location = url;
   }

   React.useEffect(() => {

     const params = new URLSearchParams(window.location.search);
     const code = params.get("code");

     if (code) {
       onCallback();
     }

   }, []);
  return (
    <div className="auth">
      <div className="auth_left">
        <Stack spacing={2}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Muffaqiyatli Kirish!
            </Alert>
          </Snackbar>
          <Snackbar open={warnig} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="warning"
              sx={{ width: "100%" }}
            >
              Parol yoki Foyadalanuvhi nomi xato!
            </Alert>
          </Snackbar>
          <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Xatolik!
            </Alert>
          </Snackbar>
        </Stack>
        <div className="img_logo-ssv">
          <p className="ssv_text">
            O'zbekiston respublikasi sog'liqni saqlash vazirligi
          </p>
        </div>
        {!path && (
          <form action="" className="form_auth">
            <div className="input_auth_block">
              <TextField
                id="outlined-basic"
                label="Foydalanuvchi nomi"
                variant="outlined"
                name="username"
                onChange={onChange}
              />
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="input_auth_block"
            >
              <TextField
                id="outlined-basic"
                label="Parol"
                variant="outlined"
                onChange={onChange}
                name="password"
                type={eyes ? "text" : "password"}
              />
              <img
                className={eyes ? "visabel-eye--close" : "visabel-eye"}
                src={eye}
                onClick={() => setEyes(!eyes)}
              />
            </div>
            {/* href="https://sso.ssv.uzoauth/aouthorize" */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <a
              style={{cursor:'pointer'}}
              className='sso_kirish sso-link'  onClick = {
                () => SSO()
              }
              >
                SSO Orqali Kirish?
              </a>
              <div>
                 <a style={{display:"block",marginTop:"8px"}} className="video-link" target='_blank' href="https://t.me/+xmXmHCdHPOBkNzA6" >Texnik Yordam</a>
                 <a style={{display:"block",marginTop:"5px"}} className="video-link" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfqMLe6SlYhARtVrHjlxcyYA4Ft-2l_RLbgjply6oYIlaAEXA/viewform" >Yordam So'rovi</a>
                 <a className="video-link" target='_blank' href="https://drive.google.com/drive/folders/12hraVfTCHttpXHFQ-Qac_fgStozQl3KQ?usp=sharing" >Video Link</a>
              </div>
            </div>
            <div className="btn_auth">
              <Button
                style={{
                  display: "block",
                  width: "100%",
                  backgroundColor: "#1464C0",
                }}
                variant="contained"
                onClick={Create}
              >
                Tasdiqlash
              </Button>
            </div>
          </form>
        )}
        {path && (
          <div
            className="btn_auth"
            style={{
              marginTop: "70px",
            }}
          >
            <p style={{ textAlign: "center" }}>
              SSO Orqali Kirishni Tasdiqlaysizmi?
            </p>

            <Button
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#1464C0",
              }}
              variant="contained"
            >
              Tasdiqlash
            </Button>
          </div>
        )}
      </div>
      <div className="auth_right"></div>
    </div>
  );
};

export default Auth;

import "./site-header.scss";
import { Link } from "react-router-dom";
import call from '../../assets/icon/call.svg'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { request } from "../../api/request";
import sidebar from '../../assets/img/close.svg';
import close from '../../assets/img/open.svg';
import { Contextvalue } from "../../context/context";
import { useTranslation } from "react-i18next";
function Header(){
  // const Callto = ({ phone, children }) => {
  //   return (
  //     <a className="site-header__lik" href={`tel:${phone}`}>
  //       {children}
  //     </a>
  //   );
  // };
  const langs = localStorage.getItem("i18nextLng")
  const [ages, setAges] = useState(langs);
  const token = window.localStorage.token;
  const { t, i18n, ready } = useTranslation();
  const changeLanguage = (event) => {
     setAges(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const formData = new FormData();
  formData.append("token", token);
  const [ids, setIds] = useState(null);
  const {open,setOpen} = useContext(Contextvalue)
  const [viloyat, setViloyat] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .post(`/viloyatlar/`, formData)
      .then(function (res) {
 
        setViloyat({
          isFetched: true,
          data: res.data,
          error: false,
          
        });
      })
      .catch(function (err) {
        setViloyat({
          isFetched: false,
          data: [],
          error: err,
        });
      });
  }, []);

   const idls = localStorage.getItem("id");
   const muassalar1 =
     viloyat.data.data &&
     viloyat.data.data.find((el) =>
       el.muassasalar.find((el) => +el.id === +idls)
     );
   const muassasaName =
     muassalar1 && muassalar1.muassasalar.find((el) => +el.id === +idls);
   const [age, setAge] = useState("");

   const handleChange = (event) => {
     setAge(event.target.value);
   };
   const id = localStorage.getItem("id")
    return (
      <>
        {/* <header className="site-header">
          <div className="site-header__wrraper">
            <Link
              className="site-header__page"
              to={id ? `/doctor` : "/"}
            >
              O`zbekiston Respublikasi Sog'liqni Saqlash Vazirligi
            </Link>
            <div className="site-header__tel">
              <Callto phone={"+998712394795"}>+998 (71) 239-47-95</Callto>
              <Callto phone={"1003"}>1003</Callto>
            </div>
          </div>
        </header> */}
        <header className="site-header">
          <div className="header_inner">
            <button
              onClick={() => setOpen(!open)}
              style={
                open
                  ? {
                      marginLeft: "184px",
                      border: "none",
                      backgroundColor: "transparent",
                    }
                  : {
                      border: "none",
                      backgroundColor: "transparent",
                    }
              }
            >
              {open ? <img src={close} /> : <img src={sidebar} />}
            </button>
            <div className="header_inner_block">
              <img src={call} alt="" />
              <a href="tel:998712394795">+998 (71) 239-47-95</a>
              <a href="tel:1003">1003</a>
              {/* <div className="eurosoft_block">
                <img src={eurosoft} alt="" />
              </div> */}
            </div>
            <div className="header_inner_block">
            <div className="language">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={ages}
                    onChange={changeLanguage}
                  >
                    <MenuItem value={"uz"}>O'zbek lotincha</MenuItem>
                    <MenuItem MenuItem value={"krl"}>
                      
                      Ўзбек кириллча
                    </MenuItem>
                    <MenuItem value={"ru"}>Русский</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* <div className="language">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    O’zbek tili
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>O’zbek tili</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div> */}
              <div className="header_right">
                <h3 className="hospital_name">
                  {muassasaName && muassasaName.muassasa_nomi}
                </h3>
                <h3 className="tex_title">
                  {t("header.title")}:{" "}
                  <a
                    target="_blank"
                    href="https://t.me/+xmXmHCdHPOBkNzA6"
                    className="tex_link"
                  >
                    Nefro.ssv.uz
                  </a>
                </h3>
                <h3 className="tex_title">
                  {t("header.video")}:{" "}
                  <a
                    target="_blank"
                    href="https://drive.google.com/drive/folders/12hraVfTCHttpXHFQ-Qac_fgStozQl3KQ?usp=sharing"
                    className="tex_link"
                  >
                    Video Link
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}
export default Header;
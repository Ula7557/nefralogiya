import {
    Alert,
  Button,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import "./singlebemor.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";
import { forwardRef, useContext, useEffect, useState } from "react";
import { request } from "../../../api/request";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/loading/loading";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import Seanslar from "../../../components/component/seanslar/seanslar";
import MuiAlert from "@mui/material/Alert";
import { Contextvalue } from "../../../context/context";
import pnflIcon from '../../../assets/img/pnfl.png'
import { useTranslation } from "react-i18next";
const SingleArxiv = () => {

  const token = window.localStorage.token

  const formData = new FormData();
  formData.append('token', token);

 const [person, setPerson] = useState([])
 const [shifokorlar, setShifokorlar] = useState([])
 const [delebemor, setDeleBemor] = useState({
   isFetched: false,
   data: {},
   error: null,
 })


 const params = useParams();

  const {
    id
  } = useParams()

   useEffect(() => {
     request
       .post(`/bemorlar/arxiv/`, formData)
       .then(function (res) {
         setDeleBemor({
           isFetched: true,
           data: res.data,
           error: false,
         });
          setPerson(
            res.data.data.filter((item) => +item.bemor_id === +params.id)[0]
          );
          setLoeder(false);
         setShifokorlar(res.data)
       })
       .catch(function (err) {
         setDeleBemor({
           isFetched: false,
           data: [],
           error: err,
         });
       });
   }, [params.id]);

   

  //   const {noti, setNoti} = useContext(Contextvalue)
  // const classes = {
  //   table: {
  //     minWidth: 700,
  //   },
  //   modal: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   paper: {
  //     // backgroundColor: "white",
  //     // border: "2px solid #000",
  //     // boxShadow: theme.shadows[5],
  //     padding: "50px",
  //     width: "100%",
  //     margin: "30px auto 0 auto",
  //     backgroundColor: "#EFF2F5",
  //       borderRadius: "12px"
  //   },
  //   formControl: {
  //     margin: "1px",
  //     minWidth: 120,
  //   },
  //   selectEmpty: {
  //     marginTop: "5px",
  //   },
  //   button: {
  //     padding: "8px",
  //     borderRadius: "12px",
  //   },
  // };

  //  function EditIt(e) {
  //    setInput(e);
  //    handleOpen(true);
  //    setEdi(true);
  //  }


  // const [bemorIdpro, setBemorIdPro] = useState([]);
  // const [person, setPerson] = useState([]);
  // const [shifokorlar, setShifokorlar] = useState([]);
  // const formData = new FormData();

  const [loader, setLoeder] = useState(true);

  // const token = window.localStorage.token;
  // formData.append("token", token);
  // const params = useParams();

  // const [sea, setSea] = useState({
  //   isFetched: false,
  //   data: {},
  //   error: null,
  // });
  // const [seans, setSeans] = useState(false);

  // function Seansbemor(e) {
  //   setBemId(e);
  //   setSeans(true);
  //   const formsdata = new FormData();
  //   formsdata.append("token", token);
  //   formsdata.append("bemor_id", e);
  //   request
  //     .post(`seans/bemor/`, formsdata)
  //     .then(function (res) {
  //       setSea({
  //         isFetched: true,
  //         data: res.data,
  //         error: false,
  //       });
  //       setLoeder(false);
  //       console.log(res.data);
  //     })
  //     .catch(function (err) {
  //       setSea({
  //         isFetched: false,
  //         data: [],
  //         error: err,
  //       });
  //       setLoeder(false);
  //     });
  // }
  // const handleSeansClose = () => {
  //   setSeans(false);
  // };

  // const [bemId, setBemId] = useState(null);
  // useEffect(() => {
  //   request
  //     .post(`/bemorlar/`, formData)
  //     .then(function (res) {
  //       setBemorIdPro({
  //         isFetched: true,
  //         data: res.data,
  //         error: false,
  //       });
  //       setPerson(
  //         res.data.bemorlar.filter((item) => +item.bemor_id === +params.id)[0]
  //       );
  //       setShifokorlar(res.data.shifokorlar);
  //       setLoeder(false);
  //     })
  //     .catch(function (err) {
  //       setBemorIdPro({
  //         isFetched: false,
  //         data: [],
  //         error: err,
  //       });
  //     });
  // }, [params.id]);
  const [bemorid, setBemorId] = useState([]);

  function Iddiagnoz(id) {
    const formmdata = new FormData();
    formmdata.append("token", token);
    request
      .post(`/diagnoz/${id}`, formmdata)
      .then(function (res) {
        setBemorId({ isFetched: true, data: res.data, error: false });
        setLoeder(false);
      })
      .then(() => setLoeder(false))
      .catch(function (err) {
        setBemorId({ isFetched: false, data: [], error: err });
      });
  }

  // function Seansbemor(e) {
  //   setBemId(e);
  //   setSeans(true);
  //   const formsdata = new FormData();
  //   formsdata.append("token", token);
  //   formsdata.append("bemor_id", e);
  //   request
  //     .post(`seans/bemor/`, formsdata)
  //     .then(function (res) {
  //       setSea({
  //         isFetched: true,
  //         data: res.data,
  //         error: false,
  //       });
  //       setLoeder(false);
  //       console.log(res.data);
  //     })
  //     .catch(function (err) {
  //       setSea({
  //         isFetched: false,
  //         data: [],
  //         error: err,
  //       });
  //       setLoeder(false);
  //     });
  // }

    // const Alert = forwardRef(function Alert(props, ref) {
    //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    // });
    // // const [noti, setNoti] = useState(false);
    // const [notificationn, setNotificationn] = useState({
    //   state: "",
    //   text: "",
    // });

    //  const handleClick = () => {
    //    setNoti(true);
    //  };

    //  const handlenoti = (event, reason) => {
    //    if (reason === "clickaway") {
    //      return;
    //    }

    //    setNoti(false);
    //  };

     

  // const [open2, setOpen2] = useState(false);
  // const [ides, setides] = useState(null);

  // const handleOpen2 = (e) => {
  //   setides(e);
  //   setOpen2(true);
  // };
  // const handleClose2 = () => {
  //   setOpen2(false);
  // };
  // const [izohs, setIzohs] = useState("");
  // const navigate = useNavigate();
  // function Deletes(id) {
  //   const forms = new FormData();
  //   forms.append("token", token);
  //   forms.append("bemor_id", ides);
  //   forms.append("izoh", izohs);
  //   setIzohs("");
  //   request
  //     .post(`/dalete/bemor/`, forms)
  //     .then(function (res) {
  //       console.log(res.data);
  //       setLoeder(false);
        
  //       setNotificationn({
  //         state: "success",
  //         text: `Bemor o'chirildi`,
  //       });
  //       handleClick(true);
  //       navigate("/muassasa");
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //       setLoeder(false);
  //       setNotificationn({
  //         state: "success",
  //         text: `Bemor o'chirilmadi`,
  //       });
  //     });
  //   setLoeder(true);
  //   handleClose2();
  // }

  // const [input, setInput] = useState({
  //   kasalliklar: "",
  //   tuman: "",
  //   bemor_passporti: "",
  //   qoshimcha_malumot: "",
  //   qoshimcha_tel_raqami: "",
  //   rasxodniki: 0,
  //   nogironligi: "",
  //   RW: "false",
  //   SPID: "false",
  //   HBsAg: "false",
  //   Anti_HCV: "false",
  // });

  //  const onDializa = (e) => {
  //    setDiainput({
  //      ...diainput,
  //      [e.target.name]: e.target.value
  //    });
  //  };

  //  function Dializa(e) {
  //    const formmdata = new FormData();
  //    for (let [key, val] of Object.entries(diainput)) {
  //      formmdata.append(key, val)
  //    }
  //    formmdata.append('token', token);
  //    request
  //      .post(`/bemor/create/diagnoz/`, formmdata)
  //      .then(function (res) {
  //        setInput({
  //          ...input,
  //          diagnoz: res.data.id
  //        });
  //      })
  //      .then(() => setLoeder(false))
  //      .catch(function (err) {
  //        setDializa({
  //          isFetched: false,
  //          data: [],
  //          error: err
  //        });
  //      });
  //    handleClose1();
  //  }

//    const [dializa, setDializa] = useState({
//      isFetched: false,
//      data: {},
//      error: null,
//    });

//    const [diainput, setDiainput] = useState([])
//    const [arr, setArr] = useState([])
// const [open1, setOpen1] = useState(false);

//  const [edits, setEdits] = useState({
//    isFetched: false,
//    data: {},
//    error: null,
//  });

//  function Heets() {
//    const fordata = new FormData();
//    fordata.append("token", token);
//    fordata.append("qoshimcha_malumot", file);
//    fordata.append("bemor_passporti", pass);

//    for (let [key, value] of Object.entries(input)) {
//      fordata.append(key, value);
//    }
//    request
//      .put(`/create/bemor/`, fordata)
//      .then(function (res) {
//        setNotificationn({
//          state: "success",
//          text: `Bemor o'zgardi`,
//        });
//        setEdits({
//          isFetched: true,
//          data: res.data,
//          error: false,
//        });
//        console.log(res.data);
//        handleClick(true);
//      })
//      .catch(function (err) {
//        setNotificationn({
//          state: "error",
//          text: `Bemor o'zgarmadi`,
//        });
//        setEdits({
//          isFetched: false,
//          data: [],
//          error: err,
//        });
//        handleClick(true);
//      });
//    setInput({});
//    handleClose();
//    setEdi(false);
//    setLoeder(true);
//  }

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);

//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

// const handleOpen1 = () => {
//   setOpen1(true);
// };

// const handleClose1 = () => {
//   setOpen1(false);
// };

//    const [edi, setEdi] = useState(false);
//     const onChange = (e) => {
//       let arr = [];
//       arr.push(e.target.value);
//       setArr(arr.join("").split("").length);
//       const body = new FormData();
//       body.append("JSHSHIR", e.target.value);
//       body.append("token", token);
//       request.post("/identifikatsiya/", body).then((data) =>
//         setInput({
//           JSHSHIR: data.data.JSHSHIR,
//           ismi: data.data.ism,
//           familiyasi: data.data.familiya,
//           otasini_ismi: data.data.otasini_ismi,
//           tugilgan_sanasi: data.data.tugilgan_sana,
//           passport_raqami: data.data.pasport_raqami,
//           passport_seriyasi: data.data.pasport_seriya,
//           kasalliklar: "",
//           tuman: "",
//           RW: "false",
//           SPID: "false",
//           HBsAg: "false",
//           Anti_HCV: "false",
//           bemor_passporti: "",
//           qoshimcha_malumot: "",
//           nogironligi: "",
//           rasxodniki: 0,
//           jinsi: data.data.jinsi === "male" ? "Erkak" : "Ayol",
//         })
//       );
//       if (e.target.type === "checkbox") {
//         setInput({
//           ...input,
//           [e.target.name]: String(e.target.checked)
//         });
//       } else {
//         setInput({
//           ...input,
//           [e.target.name]: e.target.value
//         });
//       }
//     };
//     const [pass, setPass] = useState();
//     const [file, setFile] = useState()
//     const {
//       id
//     } = useParams()

//    console.log(input, 'input');
  console.log(person);
  const {t} = useTranslation()

   
  if (loader) return <Loading />;
  return (
    <div className="singlebemor">
      <div className="singlebemor_top">
        <div className="singlebemor_top_left">
           <Link to={"/arxiv"}>
            <Button startIcon={<ArrowBackIcon />} variant="contained">
              {t("bildirishnoma.single.ortga")}
            </Button>
          </Link>

          {/* <Button
            onClick={() => Seansbemor(person.bemor_id)}
            startIcon={<AccessTimeIcon />}
            variant="contained"
          >
            Seanslar
          </Button>
          <Button
          onClick={(e) => EditIt(person)}
          startIcon={<ModeEditIcon />} variant="contained">
            O’zgarish kiritish
          </Button>
          <Button
            onClick={() => handleOpen2(person.bemor_id)}
            startIcon={<DeleteIcon />}
            variant="contained"
          >
            Ro’yxatdan ochirib tashlash
          </Button>  */}
        </div>
        <div className="singlebemor_top_right">
          <Button startIcon={<DescriptionIcon />} variant="contained">
            {t("bola.excel")}
          </Button>
        </div>
      </div>
      <div className="singlebemor_block">
        <div className="singlebemor_block_left">
          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">
              {t("sbola.sh")}
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("shifokor.alladd.surname")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.familiyasi}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("shifokor.alladd.name")}</h5>
              <h5 className="singlebemor_block_info_desc">{person.ismi}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("shifokor.alladd.otch")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.otasini_ismi}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">PINFL</h5>
              <h5 className="singlebemor_block_info_desc">{person.JSHSHIR}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("shifokor.birthday")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.tugilgan_sanasi}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("sbola.ng")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.nogironligi} {
                  person.nogironligi == 4 ? 'Nogiron emas' : '-guruh'
                }
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("bola.guruh")}</h5>
              <h5 className="singlebemor_block_info_desc">
                 {
                person.qon_guruhi == 1 ? 'AB(IV)Rh+' :
                person.qon_guruhi == 2 ? 'AB(IV)Rh-' :
                person.qon_guruhi == 3 ? 'A(II)Rh+' : 
                person.qon_guruhi == 4 ? 'A(II)Rh-' : 
                person.qon_guruhi == 5 ? 'B(III)Rh+' : 
                person.qon_guruhi == 6 ? 'B(III)Rh-' : 
                person.qon_guruhi == 7 ? 'O(I)Rh+' :
                person.qon_guruhi == 8 ? 'O(I)Rh-' : 'Kiritilmagan'
                }
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("sbola.ks")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.ijtimoiy_maqom}
              </h5>
            </div>
           
          </div>

          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">{t("sbola.b1")}</h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("bildirishnoma.status")}</h5>
              <h5 className="singlebemor_block_info_desc">{person.status}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                {t("sbola.b2")}
              </h5>
              <h5 className="singlebemor_block_info_desc">{person.bemor_kasallik_turi}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("sbola.b3")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.bemor_holati} {!person.bemor_holati && "Mavjud emas"}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Diagnoz</h5>
              <div className="singlebemor_block_info_desc">
                <Button
                  className="popup"
                  onMouseEnter={() => Iddiagnoz(person.diagnoz_id)}
                  startIcon={<TroubleshootIcon />}
                >
                  <div className="popup_inner">
                    <h6>Asosiy</h6>
                    <p>{bemorid?.data?.asosoiy}</p>
                    <br />
                    <h6>Fon</h6>
                    <p>{bemorid?.data?.fon}</p>
                    <br />
                    <h6>Bog'liq</h6>
                    <p>{bemorid?.data?.bogliq}</p>
                    <br />
                    <h6>Raqobat</h6>
                    <p>{bemorid?.data?.raqobat}</p>
                    <br />
                    <h6>Asorati</h6>
                    <p>{bemorid?.data?.asorati}</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">
              {t("sbola.b4")}
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Telefon raqami</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.tel_raqami}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
              {t("bola.qtel")}
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person?.qoshimcha_tel_raqami}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("shifokor.alladd.male")}</h5>
              <h5 className="singlebemor_block_info_desc">{person.jinsi}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("sbola.manzil")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.yashash_manzili}
              </h5>
            </div>
          </div>

          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">{t("sbola.p3")}</h4>

            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("sbola.p1")}</h5>
              <h5 className="singlebemor_block_info_desc">
                {`${person.passport_seriyasi}  ${person.passport_raqami}`}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
              {t("sbola.p2")}
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.passport_qayerdan_kim_tomonidan_berilgan}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
              {t("sbola.b6")}
              </h5>
              <h5 className="singlebemor_block_info_desc">
                <a
                  className="pasport_file"
                  download
                  href={person.bemor_passporti}
                >
                  {t("sbola.p4")}
                </a>
              </h5>
            </div>
          </div>
        </div>

        <div className="singlebemor_block_right">
          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">
              {t("sbola.b1")}
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">ID</h5>
              <h5 className="singlebemor_block_info_desc">{person.bemor_id}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("bola.shifo")}</h5>
              <h5 className="singlebemor_block_info_desc">{`${person.shifokor_familiyasi} ${person.shifokor_ismi}`}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
              {t("bola.ms")}
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {localStorage.getItem("names")}
              </h5>
            </div>
             <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("sbola.izoh")}</h5>
              <h5 className="singlebemor_block_info_desc" style={{color:'green'}}>
                {person.izoh}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                {t("bola.rxt")}
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.royxatga_olingan_sana}
              </h5>
            </div>
          </div>

          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">
              {t("sbola.d1")}
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                {t("sbola.d2")}
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.dializ_boshlangan_sana}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                {t("bola.d3")}
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.dializ_olgan_miqdori}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Filtr</h5>
              <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">{t("sbola.m")}</h5>
              <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Igna</h5>
              <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Tuz</h5>
              <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Konsentrat</h5>
              <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">RW</h5>
              <h5 className="singlebemor_block_info_desc">{person.RW === 'true' ? 'Mavjud' : "Mavjud emas"}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">SPID</h5>
              <h5 className="singlebemor_block_info_desc">{person.SPID === 'true' ? 'Mavjud' : "Mavjud emas"}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">HBsAG</h5>
              <h5 className="singlebemor_block_info_desc">{person.HBsAg === 'true' ? 'Mavjud' : "Mavjud emas"}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">ANTI_HCV</h5>
              <h5 className="singlebemor_block_info_desc">{person.Anti_HCV === 'true' ? 'Mavjud' : "Mavjud emas"}</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="modal_seans">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal_one}
          open={seans}
          onClose={handleSeansClose}
          closeAfterTransition
          BackdropProps={{
            timeout: 400,
          }}
          style={{
            marginTop: "0",
            width: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            
          }}
        >
          <Fade in={seans}>
            <div style={classes.paper}>
              <Seanslar
                Seansbemor={Seansbemor}
                sea={sea}
                setSea={setSea}
                id={bemId}
                shifokorlar={shifokorlar}
                handleSeansClose={handleSeansClose}
                loader={loader}
                setLoeder={setLoeder}
              />
            </div>
          </Fade>
        </Modal>
      </div> */}

      {/* <div className="modal_one_99">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal_one}
          open={open2}
          onClose={handleClose2}
          closeAfterTransition
          BackdropProps={{
            timeout: 400,
          }}
          style={{
            marginTop: "200px",
            width: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Fade in={open2}>
            <div style={classes.paper}>
              <div className="delete_g">
                <h4>bemorni o'chirish sababi</h4>
                <div className="izoh_text">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="nogironlik">Sababi</InputLabel>
                    <Select
                      labelId="123"
                      id="demo-simple-select3"
                      onChange={(e) => setIzohs(e.target.value)}
                      name="izoh"
                      value={input.bemor_kasallik_turi}
                    >
                      <MenuItem MenuItem value={"Vafot etdi"}>
                        Vafot etdi
                      </MenuItem>
                      <MenuItem value={"Transplant"}>Transplant</MenuItem>
                      <MenuItem value={"Muassasa almashtirildi"}>
                        Muassasa almashtirildi
                      </MenuItem>
                      <MenuItem value={"Sog'aydi"}>Sog'aydi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="delete_btn_group">
                  {izohs?.length > 3 ? (
                    <Button
                      className="red_btn"
                      variant="contained"
                      onClick={Deletes}
                    >
                      Bemorni o'chirish
                    </Button>
                  ) : (
                    <Button
                      className="red_btn"
                      variant="contained"
                      onClick={Deletes}
                      disabled
                    >
                      Bemorni o'chirish
                    </Button>
                  )}

                  <Button
                    className="no_delete_person"
                    variant="contained"
                    color="success"
                    onClick={handleClose2}
                  >
                    Bekor qilish
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      </div> */}
      {/* <Snackbar
        Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={noti}
        autoHideDuration={6000}
        onClose={handlenoti}
      >
        <Alert
          Alert
          onClose={handlenoti}
          severity={notificationn.state}
          sx={{
            width: "100%",
          }}
        >
          {notificationn.text}
        </Alert>
      </Snackbar>
      <div className="modal_scrool">
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
              timeout: 400,
            }}
          >
            <Fade in={open}>
              <div style={classes.paper}>
                <form className="form_control_scrool" action="">
                  <h1>Bemor qo'shish</h1>
                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="PINFL"
                        onChange={onChange}
                        name="JSHSHIR"
                        variant="outlined"
                        inputProps={{ maxLength: 14 }}
                        type="number"
                        defaultValue={input.JSHSHIR}
                        required
                        error={arr > 14 && true}
                      />
                      <div className="jshshir_inner">
                        batafsil
                        <div className="jshshir_inner_item">
                          <img
                            className="pnfl_icon"
                            src={pnflIcon}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="select_div">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label="Ismi"
                        onChange={(e) => onChange(e)}
                        name="ismi"
                        variant="outlined"
                        value={input.ismi}
                        required
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label="Familiyasi"
                        variant="outlined"
                        onChange={onChange}
                        name="familiyasi"
                        value={input.familiyasi}
                        required
                      />
                    </div>
                    <div className="select_div">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label="Otasining ismi"
                        variant="outlined"
                        onChange={onChange}
                        name="otasini_ismi"
                        value={input.otasini_ismi}
                        required
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div">
                      Tug'ilgan sana
                      <TextField
                        className="filed"
                        id="outlined-basic"
                        variant="outlined"
                        type="date"
                        onChange={onChange}
                        name="tugilgan_sanasi"
                        value={input.tugilgan_sanasi}
                        required
                      />
                    </div>
                    <div className="pasport_block">
                      <div className="select_div">
                        <TextField
                          className={input.ismi && "input-sel"}
                          id="outlined-basic"
                          label="Passport seriyesi"
                          variant="outlined"
                          inputProps={{ maxLength: 2 }}
                          onChange={onChange}
                          name="passport_seriyasi"
                          value={input.passport_seriyasi}
                          required
                        />
                      </div>
                      <div className="select_div">
                        <TextField
                          className={input.ismi && "input-sel"}
                          id="outlined-basic"
                          label="Passport raqam"
                          variant="outlined"
                          inputProps={{ maxLength: 7 }}
                          onChange={onChange}
                          name="passport_raqami"
                          value={input.passport_raqami}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inpub_blocks_jinsi">
                    <div className="select_div_jinsi">
                      <FormControl className={classes.formControl}>
                        <InputLabel
                          InputLabel
                          id="qon-guruh"
                          value={input.jinsi}
                        >
                          {input.jinsi ? input.jinsi : "Jinsi"}
                        </InputLabel>
                        <Select
                          labelId="qon-guruh"
                          id="demo-simple-select2"
                          // value={age}
                          onChange={onChange}
                          name={"jinsi"}
                        >
                          <MenuItem value="Erkak">Erkak</MenuItem>
                          <MenuItem value="Ayol">Ayol</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Manzil"
                        variant="outlined"
                        onChange={onChange}
                        name="manzil"
                        value={input.manzil}
                        required
                      />
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Qayerdan va kim tomonidan berilgan"
                        variant="outlined"
                        onChange={onChange}
                        name="passport_qayerdan_kim_tomonidan_berilgan"
                        value={input.passport_qayerdan_kim_tomonidan_berilgan}
                        required
                      />
                    </div>
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Ro'yxatdan o'tgan manzil"
                        variant="outlined"
                        onChange={onChange}
                        name="royxatga_olingan_sana"
                        value={input.royxatga_olingan_sana}
                        required
                      />
                    </div>
                  </div>
                  <div className="input_blocks"></div>
                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Yashash manzili"
                        variant="outlined"
                        onChange={onChange}
                        name="yashash_manzili"
                        value={input.yashash_manzili}
                        required
                      />
                    </div>
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Telefon raqami"
                        variant="outlined"
                        onChange={onChange}
                        name="tel_raqami"
                        value={input.tel_raqami}
                        required
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Qoshimcha telefon raqami"
                        variant="outlined"
                        onChange={onChange}
                        name="qoshimcha_tel_raqami"
                        value={input.qoshimcha_tel_raqami}
                      />
                    </div>
                    <div className="select_div select_div_100">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="shifokorid">Shifokor (FIO)</InputLabel>
                        <Select
                          labelId="shifokorid"
                          id="demo-simple-select5"
                          onChange={onChange}
                          name="shifokor"
                          value={input.shifokor}
                        >
                          {shifokorlar &&
                            shifokorlar.map((item, index) => (
                              <MenuItem
                                id={item.shifokor_id}
                                MenuItem
                                value={item.shifokor_id}
                              >
                                {`${item.ismi} ${item.familiyasi}`}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div">
                      Ro'yxatga olingan sanasi
                      <TextField
                        className="filed"
                        id="outlined-basic"
                        variant="outlined"
                        type="date"
                        onChange={onChange}
                        name="royxatga_olingan_sana"
                        required
                        value={input.royxatga_olingan_sana}
                      />
                    </div>
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Ijtimoiy maqom"
                        variant="outlined"
                        onChange={onChange}
                        name="ijtimoiy_maqom"
                        value={input.ijtimoiy_maqom}
                      />
                    </div>
                  </div>
                  <div className="select">
                    <div className="select_div">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="nogironlik">
                          Nogironlik guruhi
                        </InputLabel>
                        <Select
                          labelId="nogironlik"
                          id="demo-simple-select1"
                          // value={age}
                          onChange={onChange}
                          name="nogironligi"
                          value={input.nogironligi}
                          required
                        >
                          <MenuItem value={1}>1-guruh</MenuItem>
                          <MenuItem value={2}>2-guruh</MenuItem>
                          <MenuItem value={3}>3-guruh</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="select_div">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="qon-guruh">Qon guruhi</InputLabel>
                        <Select
                          labelId="qon-guruh"
                          id="demo-simple-select2"
                          value={input.qon_guruhi}
                          onChange={onChange}
                          name="qon_guruhi"
                        >
                          <MenuItem value={1}>AB(IV)Rh+</MenuItem>
                          <MenuItem value={2}>AB(IV)Rh-</MenuItem>
                          <MenuItem value={3}>A(II)Rh+</MenuItem>
                          <MenuItem value={4}>A(II)Rh-</MenuItem>
                          <MenuItem value={5}>B(III)Rh+</MenuItem>
                          <MenuItem value={6}>B(III)Rh-</MenuItem>
                          <MenuItem value={7}>O(I)Rh+</MenuItem>
                          <MenuItem value={8}>O(I)Rh-</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div-11">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="Status">Status</InputLabel>
                        <Select
                          labelId="Status"
                          id="demo-simple-select3"
                          onChange={onChange}
                          name="status"
                          value={input.status}
                          required
                        >
                          <MenuItem MenuItem value={"Nazorat ostida"}>
                            Nazorat ostida
                          </MenuItem>
                          <MenuItem value={"Vafot etgan"}>Vafot etgan</MenuItem>
                          <MenuItem value={"Dializda"}>Dializda</MenuItem>
                          <MenuItem value={"Transplant"}>Transplant</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="select_div-11">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="nogironlik">Bemor turi</InputLabel>
                        <Select
                          labelId="123"
                          id="demo-simple-select3"
                          onChange={onChange}
                          name="bemor_kasallik_turi"
                          value={input.bemor_kasallik_turi}
                        >
                          <MenuItem
                            MenuItem
                            value={"Otkir buyurak zararlanishi"}
                          >
                            Otkir buyurak zararlanishi
                          </MenuItem>
                          <MenuItem value={"Surunkali buyurak kasallanishi"}>
                            Surunkali buyurak kasallanishi
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div-11">
                      <div
                        labelId="diag"
                        id="demo-simple-select4"
                        onChange={onChange}
                        name="diagnoz"
                        required
                        onClick={handleOpen1}
                        value={input.diagnoz}
                        style={{
                          padding: "17px",
                          border: "2px solid rgb(201 201 201)",
                          cursor: "pointer",
                        }}
                        className="dializa_div_99"
                      >
                        {diainput.asorati && diainput.asosiy
                          ? "Diagnoz to'ldirildi"
                          : " Diagnoz"}
                      </div>

                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open1}
                        onClose={handleClose1}
                        closeAfterTransition
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open1}>
                          <div style={classes.paper}>
                            <div
                              className="nazad"
                              onClick={handleClose1}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              Ortga
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="Asosiy"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="asosiy"
                                required
                                value={input.asosiy}
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="raqobat"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="raqobat"
                                value={input.raqobat}
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="fon"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="fon"
                                value={input.fon}
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="bogliq"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="bogliq"
                                value={input.bogliq}
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="asorati"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="asorati"
                                value={input.asorati}
                                required
                              />
                            </div>
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              className={classes.button}
                              onClick={Dializa}
                            >
                              Qo'shish
                            </Button>
                          </div>
                        </Fade>
                      </Modal>
                    </div>
                    <div className="kasalliklar">
                      Dializa boshlanishi
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="date"
                        onChange={onChange}
                        name="dializ_boshlangan_sana"
                        value={input.dializ_boshlangan_sana}
                        required
                      />
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Dializa olgan miqdori"
                        variant="outlined"
                        onChange={onChange}
                        name="dializ_olgan_miqdori"
                        type="number"
                        value={input.dializ_olgan_miqdori}
                        required
                      />
                    </div>
                    <div className="select_div-11">
                      <div className="select_div">
                        <TextField
                          id="outlined-basic"
                          label="Filtr"
                          variant="outlined"
                          onChange={onChange}
                          name="filtr"
                          type="number"
                          value={input.filtr}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Magistral"
                        variant="outlined"
                        onChange={onChange}
                        name="magistral"
                        type="number"
                        value={input.magistral}
                        required
                      />
                    </div>
                    <div className="select_div-11">
                      <div className="select_div">
                        <TextField
                          id="outlined-basic"
                          label="Igna"
                          variant="outlined"
                          onChange={onChange}
                          name="igna"
                          type="number"
                          value={input.igna}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Tuz"
                        variant="outlined"
                        onChange={onChange}
                        name="tuz"
                        type="number"
                        required
                        value={input.tuz}
                      />
                    </div>
                    <div className="select_div-11">
                      <div className="select_div">
                        <TextField
                          id="outlined-basic"
                          label="Konsentrat"
                          variant="outlined"
                          onChange={onChange}
                          name="konsentrat"
                          type="number"
                          value={input.konsentrat}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <label class="custom-file-upload">
                    <input
                      className="upload-file visually-hidden"
                      type="file"
                      onChange={(e) => File(e)}
                    />
                    Fayl Yuklash
                  </label>
                  <label
                    class="custom-file-upload"
                    style={{
                      width: "176px",
                    }}
                  >
                    <input
                      className="upload-file visually-hidden"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    Qo'shimcha ma'lumot
                  </label>
                  <p>{pass && pass.name}</p>
                  <div className="checkbox_blocks">
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="RW"
                        variant="outlined"
                        type="checkbox"
                        onChange={(event) => onChange(event)}
                        name="RW"
                        value={input.RW}
                      />
                      <p className="checkClass">RW</p>
                    </div>
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="SPID"
                        variant="outlined"
                        onChange={(event) => onChange(event)}
                        name="SPID"
                        type="checkbox"
                        value={input.SPID}
                      />
                      <p className="checkClass">SPID</p>
                    </div>
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="HBsAg"
                        variant="outlined"
                        type="checkbox"
                        onChange={(event) => onChange(event)}
                        name="HBsAg"
                        value={input.HBsAg}
                      />
                      <p className="checkClass">HBsAg</p>
                    </div>
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="ANTI_HCV"
                        variant="outlined"
                        onChange={(event) => onChange(event)}
                        name="Anti_HCV"
                        type="checkbox"
                        value={input.Anti_HCV}
                      />
                      <p className="checkClass">ANTI_HCV</p>
                    </div>
                  </div>
                  <div className="kasalliklar1">
                    <TextField
                      id="outlined-basic"
                      label="Dializa boshlanishi"
                      variant="outlined"
                      type="text"
                      onChange={onChange}
                      name="kasalliklar"
                      value={input.kasalliklar}
                      required
                    />
                  </div>
                  <div className="button_block1">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.button}
                      onClick={Heets}
                    >
                      {edi ? `Bemor o'zgartirish` : `Bemor qo'shish`}
                    </Button>
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>
          </div> */}
    </div>
  );
};

export default SingleArxiv;

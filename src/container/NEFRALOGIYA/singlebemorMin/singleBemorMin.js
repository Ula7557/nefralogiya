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
import "./singlebemorMin.scss";
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
import pnflIcon from '../../../assets/img/pnfl.png'
import {CSVLink} from 'react-csv'
import Mseanslar from "../../../components/component/ministrSeanslar/Mseanslar";
import MSeanslar from "../../../components/component/mSeans/mseanslar";
const SingleBemorMin = () => {

    const Alert = forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation = {
        6
      }
      ref = {
        ref
      }
      variant = "filled" {
        ...props
      }
      />;
    });
    const [noti, setNoti] = useState(false);
    const [notificationn, setNotificationn] = useState({
      state: "",
      text: "",
    });

    const handleClick = () => {
      setNoti(true);
    };

    const handlenoti = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setNoti(false);
    };
  const classes = {
    table: {
      minWidth: 700,
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      padding: "50px",
      width: "100%",
      margin: "30px auto 0 auto",
      backgroundColor: "#EFF2F5",
        borderRadius: "12px"
    },
    formControl: {
      margin: "1px",
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: "5px",
    },
    button: {
      padding: "8px",
      borderRadius: "12px",
    },
  };

   function EditIt(e) {
     setInput(e);
     handleOpen(true);
     setEdi(true);
   }


  const [bemorIdpro, setBemorIdPro] = useState([]);
  const [person, setPerson] = useState([]);
  const [shifokorlar, setShifokorlar] = useState([]);
  const formData = new FormData();
  const [loader, setLoeder] = useState(true);

  const token = window.localStorage.token;
  formData.append("token", token);
  const params = useParams();

  const [sea, setSea] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  const [seans, setSeans] = useState(false);


   const [seanslar, setSeanslar] = useState({
     isFetched: false,
     data: {},
     error: null,
   });
   useEffect(() => {
     setBemId(params.id)
    //  setSeans(true);
     const formsdata = new FormData();
     formsdata.append('token', token);
     formsdata.append('bemor_id', params.id)
     request
       .post(`seans/bemor/`,formsdata)
       .then(function (res) {
         setSeanslar({
           isFetched: true,
           data: res.data,
           error: false
         });

       })
       .then(() => setLoeder(false))
       .catch(function (err) {
         setSeanslar({
           isFetched: false,
           data: [],
           error: err
         });
       });
   }, []);
  

  function Seansbemor(e) {
    setBemId(e)
    setSeans(true);
    const formsdata = new FormData();
    formsdata.append('token', token);
    formsdata.append('bemor_id', e)
    request
      .post(`seans/bemor/`, formsdata)
      .then(function (res) {
        setSea({
          isFetched: true,
          data: res.data.data,
          error: false
        });
        console.log(res.data);

      })
      .catch(function (err) {
        setSea({
          isFetched: false,
          data: [],
          error: err
        });

      });
    setLoeder(true);
    // handleSeansOpen()

  }
  console.log('sea',sea);
  const handleSeansClose = () => {
    setSeans(false);
  };

  const [bemId, setBemId] = useState(null);
  useEffect(() => {
    request
      .get(`/bemor/all/`, formData)
      .then(function (res) {
        console.log(res.data,"res");
        setBemorIdPro({
          isFetched: true,
          data: res.data,
          error: false,
        });
        setPerson(
          res.data.data.filter((item) => +item.bemor_id === +params.id)[0]
        );
        setShifokorlar(res.data.shifokorlar);
        setLoeder(false);
      })
      .catch(function (err) {
        setBemorIdPro({
          isFetched: false,
          data: [],
          error: err,
        });
      });
  }, [params.id, loader]);

  const [shifokorid, setShifokorid] = useState([]);

 
  const [shifokor, setShifokor] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/shifokor/all/`)
      .then(function (res) {
        setShifokor({
          isFetched: true,
          data: res.data,
          error: false
        });
       
      })
      .then(() => setLoeder(false))
      .catch(function (err) {
        setShifokor({
          isFetched: false,
          data: [],
          error: err
        });
      });
  }, []);
  useEffect(()=> {
    if(person) {
       setShifokorid(
         shifokor?.data?.data?.filter((item) => item.shifokor_id == person.shifokor)[0]
       )
    }
  },[person])





  const [bemorid, setBemorId] = useState([]);
  const [excelbemor, setExcelbemor] = useState([bemorIdpro])

 function Iddiagnoz(id) {
   const formmdata = new FormData();
   formmdata.append("token", token);
   request
     .post(`/diagnoz/${id}`, formmdata)
     .then(function (res) {
       setBemorId({
         isFetched: true,
         data: res.data,
         error: false
       });
     })
     .then(() => setLoeder(false))
     .catch(function (err) {
       setBemorId({
         isFetched: false,
         data: [],
         error: err
       });
     });
 }

  

    


  const [open2, setOpen2] = useState(false);
  const [ides, setides] = useState(null);

  const handleOpen2 = (e) => {
    setides(e);
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const [izohs, setIzohs] = useState("");
  const navigate = useNavigate();
  function Deletes(id) {
    const forms = new FormData();
    forms.append("token", token);
    forms.append("bemor_id", ides);
    forms.append("izoh", izohs);
    setIzohs("");
    request
      .post(`/dalete/bemor/`, forms)
      .then(function (res) {
        console.log(res.data);
        setLoeder(false);
        
        setNotificationn({
          state: "success",
          text: `Bemor o'chirildi`,
        });
        handleClick(true);
        navigate("/muassasa");
      })
      .catch(function (err) {
        console.log(err);
        setLoeder(false);
        setNotificationn({
          state: "success",
          text: `Bemor o'chirilmadi`,
        });
      });
    setLoeder(true);
    handleClose2();
  }

  const [input, setInput] = useState({
    kasalliklar: "",
    tuman: "",
    bemor_passporti: "",
    qoshimcha_malumot: "",
    qoshimcha_tel_raqami: "",
    rasxodniki: 0,
    nogironligi: "",
    RW: "false",
    SPID: "false",
    HBsAg: "false",
    Anti_HCV: "false",
  });

   const onDializa = (e) => {
     setDiainput({
       ...diainput,
       [e.target.name]: e.target.value
     });
   };

   function Dializa(e) {
     const formmdata = new FormData();
     for (let [key, val] of Object.entries(diainput)) {
       formmdata.append(key, val)
     }
     formmdata.append('token', token);
     request
       .post(`/bemor/create/diagnoz/`, formmdata)
       .then(function (res) {
         setInput({
           ...input,
           diagnoz: res.data.id
         });
       })
       .then(() => setLoeder(false))
       .catch(function (err) {
         setDializa({
           isFetched: false,
           data: [],
           error: err
         });
       });
     handleClose1();
   }

   const [dializa, setDializa] = useState({
     isFetched: false,
     data: {},
     error: null,
   });

   console.log('seanslar',seanslar);
   const [diainput, setDiainput] = useState([])
   const [arr, setArr] = useState([])
const [open1, setOpen1] = useState(false);

 const [edits, setEdits] = useState({
   isFetched: false,
   data: {},
   error: null,
 });

 const pnflChange = (e) => {
   let arr = [];
   arr.push(e.target.value);
   setArr(arr.join("").split("").length);
   const body = new FormData();
   body.append("JSHSHIR", e.target.value);
   body.append("token", token);
   request.post("/identifikatsiya/", body).then((data) =>
     setInput({
       JSHSHIR: data.data.JSHSHIR,
       ismi: data.data.ism,
       familiyasi: data.data.familiya,
       otasini_ismi: data.data.otasini_ismi,
       tugilgan_sanasi: data.data.tugilgan_sana,
       passport_raqami: data.data.pasport_raqami,
       passport_seriyasi: data.data.pasport_seriya,
       kasalliklar: " ",
       tuman: " ",
       RW: "false",
       SPID: "false",
       HBsAg: "false",
       Anti_HCV: "false",
       passport_qayerdan_kim_tomonidan_berilgan: " ",
       yashash_manzili: " ",
       bemor_passporti: " ",
       qoshimcha_malumot: " ",
       qoshimcha_tel_raqami: " ",
       ijtimoiy_maqom: " ",
       manzil: " ",
       nogironligi: "",
       rasxodniki: 0,
       jinsi: data.data.jinsi === "male" ? "Erkak" : "Ayol",
     })
   );
 }


 function Heets() {
   const fordata = new FormData();
   fordata.append("token", token);
   fordata.append("qoshimcha_malumot", file);
   fordata.append("bemor_passporti", pass);

   for (let [key, value] of Object.entries(input)) {
     fordata.append(key, value);
   }
   request
     .put(`/create/bemor/`, fordata)
     .then(function (res) {
       setNotificationn({
         state: "success",
         text: `Bemor o'zgardi`,
       });
       setEdits({
         isFetched: true,
         data: res.data,
         error: false,
       });
       console.log(res.data);
       setLoeder(false)
       handleClick(true);
     })
     .catch(function (err) {
       setNotificationn({
         state: "error",
         text: `Bemor o'zgarmadi`,
       });
       setEdits({
         isFetched: false,
         data: [],
         error: err,
       });
       handleClick(true);
     });
   setInput({});
   handleClose();
   setEdi(false);
   setLoeder(true);
 }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

const handleOpen1 = () => {
  setOpen1(true);
};

const handleClose1 = () => {
  setOpen1(false);
};
  
   const [edi, setEdi] = useState(false);
    const onChange = (e) => {
      if (e.target.type === "checkbox") {
        setInput({
          ...input,
          [e.target.name]: String(e.target.checked)
        });
      } else {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }
    };
    const [pass, setPass] = useState();
    const [file, setFile] = useState()
    const {
      id
    } = useParams()

    console.log('person',person);
                console.log('qqq',seanslar)
              

   const shifol = seanslar.data.data &&  seanslar.data.data.find(el => +el.bemor_id === +params.id)
  if (loader) return <Loading />;
  return (
    <div className="singlebemor">
      <div className="singlebemor_top">
        <div className="singlebemor_top_left">
          <Link  to={
            `/poliklinika/${localStorage.getItem('muassasaId',id)}`
          } >
            <Button startIcon={<ArrowBackIcon />} variant="contained">
              Ortga
            </Button>
          </Link>

          <Button
            onClick={() => Seansbemor(person.bemor_id)}
            startIcon={<AccessTimeIcon />}
            variant="contained"
          >
            Seanslar
          </Button>
        </div>
        <div className="singlebemor_top_right">
          <Button startIcon={<DescriptionIcon />} variant="contained">
            <CSVLink data={JSON.stringify(person)}  className="excel_download">Excelga yuklab olish</CSVLink>
          </Button>
        </div>
      </div>
      <div className="singlebemor_block">
        <div className="singlebemor_block_left">
          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">
              Shaxsiy ma'lumotlar
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Familiyasi</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.familiyasi}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Ismi</h5>
              <h5 className="singlebemor_block_info_desc">{person.ismi}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Otasini ismi</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.otasini_ismi}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">PINFL</h5>
              <h5 className="singlebemor_block_info_desc">{person.JSHSHIR}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Tug'ilgan sanasi</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.tugilgan_sanasi}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Nogironligi</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.nogironligi} {
                  person.nogironligi == 4 ? 'Nogiron emas' : '-guruh'
                }
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Qon guruhi</h5>
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
              <h5 className="singlebemor_block_info_desc">Kasbi</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.ijtimoiy_maqom}
              </h5>
            </div>
          </div>

          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">Bemor haqida</h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Status</h5>
              <h5 className="singlebemor_block_info_desc">{person.status}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Bemorning kassaligi
              </h5>
              <h5 className="singlebemor_block_info_desc">{person.bemor_kasallik_turi}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Bemorning holati</h5>
              <h5 className="singlebemor_block_info_desc">
                {seanslar.data.data && seanslar.data.data.length > 0 ? 
              seanslar.data.data[seanslar.data.data.length - 1].bemor_holati : 'Nomalum'
              }
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Diagnoz</h5>
              <div className="singlebemor_block_info_desc">
                <Button
                  className="popup"
                  onMouseEnter={() => Iddiagnoz(person.diagnoz)}
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
              Bemorning manzili va kontakti
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Telefon raqami</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.tel_raqami}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Qo'shimcha telefon raqami
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person?.qoshimcha_tel_raqami}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Jinsi</h5>
              <h5 className="singlebemor_block_info_desc">{person.jinsi}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Yashash manzili</h5>
              <h5 className="singlebemor_block_info_desc">
                {person.yashash_manzili}
              </h5>
            </div>
          </div>

          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">Bemorning pasporti</h4>

            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Pasport</h5>
              <h5 className="singlebemor_block_info_desc">
                {`${person.passport_seriyasi}  ${person.passport_raqami}`}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Pasport qayerda va kim tomon berilgan
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.passport_qayerdan_kim_tomonidan_berilgan}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Bemorning pasporti
              </h5>
              <h5 className="singlebemor_block_info_desc">
                <a
                  className="pasport_file"
                  download target='_blank'
                  href={`${person.bemor_passporti}`}
                >
                
                  yuklash   
                </a>
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Qo'shimcha Ma'lumotlar
              </h5>
              <h5 className="singlebemor_block_info_desc">
                <a
                  className="pasport_file"
                  download target='_blank'
                  href={`${person.qoshimcha_malumot}`}
                >
                  yuklash
                </a> 
              </h5>
            </div>
          </div>
        </div> 

        <div className="singlebemor_block_right">
          <div className="singlebemor_block_info"> 
            <h4 className="singlebemor_block_info_title"> 
              Biriktilingan ma’lumotlar
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">ID</h5>
              <h5 className="singlebemor_block_info_desc">{person.bemor_id}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Shifokor</h5>
              
              <h5 className="singlebemor_block_info_desc">{shifol && `${shifol.Shifokor_ismi} ${shifol.Shifokor_familiyasi}`}</h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Biriktirilgan tibbiy muassasaning nomi
              </h5>
              <h5 style={{overflowY:"scroll"}} className="singlebemor_block_info_desc">
                {person.muassasa}
              </h5>
            </div>
            {/* <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Ro'yxatga olingan sanasi
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.royxatga_olingan_sana}
              </h5>
            </div> */}
          </div>

          <div className="singlebemor_block_info">
            <h4 className="singlebemor_block_info_title">
              Dializ ma’lumotlari
            </h4>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Dializ boshlangan sana
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.dializ_boshlangan_sana}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">
                Dializ olingan soni
              </h5>
              <h5 className="singlebemor_block_info_desc">
                {person.dializ_olgan_miqdori}
              </h5>
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Filtr</h5>
             {
               seanslar?.data.data.length > 0 ?  <h5 className="singlebemor_block_info_desc">{seanslar?.data.data[0].filtr_miqdori}</h5> : <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
             }
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Magistral</h5>
              {
                seanslar.data.data.length > 0 ? <h5 className="singlebemor_block_info_desc">{seanslar?.data.data[0].magistral_miqdori}</h5> : <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
              }
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Igna Arterial</h5>
              {
                seanslar.data.data.length > 0 ? <h5 className="singlebemor_block_info_desc">{ seanslar?.data.data[0].igna_miqdori}</h5> : <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
              }
            </div>
            <div className="singlebemor_block_info_inner">
              <h5 className="singlebemor_block_info_desc">Igna Venoz</h5>
              {
                seanslar.data.data.length > 0 ? <h5 className="singlebemor_block_info_desc">{seanslar?.data.data[0].igna2_miqdori}</h5> : <h5 className="singlebemor_block_info_desc">Mavjud emas</h5>
              }
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
      <div className="modal_seans">
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
              <MSeanslar
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
      </div>
    </div>
  );
};

export default SingleBemorMin;

import {
  Button,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Snackbar, Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { request } from '../../../api/request';
import { Contextvalue } from '../../../context/context'; 
import Loading from '../../../components/loading/loading';
import './muassasa.scss'
import del from '../../../assets/img/delete.png'
import MuiAlert from '@mui/material/Alert';
import Seanslar from '../../../components/component/seanslar/seanslar';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Error from '../../../Error/Error';
import pnflIcon from '../../../assets/img/pnfl.png'
import l1 from '../../../assets/icon/l1.svg'
import { useTranslation } from 'react-i18next';

export default function Arxiv() {

   const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const [noti, setNoti] = React.useState(false);
const [notificationn, setNotificationn] = React.useState({
  state: '',
  text: ''
});

const handleClick = () => {
  setNoti(true);
};

const handlenoti = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setNoti(false);
};

  var a = {
    Ё: "YO",
    Й: "I",
    Ц: "TS",
    У: "U",
    К: "K",
    Е: "E",
    Н: "N",
    Г: "G",
    Ш: "SH",
    Щ: "SCH",
    З: "Z",
    Х: "H",
    Ъ: "'",
    ё: "yo",
    й: "i",
    ц: "ts",
    у: "u",
    к: "k",
    е: "e",
    н: "n",
    г: "g",
    ш: "sh",
    щ: "sch",
    з: "z",
    х: "h",
    ъ: "'",
    Ф: "F",
    Ы: "I",
    В: "V",
    А: "A",
    П: "P",
    Р: "R",
    О: "O",
    Л: "L",
    Д: "D",
    Ж: "ZH",
    Э: "E",
    ф: "f",
    ы: "i",
    в: "v",
    а: "a",
    п: "p",
    р: "r",
    о: "o",
    л: "l",
    д: "d",
    ж: "zh",
    э: "e",
    Я: "Ya",
    Ч: "CH",
    С: "S",
    М: "M",
    И: "I",
    Т: "T",
    Ь: "'",
    Б: "B",
    Ю: "YU",
    я: "ya",
    ч: "ch",
    с: "s",
    м: "m",
    и: "i",
    т: "t",
    ь: "'",
    б: "b",
    ю: "yu",
  };


  const token = window.localStorage.token

  const formData = new FormData();
  formData.append('token', token);

  const [loader, setLoeder] = useState(true);


  const [person, setPerson] = useState([])
  const [shifokorlar, setShifokorlar] = useState([])
  const [delebemor, setDeleBemor] = useState({
     isFetched: false,
       data: {},
       error: null,
  })

  console.log('person_delete',person)

   React.useEffect(() => {
     request
       .post(`/bemorlar/arxiv/`, formData)
       .then(function (res) {
         setDeleBemor({
           isFetched: true,
           data: res.data,
           error: false,
         });
         setPerson(res.data)
         setShifokorlar(res.data)
       })
       .catch(function (err) {
         setDeleBemor({
           isFetched: false,
           data: [],
           error: err,
         });
       });
   }, [loader]);
const [data,setData] = useState([])
   useEffect(() => {
    request
      .post("/muassasa/", formData)
      .then((data) => setData(data.data.data));
  }, []);
  console.log(data,"Dad");

  const {id} = useParams()
  // const [bemorIdpro, setBemorIdPro] = useState([])
  // React.useEffect(() => {
  //   request
  //     .post(`/bemorlar/`, formData)
  //     .then(function (res) {
  //       setBemorIdPro({
  //         isFetched: true,
  //         data: res.data,
  //         error: false,
  //       });
  //       setPerson(res.data.bemorlar)
  //       setShifokorlar(res.data.shifokorlar)
  //     })
  //     .catch(function (err) {
  //       setBemorIdPro({
  //         isFetched: false,
  //         data: [],
  //         error: err,
  //       });
  //     });
  // }, [loader]);



  const [muassasa, setMuassasa] = useState([]);
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
      backgroundColor: "white",
      border: "2px solid #000",
      // boxShadow: theme.shadows[5],
      padding: "50px",
      width: "80%",
      margin: "30px auto 0 auto",
    },
    formControl: {
      margin: "1px",
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: "5px",
    },
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const [ides,setides] = useState(null)

  const handleOpen2 = (e) => {
    setides(e)
    setOpen2(true);
  };

 

  const handleClose2 = () => {
    setOpen2(false);
  };



  const [seans, setSeans] = React.useState(false);


const handleSeansClose = () => {
  setSeans(false);
};


  const [dializa, setDializa] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [bemor1,setBemor1] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

   

  


  // function Create(e) {
  //   const formmdata = new FormData();
  //   formmdata.append('token', token);
  //   for (let [key, value] of Object.entries(input)) {
  //     formmdata.append(key, value)
  //   }
  //   request
  //     .post(`/create/bemor/`, formmdata)
  //     .then(function (res) {
  //     setNotificationn({
  //       state: 'success',
  //       text: `Bemor qo'shildi`
  //     })
  //       setBemor1({ isFetched: true, data: res.data, error: false });
  //       console.log(res.data);
  //       handleClick(true);
  
  //     })
  //     .catch(function (err) {
  //     setNotificationn({state: 'error', text: `Bemor qo'shilmadi`})
  //       setBemor1({ isFetched: false, data: [], error: err });
  //       handleClick(true);
        
  //     });
  //   setLoeder(true);
  //   handleClose();
  // }

  const [bemorid, setBemorId] = useState([]);

  function Iddiagnoz(id) {
const formmdata = new FormData();
formmdata.append('token', token);
    request
      .post(`/diagnoz/${id}`, formmdata)
      .then(function (res) {
        setBemorId({ isFetched: true, data: res.data, error: false });
      })
      .then(() => setLoeder(false))
      .catch(function (err) {
        setBemorId({ isFetched: false, data: [], error: err });
      });
  }

    //  function Deletes(id) {
    //    const forms = new FormData();
    //    forms.append("token", token);
    //    forms.append('bemor_id', ides)
    //    request
    //      .post(`/dalete/bemor/`, forms)
    //      .then(function (res) {
    //        console.log(res.data);
    //      })
    //      .catch(function (err) {
    //        console.log(err);
    //      })
    //    setLoeder(!loader)
    //    handleClose2()
    //  }


  // function Dializa(e) {
  //   const formmdata = new FormData();
  //   for (let [key, val] of Object.entries(diainput)) {
  //     formmdata.append(key, val)
  //   }
  //   formmdata.append('token', token);
  //   request
  //     .post(`/bemor/create/diagnoz/`, formmdata)
  //     .then(function (res) {
  //       setInput({ ...input, diagnoz: res.data.id });
  //     })
  //     .then(() => setLoeder(false))
  //     .catch(function (err) {
  //       setDializa({ isFetched: false, data: [], error: err });
  //     });
  //   handleClose1();
  // }

  // const onDializa = (e) => {
  //   setDiainput({ ...diainput, [e.target.name]: e.target.value });
  // };
  // const [arr, setArr] = useState(null);
  // const [diainput, setDiainput] = useState({});
  // const [input, setInput] = useState({
  //   kasalliklar: "",
  //   tuman: "",
  //   bemor_passporti: "",
  //   qoshimcha_malumot: "",
  //   RW: 'false',
  //   SPID: 'false',
  //   HBsAg: 'false',
  //   Anti_HCV: 'false',
  // });
  // const onChange = (e) => {
  //      let arr = [];
  //      arr.push(e.target.value);
  //      setArr(arr.join("").split("").length);
  //      const body = new FormData();
  //      body.append("JSHSHIR", e.target.value);
  //      body.append("token", token);
  //      request.post("/identifikatsiya/", body).then((data) =>
  //        setInput({
  //          JSHSHIR: data.data.JSHSHIR,
  //          ismi: data.data.ism,
  //          familiyasi: data.data.familiya,
  //          otasini_ismi: data.data.otasini_ismi,
  //          tugilgan_sanasi: data.data.tugilgan_sana,
  //          passport_raqami: data.data.pasport_raqami,
  //          passport_seriyasi: data.data.pasport_seriya,
  //          kasalliklar: "",
  //          tuman: "",
  //          RW: "false",
  //          SPID: "false",
  //          HBsAg: "false",
  //          Anti_HCV: "false",
  //          bemor_passporti: "",
  //          qoshimcha_malumot:""
  //        })
  //      );
  //   if (e.target.type === "checkbox") {
  //      setInput({ ...input, [e.target.name]: String(e.target.checked) });
  //   } else {
  //     setInput({ ...input, [e.target.name]: e.target.value });
  //   }
  // };

  // function transliterate(word) {
  //   return word
  //     .split("")
  //     .map(function (char) {
  //       return a[char] || char;
  //     })
  //     .join("");
  // }


  //  function filt(params) {
  //   if (params.length > 1) {
  //     const filteredData = person.filter((item) => {
  //       return Object.values(transliterate(String(item.familiyasi)))
  //         .join("")
  //         .toLowerCase()
  //         .includes(transliterate(params.toLowerCase())); 
  //     });
  //     setPerson(
  //      filteredData,
  //     );
  //   } else {
  //     setPerson(delebemor.data.data); 
    
  //   }
  // }


  const [sea, setSea] = useState({
    isFetched: false,
    data: {},
    error: null,
  }
  )

  console.log('sea',sea);
  
  
const [ids, setIds] = useState(null)
const [viloyat, setViloyat] = useState({
  isFetched: false,
  data: {},
  error: null,
});
   React.useEffect(() => {
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
        el.muassasalar.find((el) =>+ el.id === +idls)
       );

    const muassasaName =    muassalar1 &&   muassalar1.muassasalar.find (el => +el.id ===+idls);
       
const [bemId, setBemId] = useState(null)


 function Seansbemor(e) {
   setBemId(e)
   setSeans(true);
   const formsdata = new FormData();
   formsdata.append('token', token);
   formsdata.append('bemor_id',e)
   request
     .post(`seans/bemor/`, formsdata)
     .then(function (res) {
       setSea({
         isFetched: true,
         data: res.data,
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

 }

 Array.prototype.remove = function () {
   var what,
     a = arguments,
     L = a.length,
     ax;
   while (L && this.length) {
     what = a[--L];
     while ((ax = this.indexOf(what)) !== -1) {
       this.splice(ax, 1);
     }
   }
   return this;
 };


 const [idfill, setIdfill] = useState([]);
 const [check, setCheck] = useState([]);

 // person.filter(item => item.izoh)

 console.log("idfill", idfill);

 function Fillters(vall, add) {
   const l = [...check];
   if (add) {
     l.push(vall);
   } else {
     l.remove(vall);
   }
   setCheck(l);
   let fila = [];
   fila.push(person?.data.filter((item) => l.includes(item.izoh)));
   setIdfill(fila);
 }
 const {t} = useTranslation()
 
 console.log('person',person);

    if (delebemor.error) return <Error/>
  if(!delebemor.isFetched) return <Loading/>

  


  return (
    <div className="arxiv_personal" style={{ paddingRight: "20px", paddingLeft:"20px" }}>
      <div className="muassasa_blocks">
        <div className="muassasa_blocks_left">
          <h4>
            {t("vosita.title")}:
            {delebemor.data.data.length && delebemor?.data.data.length}
          </h4>
        </div>
        <div className="muassasa_blocks_right">
          <h1>{muassasaName && muassasaName.muassasa_nomi}</h1>
          <h2>Direktor: {data[0] && data[0].bosh_vrach}</h2>
          <h3>Telefon Raqami:+{data[0] && data[0].bosh_vrach_tel_raqami}</h3> 
        </div>
      </div>
      {
        person.data.length == 0 ?  <h1>Bemor mavjud emas</h1>
        : <div className="poliklinika">
        <div className="arxiv_filter">
          <FormControl component="fieldset">
            <FormLabel component="legend">Saralash</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="Vafot etdi"
                control={<Checkbox />}
                label="Vafot etdi"
                labelPlacement="end"
                onChange={(e) => {
                  if (e.target.checked) {
                    Fillters(e.target.value, true);
                  } else {
                    Fillters(e.target.value, false);
                  }
                }}
              />
              <FormControlLabel
                value="Transplant"
                control={<Checkbox />}
                label="Transplant"
                labelPlacement="end"
                onChange={(e) => {
                  if (e.target.checked) {
                    Fillters(e.target.value, true);
                  } else {
                    Fillters(e.target.value, false);
                  }
                }}
              />
              <FormControlLabel
                value="Muassasa almashtirildi"
                control={<Checkbox />}
                label="Muassasa almashtirildi"
                labelPlacement="end"
                onChange={(e) => {
                  if (e.target.checked) {
                    Fillters(e.target.value, true);
                  } else {
                    Fillters(e.target.value, false);
                  }
                }}
              />
              <FormControlLabel
                value="Sog'aydi"
                control={<Checkbox />}
                label="Sog'aydi"
                labelPlacement="end"
                onChange={(e) => {
                  if (e.target.checked) {
                    Fillters(e.target.value, true);
                  } else {
                    Fillters(e.target.value, false);
                  }
                }}
              />

              <Button variant="text" onClick={() => window.location.reload()}>
                Barchasi
              </Button>
            </FormGroup>
          </FormControl>
        </div>
        <div className="poliklinika">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow   style={{backgroundColor: 'white'}} >
                   <TableCell>Soni</TableCell>
                  <TableCell
                    align="left"
                  >
                    PINFL
                  </TableCell>
                  <TableCell
                    align="left"
                  >
                    {t("shifokor.name")}
                  </TableCell>
                  <TableCell
                    align="left"
                  >
                    {t("shifokor.birthday")}
                  </TableCell>
                  <TableCell
                    align="left"
                  >
                    {t("sidebar.li4")}
                  </TableCell>
                  <TableCell
                    align="left"
                  >
                    {t("bola.ms")}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                   {t("sbola.izoh")}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                   {t("shifokor.batafsil")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className='arxiv1'>
                {idfill.length > 0
                  ? idfill[0].map((row, index) => (
                    <TableRow TableRow key = {row.name}style = {{backgroundColor: 'white'}} >
                      <TableCell TableCell component = "th" scope = "row" >{index + 1} </TableCell>
                      <TableCell align="left">{row.JSHSHIR}</TableCell>
                      <TableCell align="left">{`${row.familiyasi} ${row.ismi} ${row.otasini_ismi}`}</TableCell>
                      <TableCell align="left">{row.tugilgan_sanasi}</TableCell>
                      <TableCell align="left">{`${row.shifokor_familiyasi} ${row.shifokor_ismi}`}</TableCell>
                      <TableCell align="left">{muassasaName && muassasaName.muassasa_nomi}</TableCell>
                      <TableCell align="center">{row.izoh}</TableCell>
                    <TableCell align="right">
                      <div className="button_modal button_modal_1">
                        <Link Link to = {`/arxivmalumot/${row.bemor_id}`}
                          className = 'single_info' >
                          <img className="delete_icon" src={l1} alt="batafsil" />
                        </Link>
                      </div>
                      </TableCell>
                    </TableRow>
                    ))
                  : person?.data.map((row, index) => (
                     <TableRow key={row.name}>
                        <TableCell TableCell component = "th" scope = "row" >{index + 1} </TableCell>
                        <TableCell align="left">{row.JSHSHIR}</TableCell>
                        <TableCell align="left">{`${row.familiyasi} ${row.ismi} ${row.otasini_ismi}`}</TableCell>
                        <TableCell align="left">{row.tugilgan_sanasi}</TableCell>
                        <TableCell align="left">{`${row.shifokor_familiyasi} ${row.shifokor_ismi}`}</TableCell>
                        <TableCell align="left">{muassasaName && muassasaName.muassasa_nomi}</TableCell>
                        <TableCell align="center">{row.izoh}</TableCell>
                      <TableCell align="right">
                      <div className="button_modal button_modal_1">
                          <Link Link to = {
                            `/arxivmalumot/${row.bemor_id}`
                          }
                          className = 'single_info' >
                            <img className="delete_icon" src={l1} alt="batafsil" />
                          </Link>
                      </div>
                      </TableCell>
                    </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div> 
      }

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
              <Seanslar
                Seansbemor={Seansbemor}
                sea={sea}
                setSea={setSea}
                id={bemId}
                shifokorlar={shifokorlar}
                handleSeansClose={handleSeansClose}
              />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
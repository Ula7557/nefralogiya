import {  Alert, Button, Fade, FormControl, InputLabel, MenuItem, Modal, Paper, Select, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { request } from '../../../api/request';
import { Contextvalue } from '../../../context/context';
import Error from '../../../Error/Error';
import Loading from '../../loading/loading';
import './poliklinika.scss'
import del from '../../../assets/img/delete.png'
import MuiAlert from '@mui/material/Alert';
import Mseanslar from '../ministrSeanslar/Mseanslar';
import AddIcon from '@mui/icons-material/Add';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import l1 from '../../../assets/icon/l1.svg'
import axios from 'axios';
import MSeanslar from '../mSeans/mseanslar';


export default function CustomizedTables() {

  const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const [noti, setNoti] = React.useState(false);
const [error, setError] = React.useState(false);
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
  setError(false)
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
  const [value,setValue] = useState([])

  const {id} = useParams()


  const [bemorIdpro, setBemorIdPro] = useState([])
  React.useEffect(() => {
    request
      .post(`/bemor/${id}`, formData)
      .then(function (res) {
        setBemorIdPro({
          isFetched: true,
          data: res.data,
          error: false,
        });
        setValue(res.data.muassasa);
        setPerson(res.data.data)
      })
      .catch(function (err) {
        setBemorIdPro({
          isFetched: false,
          data: [],
          error: true,
        });
        if (err.message === "Request failed with status code 401"){
          setError(true)
          setTimeout(() =>{
            navigate('/')
            localStorage.removeItem("token")
            localStorage.removeItem("id")
            window.location.reload()
          },2000)
      }
      });
  }, [loader]);


  const { paramsid } = useContext(Contextvalue);
  const navigate = useNavigate();
  const [viloyat, setViloyat] = React.useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [region, setRegion] = React.useState([]);
  React.useEffect(() => {
    request
      .post(`/viloyatlar/`, formData)
      .then(function (res)  {
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

  const [seanslar, setSeanslar] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  // useEffect(() => {
  //   setBemId(params.id)
  //   //  setSeans(true);
  //   const formsdata = new FormData();
  //   formsdata.append('token', token);
  //   formsdata.append('bemor_id', params.id)
  //   request
  //     .post(`seans/bemor/`, formsdata)
  //     .then(function (res) {
  //       setSeanslar({
  //         isFetched: true,
  //         data: res.data,
  //         error: false
  //       });
        

  //     })
  //     .then(() => setLoeder(false))
  //     .catch(function (err) {
  //       setSeanslar({
  //         isFetched: false,
  //         data: [],
  //         error: err
  //       });
  //     });
  // }, []);

  


  const params = useParams();
  const [muassasa, setMuassasa] = useState([]);
  const classes = {
    table: {
      minWidth: 700,
      backgroundColor:'#E7EBF2'
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
const [bemId, setBemId] = useState(null)
const [sea, setSea] = useState({
  isFetched: false,
  data: {},
  error: null,
})



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
      handleSeansOpen()
 }


   const handleSeansOpen = () => {
     setSeans(true);
   };

   const handleSeansClose = () => {
     setSeans(false);
   };


   let backgrounds = [{
       background: "greey",
       color: "white"
     },
     {
       background: "green",
       color: "white"
     },
     {
       background: "yellow",
       color: "black"
     },
     {
       background: "red",
       color: "white"
     },
   ];

  const [bemor, setBemor] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  useEffect(() => {
    request
      .get(`/bemor/all/`)
      .then(function (res) {
        setBemor({ isFetched: true, data: res.data, error: false });
      })
      .then(() => setLoeder(false))
      .catch(function (err) {
        setBemor({ isFetched: false, data: [], error: err });
      });
  }, [params.id, loader]);

  const [shifokor, setShifokor] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  const [status,setStatus] = useState([])
  useEffect(() => {
    request
      .get(`/shifokor/all/`)
      .then(function (res) {
        setShifokor({ isFetched: true, data: res.data, error: false });
      })
      .then(() => setLoeder(false))
      .catch(function (err) {
        setShifokor({ isFetched: false, data: [], error: err });
      });
  }, []);

   useEffect(() => {
     if (person) {
const promises = [];
        person.forEach(elem => {
          const formsdata = new FormData();
          formsdata.append('token', token)
          formsdata.append('bemor_id', elem.bemor_id)
            promises.push(
              request
                .post(`seans/bemor/`, formsdata)
            )
        });
Promise.all(promises).then(res => {
  let arr = []
  arr.push(res.map((elem)=> elem.data.data))
  setStatus(...arr)
})
    }
   },[person])

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

  function Openmuassasa(e) {
    setMuassasa(
      ...viloyat.data.data.filter((item) => +item.id === +e.target.value)
    );
  }

localStorage.setItem('muassasaId', id);
  

   
  

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



  
  
  function transliterate(word) {
    return word
      .split("")
      .map(function (char) {
        return a[char] || char;
      })
      .join("");
  }

  
   function filt(params) {
    if (params.length > 3) {
      const filteredData = person.filter((item) => {
        return Object.values(transliterate(String(item.familiyasi)))
          .join("")
          .toLowerCase()
          .includes(transliterate(params.toLowerCase())); 
      });
      setPerson(
       filteredData
      );
    }
     else {
      setPerson(bemorIdpro.data.data); 
    }
  }
  const idlsd = localStorage.getItem("id")


     const muassalar1 =
       viloyat.data.data &&
       viloyat.data.data.find((el) =>
         el.muassasalar.find((el) => +el.id === +params.id)
       );
       const muassasaName =
         muassalar1 && muassalar1.muassasalar.find((el) => +el.id === +params.id);

if (bemor.error) return <Error/>
  if(!bemor.isFetched) return <Loading/>
  return (
    <div className="arix_blocks">
      <div className="poliklinika_blocks">
        <div className="poliklinika_blocks_left">
          <div className="back_btn">
            <Link to={`/muassasalar/${localStorage.getItem("hudud", id)}`}>
              <Button startIcon={<ArrowBackIcon />} variant="contained">
                Ortga
              </Button>
            </Link>
            <Link to={`/skladM/${params.id}`} style = {{display:"block",marginTop:"14px"}}>
              <Button startIcon={<ArrowBackIcon />} variant="contained">
                {muassasaName && muassasaName.muassasa_nomi} Omborxonasi
              </Button>
            </Link>
            <Link to={`/jihozlar/${params.id}`} style = {{display:"block",marginTop:"14px"}}>
              <Button startIcon={<ArrowBackIcon />} variant="contained">
                {muassasaName && muassasaName.muassasa_nomi} Jihozlar
              </Button>
            </Link>
          </div>
          <h1>{muassasaName && muassasaName.muassasa_nomi}</h1>
        </div>
        <div className="poliklinika_blocks_left">
          <div className="serach_person">
            <TextField
              onChange={(e) => filt(e.target.value)}
              id="standard-search"
              label="Bemor familiyasi"
              type="search"
              variant="standard"
            />
          </div>
        </div>
      </div>

    <div className="muassasa_directors">
      <h2>Muassasa Direktori: {value.bosh_vrach}</h2>
      <h2>Direktor tel: {value.bosh_vrach_tel_raqami}</h2>
    </div>
      <div className="button_block">
        <Stack spacing={2}>
          <Snackbar open={error} autoHideDuration={6000} onClose={handlenoti}>
            <Alert onClose={handlenoti} severity="error" sx={{ width: "100%" }}>
              Qandaydir qurilma profilingizga kirdi!
            </Alert>
          </Snackbar>
        </Stack>
        {idlsd && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpen}
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Qo'shish
          </Button>
        )}
      </div>
      <h4
        style={{
          margin: "0",
        }}
      >
        Jami bemorlar soni {bemorIdpro?.data?.data?.length}
      </h4>

      <div className="poliklinika">
        <div className="poliklinika">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead className='table_head_block'>
                <TableRow>
                  <TableCell>Soni</TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    FIO
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Shifokor(FIO)
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Dializ olgan soni
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Dializa boshlangan sana
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Telefon raqam
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Bemorning holati
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Batafsil
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Seanslar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {person?.map((row, index) => (
                  <TableRow TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{`${row.familiyasi} ${row.ismi} ${row.otasini_ismi}`}</TableCell>
                    <TableCell align="left">{`${row.shifokor_familiyasi} ${row.shifokor_ismi}`}</TableCell>
                    <TableCell align="left">
                      {row.dializ_olgan_miqdori}
                    </TableCell>

                    <TableCell align="left">
                      {row.dializ_boshlangan_sana}
                    </TableCell>
                    <TableCell align="left">{row.tel_raqami}</TableCell>
                   
                    {
                      status[0] && status[0][0]?.bemor_holati ==="1" &&
                      <TableCell
                      align="center"
                      className={"statuses"}
                      style={{backgroundColor:"green",color:"#fff"}} 
                    >Stabil og'ir</TableCell>
                    }
                    {
                      status[0] && status[0][0]?.bemor_holati ==="2" &&  
                      <TableCell
                      align="center"
                      className={"statuses"} 
                      style={{backgroundColor:"yellow",color:"#000"}} 
                    >O'rta og'ir</TableCell>
                    }
                    {
                      status[0] && status[0][0]?.bemor_holati ==="3" &&
                      <TableCell
                      align="center"
                      className={"statuses"} 
                      style={{backgroundColor:"red",color:"#fff"}} 
                    >O'ta og'ir</TableCell>
                    }
                    {
                      status[0]&& !status[0][0] &&
                      <TableCell
                      align="center"
                      className={"statuses"} 
                    
                    >Belgilanmagan</TableCell>
                    }
                    
                    <TableCell  align="left">
                      <Link
                        to={`/bemor/${row.bemor_id}`}
                        className="single_info"
                      >
                        <img className="delete_icon" src={l1} alt="batafsil" />
                      </Link>
                            
                    </TableCell>
                    <TableCell  align="left">
                            <Button
                              startIcon={<PendingActionsIcon />}
                              className="single_info"
                              onClick={() => Seansbemor(row.bemor_id)}
                            ></Button>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
                // shifokorlar={shifokorlar}
                handleSeansClose={handleSeansClose}
                loader={loader}
                setLoeder={setLoeder}
              />
            </div>
          </Fade>
        </Modal>
        </div>
      </div>
    </div>
  );
}

import { Button, Fade, FormControl, InputLabel, MenuItem, Modal, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import './marizalar.scss'
import { Link, useParams } from 'react-router-dom';


import l1 from "../../../assets/icon/l1.svg";
import { useEffect, useState } from 'react';
import { request } from '../../../api/request';
import Loading from '../../../components/loading/loading';
import { Error } from '@mui/icons-material';
import { format } from 'date-fns'

export default function Ariza({news,setNews}) {

  const [state, setState] = useState([])

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
          error: true,
        });
        if (err.message === "Request failed with status code 401") {
          localStorage.removeItem("token");
          window.location.reload();
        }
      });
  }, []);

  const [statuslar, setStatuslar] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

   function Statusall(id) {
     const forms = new FormData();
     forms.append("token", token);
     forms.append("ariza_id", id);
     forms.append("status", 'korildi');
     request
       .post(`omborxona/ariza/status/`, forms)
       .then(function (res) {
         console.log(res.data);
         setNews(!news)
       })
       .catch(function (err) {
         console.log(err);
       });
     setLoeder(true);
     handleClose2();
     setState([...state,id])
     
   }


  const token = window.localStorage.token
  const formData = new FormData();
  formData.append('token', token);
  const [loader, setLoeder] = useState(true);
  const [ariza, setAriza] = useState([])
  const [sar, setSar] = useState([])
  const [hud, setHud] = useState([])

  const params = useParams();
  const [person, setPerson] = useState([]);
  useEffect(() => {
    request
      .post(`/omborxona/arizalar/`, formData)
      .then(function (res) {
       
        setAriza(res.data.data);
         setSar({
           isFetched: true,
           data: res.data,
           error: false,
         });
         setHud({
           isFetched: true,
           data: res.data,
           error: false,
         });
        setLoeder(false);
      })
      .catch(function (err) {
        setAriza({
          isFetched: false,
          data: [],
          error: err,
        });
      });
  }, [loader,]);

  function Sarflovlar(e) {
    setAriza(sar.data.data.filter(item => item.ariza_turi == e))
    setCl(e)
  }
 

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

      // boxShadow: theme.shadows[5],
      padding: "10px",
      width: "80%",
      margin: "30px auto 0 auto",
      borderRadius: "12px",
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
   const [open2, setOpen2] = useState(false);
   const handleOpen2 = (e) => {
     setOpen2(true);
   };
   const handleClose2 = () => {
     setOpen2(false);
   };

   const [cl, setCl] = useState("");
   const [regi, setRegi] = useState("");

   const [age, setAge] = useState("");

   const handleChange = (event) => {
     setAge(event.target.value);
   };

  
   
   const Data = ariza.filter(el => el.ariza_turi === cl) 
   console.log(Data);
    function Hudud(e) {
      setAriza(hud.data.data.filter((item) => item.hudud_nomi == e));
      setRegi(e);
    }
    if (ariza.error) return <Error/>
  if(loader) return <Loading/>

  return (
    <dvi className="marizalar">
      <div className="ariza_top">
        <h4 className="ariza_top_title">Jami arizalar soni: {ariza.length}</h4>
      </div>
      <div className="filter_region">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Hududlar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={regi}
            onChange={(e) => Hudud(e.target.value)}
          >
            {viloyat.isFetched &&
              viloyat?.data.data.map((item, index) => (
                <MenuItem value={item.viloyat}>{item.viloyat}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="ariza_bottom">
        <div className="ariza_bottom_top">
          <input
            value="Sarflov vositalar"
            name="input_radio_label"
            type="radio"
            id="label_t5"
            onclick={() => setCl("sarflov")}
            className={`ariza_link_input ${cl === "sarflov" ? "active" : ""}`}
          />
          <label
            onClick={() => Sarflovlar("sarflov")}
            className={`ariza_link ${cl === "sarflov" ? "active" : ""}`}
            htmlFor="label_t5"
          >
            Sarflov vositalar
          </label>
          <input
            value="Jihozlar va ehtiyot qismlar"
            name="input_radio_label"
            type="radio"
            id="jihozlar"
            className="ariza_link_input"
            onclick={() => setCl("jihoz")}
          />
          <label
            onClick={() => Sarflovlar("jihoz")}
            className={`ariza_link ${cl === "jihoz" ? "active" : ""}`}
            htmlFor="jihozlar"
          >
            Jihozlar va ehtiyot qismlar
          </label>
        </div>
        <div className="ariza_bottom_bottom">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow style={{ backgroundColor: "white" }}>
                  <TableCell>Soni</TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    ID
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Direktor ism sharifi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Muassasa nomi
                  </TableCell>

                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    Sana
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Ariza statusi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Harakatlar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ariza &&
                  ariza
                    
                    .map((item, index) => (
                      <TableRow>
                        <TableCell align="left">
                          {index+1}
                        </TableCell>
                        <TableCell
                          style={{
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {item.ariza_id}
                        </TableCell>
                        <TableCell
                          style={{
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {item.kimdan}
                        </TableCell>
                        <TableCell
                          style={{
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {item.qayerdan}
                        </TableCell>
                        <TableCell
                          style={{
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {item.sana.slice(0, 10)}
                        </TableCell>
                        <TableCell
                          style={{
                            fontWeight: "bold",
                          }}
                          align="center"
                        >
                         {
                           item.status === `Ariza jo'natildi` ?  <button
                            className="status_btn"
                            // onClick={(e) => Statusall(item.ariza_id)}
                            // disabled={state.includes(item.ariza_id)}
                            disabled
                            
                          >
                            {
                              item.status === "Ariza jo'natildi" ? "Yangi" : item.status === 'rad qilish' ? 'Rad etildi' : item.status === 'qabul qilish' ? 'Qabul qilindi' : 'Javob berilmadi'
                            }
                          </button> : item.status ==='rad qilish' ?  <button
                            className="status_btn"
                            // onClick={(e) => Statusall(item.ariza_id)}
                            // disabled={state.includes(item.ariza_id)}
                            disabled
                            style={{background:'red', color:'white'}}
                          >
                            {
                              item.status === "Ariza jo'natildi" ? "Yangi" : item.status === 'rad qilish' ? 'Rad etildi' : item.status === 'qabul qilish' ? 'Qabul qilindi' : 'Javob berilmadi'
                            }
                          </button> : item.status === 'qabul qilish' ? <button
                            className="status_btn"
                            // onClick={(e) => Statusall(item.ariza_id)}
                            // disabled={state.includes(item.ariza_id)}
                            disabled
                            style={{background:'green', color:'white'}}
                          >
                            {
                              item.status === "Ariza jo'natildi" ? "Yangi" : item.status === 'rad qilish' ? 'Rad etildi' : item.status === 'qabul qilish' ? 'Qabul qilindi' : 'Javob berilmadi'
                            }
                          </button> : <button
                            className="status_btn"
                            // onClick={(e) => Statusall(item.ariza_id)}
                            // disabled={state.includes(item.ariza_id)}
                            disabled
                            style={{background:'#888888', color:'white'}}
                          >
                            {
                              item.status === "Ariza jo'natildi" ? "Yangi" : item.status === 'rad qilish' ? 'Rad etildi' : item.status === 'qabul qilish' ? 'Qabul qilindi' : 'Javob berilmadi'
                            }
                          </button>
                         }
                        </TableCell>

                        <TableCell align="center">
                          <div className="button_modal button_modal_1">
                            <Link

                              onClick={(e) => Statusall(item.ariza_id)}
                              to={`/ariza/${item.ariza_id}`}
                              className="single_info"
                            >
                              <img
                                className="delete_icon"
                                src={l1}
                                alt="batafsil"
                              />
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
    </dvi>
  );
}
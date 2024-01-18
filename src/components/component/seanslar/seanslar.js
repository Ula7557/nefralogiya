import React, { useState, useEffect,forwardRef } from 'react';
import { Alert, Button, Fade, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Modal, Paper, Radio, RadioGroup, Select, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, TextField } from '@mui/material';
import './seanslar.scss'
import {request} from '../../../api/request'
import CloseIcon from "@mui/icons-material/Close";
import Loading from '../../loading/loading';
import AddIcon from '@mui/icons-material/Add';
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import MuiAlert from "@mui/material/Alert";
import CreateSeans from '../seans_create';



const Seanslar = ({ sea, setSea, handleSeansClose, id, shifokorlar,Seansbemor, loader, setLoeder }) => {

// const [chak, setChak] = useState(1)
// const [magis, setmagis] = useState(1)
// const [kate, setkate] = useState(0)
// const [arte, setArte] = useState(1)
// const [arte2, setArte2] = useState(1)
const datas = [
  {
    desc:'Filter',
    se:'Filter turi',
  }
]

  

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
    const [open, setOpen] = useState(false);
    const handlenoti = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setNoti(false);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  const [inp, setInp] = useState({
    bemor_id:id,
    filtr_miqdori: 1,
    filtr_taminoti:"Muassasaniki",
    magistral_miqdori: 1,
    magistral_taminoti: "Muassasaniki",
    katetr_miqdori: 0,
    katetr_taminoti:"Muassasaniki",
    katetr_nomi: " ",
    igna_nomi:"",
    igna2_nomi:"",
    igna_miqdori:1,
    igna_taminoti:"Muassasaniki",
    igna2_miqdori:1,
    igna2_taminoti:"Muassasaniki",
  });
 
  



const token = window.localStorage.token


const [seansIn, setSeansIn] = useState({
  isFetched: false,
  data: {},
  error: null,
});





// const [loader, setLoeder] = useState(true);
const arr = [
  {
    category: "Filtr",
    name: "Юқори оқимли Диализаторлар 1,4-1,6м2 High Flux Series Hollow Fiber Dialyzers F15",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Юқори оқимли Диализаторлар 1,7-1,8м2 High Flux Series Hollow Fiber Dialyzers F18",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Юқори оқимли Диализаторлар 1,9-2,2м2  High Flux Series Hollow Fiber Dialyzers F19",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,0-1,2м2 Low Flux Series Hollow Fiber Dialyzers F12",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,3-1,4м2 Low Flux Series Hollow Fiber Dialyzers F14",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,5-1,6м2 Low Flux Series Hollow Fiber Dialyzers F15",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,8-1,9м2 Low Flux Series Hollow Fiber Dialyzers F18",
    size:                                 "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 2,0-2,2м2 Low Flux Series Hollow Fiber Dialyzers F20",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 0,6-0,8м2 Hemoflow F4HPS",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,0-1,2 м² Hemoflow F5HPS",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,3-1,4 м²  Hemoflow F6HPS",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,5-1,6 м² Hemoflow F7HPS",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 1,8-1,9 м² Hemoflow F8HPS",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 2,0-2,2 м²  Hemoflow F10HPS",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Диализатор 0,2-0,5м2 FX-PAED",
    size: "dona",
  },
  {
    category: "Filtr",
    name: "Болалар диализатори",
    size: "dona",
  },
  {
    category: "Magistral",
    name: "Унверсал магистрал (кат)",
    size: "dona",
  },
  {
    category: "Magistral",
    name: "Қон ўтказувчи магистрал AV-Set FMS PAED-R",
    size: "dona",
  },
  {
    category: "Igna",
    name: "Артериал фистулали ниналар 16G ",
    size: "dona",
  },
  {
    category: "Igna",
    name: "Артериал фистулали игнала FistulaNeedle Art17G",
    size: "dona",
  },
  {
    category: "Igna2",
    name: "Венозли  фистулали ниналар 16G",
    size: "dona",
  },
  {
    category: "Igna2",
    name: "Венозли  фистулали игнала FistulaNeedle Art17G",
    size: "dona",
  },
  {
    category: "Kateter",
    name: "  Икки тирқишли катетер. ZDD 11F20",
    size: "dona",
  },
  {
    category: "Kateter",
    name: "Икки тирқишли катетер. ZDD 12F20",
    size: "dona",
  },
  {
    category: "Kateter",
    name: "Икки тирқишли катетер.ZDD 8 F15",
    size: "dona",
  },
  {
    category: "Kateter",
    name: "Икки тирқишли катетер. ZDD 6,5 F12",
    size: "dona",
  },
  {
    category: "Tuz",
    name: "Таблеткали туз",
    size: "qop",
  },
  {
    category: "Konsentrat",
    name: "Кислотали концентрат",
    size: "quti",
  },
  {
    category: "Konsentrat",
    name: "Бикорбанат концентрат",
    size: "quti",
  },
  {
    category: "Dezinfiktant",
    name: "Лимон кислатаси 50%",
    size: "kanistr",
  },
  {
    category: "Dezinfiktant", 
    name: "Цитростерил",
    size: "kanistr",
  },
];
const formmdata = new FormData();
formmdata.append('token', token);
if (inp.filtr_miqdori <2 || inp.magistral_miqdori <2 || inp.igna_miqdori || inp.igna2_miqdori<2 || inp.katetr_miqdori <2){
  console.log("ok");
  formmdata.append("sabab","")
}

function Create(e) {
  e.preventDefault()
  setOpen(true);
  for (let [key, value] of Object.entries(inp)) {
    formmdata.append(key, value)
  }
  request
    .post(`/seans/create/`, formmdata)
    .then(function (res) {
      console.log(res,"res");
      Seansbemor(id)
      setSeansIn({
        isFetched: true,
        data: res.data,
        error: false
      });
      setNotificationn({
        state: 'success',
        text: `Yengi seans qo'shildi`
      })
      handleClick(true);
      setLoeder(false);
    })
    .catch(function (err) {
      setSeansIn({
        isFetched: false,
        data: [],
        error: err
      });
      handleClick(true);
      console.log(err.response.data,"rajd");
      setLoeder(false);
      if (err.response.data === "Bugungi seans mavjud" ){
        alert("Bugungi seans mavjud")
      }
      else{
        alert("Seans qo'shilmadi")
      }
    });
    handleNewClose()
    setLoeder(true);

}

const [Arr,setArr] = useState()
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setInp({
        ...inp,
        [e.target.name]: String(e.target.checked)
      });
    } else {
      setInp({
        ...inp,
        [e.target.name]: e.target.value
      });
    }
   
  };
  useEffect(() =>{
    request
    .get("/omborxona/mahsulotturi/")
    .then(data => setArr(data.data.data))
  },[])

 console.log(Arr,"a");

  const [nuds, setNuds] = useState([]);

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

  const [info, setInfo] = useState(false);

  const handleInfoOpen = (e) => {
    setInfo(true);
    setNuds(sea.data.data.filter((el) => el.id === e));
  };

  const handleInfoClose = () => {
    setInfo(false);
  };

  const [newBemor, setNewBemor] = useState(false);

  const handleNewOpen = () => {
    setNewBemor(true);
  };

  const handleNewClose = () => {
    setNewBemor(false);
  };

  console.log(open);

  return (
    <>
      <div className="seans_block">
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar  open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                          {/* {notificationn.text} */}
                          dasd
                    </Alert>
                  </Snackbar>
          </Stack>
        <div className="seans_item_blocks">
          <div className="btn_close">
            <button className="close_one_modal" onClick={handleSeansClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="new_seans">
            <h4 className="seans_bemor_title">Bemorning seanslari</h4>
            <Button
              startIcon={<AddIcon />}
              onClick={handleNewOpen}
              variant="contained"
            >
              Seans qo’shish
            </Button>
          </div>
          {sea.isFetched &&
            sea?.data.data
              .slice(0)
              .reverse()
              .map((item, index) => (
                <>
                  {/* <div key={index} className="seans_item">
                    <h3>No{sea.data && sea.data.data.length - index}</h3>
                    <span>{item.vaqti.slice(0, 10)}</span>
                    <button
                      onClick={() => handleInfoOpen(item.id)}
                      variant="contained"
                    >
                      Batafsil
                    </button>
                  </div> */}
                  <div className="seans_item_block">
                    <div className="seans_item_block_top">
                      <h3>#{sea.data && sea.data.data.length - index} Seans</h3>
                      <Button
                        onClick={() => handleInfoOpen(item.id)}
                        variant="contained"
                        startIcon={<ReceiptLongIcon />}
                      >
                        Batafsil
                      </Button>
                    </div>
                    <div className="seans_item_block_inner">
                      <h4>Sana</h4>
                      <h4>{item.vaqti.slice(0, 10)}</h4>
                    </div>
                    <div className="seans_item_block_inner">
                      <h4>Soat</h4>
                      <h4>{item.vaqti.slice(11, 16)}</h4>
                    </div>
                    <div className="seans_item_block_inner">
                      <h4>Shifokor</h4>
                      <h4>{`${item.Shifokor_familiyasi} ${item.Shifokor_ismi}`}</h4>
                    </div>
                  </div>
                </>
              ))}
          <div className={`modal_seans_t12`}>
            {nuds.map((item, index) => (
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal_one}
                open={info}
                onClose={handleInfoClose}
                closeAfterTransition
                BackdropProps={{
                  timeout: 400,
                }}
                style={{
                  marginTop: "0",
                  width: "1024px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Fade in={info}>
                  <div style={classes.paper}>
                    <div className="information_div">
                      <div className="information_block_top">
                        <h1>{item.vaqti.slice(0, 10)}</h1>
                        <button
                          className="close_modal"
                          onClick={handleInfoClose}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                      <div className="sklad">
                        <div className="table_seans_block">
                          <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>VOSITALAR</h4>
                            </div>
                            <div>
                              <h4>OLINGAN MIQDORI</h4>
                            </div>
                            <div className="name_item2">
                              <h4>TURLARI</h4>
                            </div>
                            <div className="name_item2">
                              <h4>Kimniki</h4>
                            </div>
                          </div>
                        </div>
                        <div className="table_seans_block">
                          <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>Filtr</h4>
                            </div>
                            <div>
                              <h4>{item.filtr_miqdori}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.filtr_nomi}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.filtr_taminoti}</h4>
                            </div>
                          </div>
                          <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>Magistral</h4>
                            </div>
                            <div>
                              <h4>{item.magistral_miqdori}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.magistral_nomi}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.magistral_taminoti}</h4>
                            </div>
                          </div>
                          <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>Igna Venoz</h4>
                            </div>
                            <div>
                              <h4>{item.igna2_miqdori}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.igna2_nomi}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.igna2_taminoti}</h4>
                            </div>
                          </div>
                          <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>Igna Arterial</h4>
                            </div>
                            <div>
                              <h4>{item.igna_miqdori}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.igna_nomi}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.igna_taminoti}</h4>
                            </div>
                          </div>

                          <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>Katetr</h4>
                            </div>
                            <div>
                              <h4>{item.katetr_miqdori}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>
                                {item.katetr_nomi.length == 1
                                  ? "Ishlatilinmadi"
                                  : item.katetr_nomi}
                              </h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.katetr_taminoti}</h4>
                            </div>
                          </div>
                          {/* <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>Tuz</h4>
                            </div>
                            <div>
                              <h4>{item.tuz_miqdori}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.tuz_nomi}</h4>
                            </div>
                          </div> */}
                          {/* <div className="table_seans_block_inner">
                            <div className="name_item">
                              <h4>Konsentrat</h4>
                            </div>
                            <div>
                              <h4>{item.konsentrat_miqdori}</h4>
                            </div>
                            <div className="name_item2">
                              <h4>{item.konsentrat_nomi}</h4>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className="information_block">
                        <h4>Seans vaqti</h4>
                        <h4>
                          {item.soat} soat <span>{item.minut}minut</span>
                        </h4>
                      </div>
                      <div className="information_block information_block_text">
                        <h4>Bemorning Shikoyati</h4>
                        <p className="shikoyat">{item.bemor_shikoyati}</p>
                      </div>
                      <div className="information_block information_block_text">
                        <h4>Qo'shimcha Vosita Ishlatilganligi Sababi</h4>
                        <p className="shikoyat">{item.sabab}</p>
                      </div>
                      <div className="information_block">
                        <h4>Shifokor</h4>
                        <h4>
                          {item.Shifokor_familiyasi} {item.Shifokor_ismi}
                        </h4>
                      </div>
                      <div className="information_block">
                        <h4>Bemor holati</h4>
                        {
                          // console.log(item.bemor_holati)
                          item.bemor_holati == 2 ? (
                            <h4>O'rta og'ir</h4>
                          ) : item.bemor_holati == 1 ? (
                            <h4>Stabil og'ir</h4>
                          ) : (
                            <h4>O'ta og'ir</h4>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </Fade>
              </Modal>
            ))}
            <Snackbar
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
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal_one}
              open={newBemor}
              onClose={handleNewClose}
              closeAfterTransition
              BackdropProps={{
                timeout: 400,
              }}
              style={{
                marginTop: "0",
                width: "1024px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Fade in={newBemor}>
                <form style={classes.paper} onSubmit={Create}>
                  <div className="new_bemor">
                    <button className="close_modal-1" onClick={handleNewClose}>
                      <CloseIcon />
                    </button>

                    <div className="create_seans">
                      <div className="create_seans_inner">
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Filtr turi
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Age"
                            onChange={handleChange}
                            name="filtr_nomi"
                          >
                            { 
                            Arr && Arr.Filtr.map(el => {
                                  
                                return ( <MenuItem value={el.nomi} >{el.nomi}</MenuItem>)
                                  })
                            }
                          </Select>
                        </FormControl>
                      </div>
                      <div className="create_seans_btn">
                        {inp.filtr_miqdori == 0 ? (
                          <button
                            type="button"
                            className="btn_minus"
                            disabled
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  filtr_miqdori: prev.filtr_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  filtr_miqdori: prev.filtr_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        )}
                        <h4 className="chack_title">
                          {
                            inp?.filtr_miqdori
                            // console.log('inp',inp)
                          }
                        </h4>
                        <button
                          type="button"
                          className="btn_plus"
                          onClick={() => {
                            setInp((prev) => {
                              return {
                                ...inp,
                                filtr_miqdori: prev.filtr_miqdori + 1,
                              };
                              // console.log('prev',prev);
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="radio_block_create">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Muassasaniki"
                            name="filtr_taminoti"
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="O’ziniki"
                              control={<Radio />}
                              label="O’ziniki"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              value="Muassasaniki"
                              control={<Radio />}
                              label="Muassasaniki"
                              labelPlacement="top"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>

                    <div className="create_seans">
                      <div className="create_seans_inner">
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Magistral turi
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Age"
                            onChange={handleChange}
                            name="magistral_nomi"
                          >
                            {/* <MenuItem value="Унверсал магистрал (кат)">
                              Унверсал магистрал(кат)
                            </MenuItem>
                            <MenuItem value="Қон ўтказувчи магистрал AV-Set FMS PAED-R">
                              Қон ўтказувчи магистрал AV-Set FMS PAED-R
                            </MenuItem> */}
                             {
                              Arr && Arr.Magistral.map(el => {
                                return ( <MenuItem value={el.nomi} >{el.nomi}</MenuItem>)
                                  })
                            }
                            
                          </Select>
                        </FormControl>
                      </div>
                      <div className="create_seans_btn">
                        {inp.magistral_miqdori == 0 ? (
                          <button
                            type="button"
                            disabled
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  magistral_miqdori: prev.magistral_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  magistral_miqdori: prev.magistral_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        )}
                        <h4 className="chack_title">
                          {inp?.magistral_miqdori}
                        </h4>
                        <button
                          type='button'
                          className="btn_plus"
                          onClick={() => {
                            setInp((prev) => {
                              return {
                                ...inp,
                                magistral_miqdori: prev.magistral_miqdori + 1,
                              };
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="radio_block_create">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Muassasaniki"
                            name="magistral_taminoti"
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="O’ziniki"
                              control={<Radio />}
                              label="O’ziniki"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              value="Muassasaniki"
                              control={<Radio />}
                              label="Muassasaniki"
                              labelPlacement="top"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>

                    <div className="create_seans">
                      <div className="create_seans_inner">
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Igna arterial turi
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Katetr"
                            onChange={handleChange}
                            name="igna_nomi"
                          >
                            {/* <MenuItem value="Артериал фистулали ниналар 16G ">
                              Артериал фистулали ниналар 16G{" "}
                            </MenuItem>
                            <MenuItem value="Икки тирқишли катетер.ZDD 12 F20">
                              Икки тирқишли катетер.ZDD 12 F20
                            </MenuItem> */}
                            {
                              Arr && Arr.Igna.map(el => {
                                return ( <MenuItem value={el.nomi} >{el.nomi}</MenuItem>)
                                  })
                            }
                          </Select>
                        </FormControl>
                      </div>
                      <div className="create_seans_btn">
                        {inp.igna_miqdori == 0 ? (
                          <button
                            type="button"
                            disabled
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  igna_miqdori: prev.igna_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  igna_miqdori: prev.igna_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        )}
                        <h4 className="chack_title">{inp?.igna_miqdori}</h4>
                        <button
                          type="button"
                          className="btn_plus"
                          onClick={() => {
                            setInp((prev) => {
                              return {
                                ...inp,
                                igna_miqdori: prev.igna_miqdori + 1,
                              };
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="radio_block_create">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Muassasaniki"
                            name="igna_taminoti"
                            onClick={handleChange}
                          >
                            <FormControlLabel
                              value="O’ziniki"
                              control={<Radio />}
                              label="O’ziniki"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              value="Muassasaniki"
                              control={<Radio />}
                              label="Muassasaniki"
                              labelPlacement="top"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>

                    <div className="create_seans">
                      <div className="create_seans_inner">
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Igna venoz turi
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Katetr"
                            onChange={handleChange}
                            name="igna2_nomi"
                          >
                            {/* <MenuItem value="Венозли  фистулали ниналар 16G">
                              Венозли фистулали ниналар 16G
                            </MenuItem>
                            <MenuItem value="Венозли  фистулали игнала (FistulaNeedle Art)17G">
                              Венозли фистулали игнала(FistulaNeedle Art)17G
                            </MenuItem> */}
                            {
                              Arr && Arr.Igna2.map(el => {
                                return ( <MenuItem value={el.nomi} >{el.nomi}</MenuItem>)
                                  })
                            }
                          </Select>
                        </FormControl>
                      </div>
                      <div className="create_seans_btn">
                        {inp.igna2_miqdori == 0 ? (
                          <button
                            type="button"
                            disabled
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  igna2_miqdori: prev.igna2_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  igna2_miqdori: prev.igna2_miqdori - 1,
                                };
                              });
                            }}
                          >
                            -
                          </button>
                        )}
                        <h4 className="chack_title">{inp?.igna2_miqdori}</h4>
                        <button
                          type="button"
                          className="btn_plus"
                          onClick={() => {
                            setInp((prev) => {
                              return {
                                ...inp,
                                igna2_miqdori: prev.igna2_miqdori + 1,
                              };
                              // console.log('prev',prev)
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="radio_block_create">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Muassasaniki"
                            name="igna2_taminoti"
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="O’ziniki"
                              control={<Radio />}
                              label="O’ziniki"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              value="Muassasaniki"
                              control={<Radio />}
                              label="Muassasaniki"
                              labelPlacement="top"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>

                    <div className="create_seans">
                      <div className="create_seans_inner">
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Katetr turi
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Katetr"
                            onChange={handleChange}
                            name="katetr_nomi"
                            value={inp.katetr_nomi}
                          >
                            {/* <MenuItem value="Икки тирқишли катетер.ZDD 11 F20">     

                            
                              Икки тирқишли катетер.ZDD 11 F20
                            </MenuItem>
                            <MenuItem value="Икки тирқишли катетер.ZDD 12 F20">
                              Икки тирқишли катетер.ZDD 12 F20
                            </MenuItem>
                            <MenuItem value="Икки тирқишли катетер.ZDD 8 F15">
                              Икки тирқишли катетер.ZDD 8 F15
                            </MenuItem>
                            <MenuItem value="Икки тирқишли катетер.ZDD 6, 5 F12">
                              Икки тирқишли катетер.ZDD 6, 5 F12
                            </MenuItem> */}
                            {
                              Arr && Arr.Katetr.map(el => {
                                return ( <MenuItem value={el.nomi} >{el.nomi}</MenuItem>)
                                  })
                            }
                          </Select>
                        </FormControl>
                      </div>
                      <div className="create_seans_btn">
                        {inp.katetr_miqdori == 0 ? (
                          <button
                            type="button"
                            disabled
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  katetr_miqdori: prev.katetr_miqdori - 1,
                                };
                              });
                            }}
                            // onClick={() => {
                            //   inp.katetr_miqdori === 0 ? null
                            //     : setInp((prev) => {
                            //         return {
                            //           ...inp,katetr_miqdori: prev.katetr_miqdori - 1,
                            //         };
                            //       });
                            // }}
                          >
                            -
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn_minus"
                            onClick={() => {
                              setInp((prev) => {
                                return {
                                  ...inp,
                                  katetr_miqdori: prev.katetr_miqdori - 1,
                                };
                              });
                            }}
                            // onClick={() => {
                            //   inp.katetr_miqdori === 0 ? null
                            //     : setInp((prev) => {
                            //         return {
                            //           ...inp,katetr_miqdori: prev.katetr_miqdori - 1,
                            //         };
                            //       });
                            // }}
                          >
                            -
                          </button>
                        )}
                        <h4 className="chack_title">{inp?.katetr_miqdori}</h4>
                        <button
                          type="button"
                          className="btn_plus"
                          onClick={() => {
                            setInp((prev) => {
                              return {
                                ...inp,
                                katetr_miqdori: prev.katetr_miqdori + 1,
                              };
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="radio_block_create">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Muassasaniki"
                            name="katetr_taminoti"
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="O’ziniki"
                              control={<Radio />}
                              label="O’ziniki"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              value="Muassasaniki"
                              control={<Radio />}
                              label="Muassasaniki"
                              labelPlacement="top"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>

                    <div className="new_bemor_inner_time">
                      <TextField
                        id="outlined-basic"
                        label="Seans vaqti soat"
                        type="number"
                        variant="outlined"
                        name="soat"
                        onChange={handleChange}
                        required
                      />
                      <TextField
                        id="outlined-basic"
                        label="Seans vaqti minut"
                        type="number"
                        variant="outlined"
                        name="minut"
                        onChange={handleChange}
                        required
                        defaultValu='0'
                      />
                    </div>

                    <div className="new_bemor_inner_doctor">
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Shifokor
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Shifokor"
                          onChange={handleChange}
                          name="shifokor"
                          required
                        >
                          {shifokorlar.map((item, index) => (
                            <MenuItem value={item.shifokor_id}>
                              {item.familiyasi} {item.ismi}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Bemor holati
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Age"
                          onChange={handleChange}
                          name="bemor_holati"
                          required
                        >
                          <MenuItem value={1}>Stabil og 'ir</MenuItem>
                          <MenuItem value={2}>O'rta og'ir</MenuItem>
                          <MenuItem value={3}>O'ta og'ir</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="new_bemor_inner_shikoyat">
                      <TextareaAutosize
                      style={{
                        resize:"none"
                      }}
                        aria-label="empty textarea"
                        placeholder="Qo'shimcha"
                        className="textarea_9"
                        name="bemor_shikoyati"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <TextareaAutosize
                    style={{
                      marginBottom:"14px",
                      resize:"none"
                    }}
                        aria-label="empty textarea"
                        placeholder="Qo'shimcha Vositalar Ishlatilgani Sababi"
                        className="textarea_9"
                        name="sabab"
                        required={inp.filtr_miqdori >1 || inp.magistral_miqdori >1 || inp.igna_miqdori>1 || inp.igna2_miqdori>1 || inp.katetr_miqdori >1}
                        onChange={handleChange}
                      />
                    <Button type='submit' variant="contained">
                      Seans qo'shish
                    </Button>
                  </div>
                </form>
              </Fade>
            </Modal>
           
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Seanslar;
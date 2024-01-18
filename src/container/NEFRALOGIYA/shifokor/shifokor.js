import "./shifokor.scss";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, Fade, Modal, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { request } from "../../../api/request";
import Loading from "../../../components/loading/loading";
import MuiAlert from "@mui/material/Alert";
import delIcon from '../../../assets/img/delete.png'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Error from "../../../Error/Error";
import l1 from '../../../assets/icon/l1.svg'
import l2 from '../../../assets/icon/l2.svg'
import l3 from '../../../assets/icon/l3.svg'
import {CSVLink} from 'react-csv'
import { useTranslation } from "react-i18next";
const Shifokor = () => {

const token = window.localStorage.token

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

const formData = new FormData();
formData.append("token", token);


const [input, setInput] = useState({
  qoshimcha_fayl: "", 
});

const pnflChange = (e) =>{
  console.log(typeof(e),'e');
  if(e.length == 14) {
    const body = new FormData();
      body.append("JSHSHIR", e);
      body.append("token", token);
      request.post(`https://admin-nefro.ssv.uz/api/practitioner/${e}/`, body).then((data) =>
      setInput({
          ismi: data.data.data.ism,
          familiyasi: data.data.data.familiya,
          otasini_ismi: data.data.data.otasini_ismi,
          tugilgan_sanasi: data.data.data.tugilgan_sana,
          passport_raqami: data.data.data.pasport_raqami,
          passport_seriyasi: data.data.data.pasport_seriya,
          lavozimi: data.data.data.lavozimi,
          tel_raqami: data.data.data.telefon_raqami,
          tashkiloti: data.data.data.tashkiloti,
          jinsi: data.data.data.jinsi,
          qoshimcha_fayl: "",
        })
      );
  }
}
console.log(input,'1');
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


  const [bemor1, setBemor1] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  
const [loader, setLoeder] = useState(true);

 const [open2, setOpen2] = React.useState(false);
 const [ides, setides] = useState(null);

 const handleOpen2 = (e) => {
   setides(e);
   setOpen2(true);
 };

 const handleClose2 = () => {
   setOpen2(false);
 };

  const [del, setDel] = React.useState(false);

  const deleteOpen = (e) => {
    setides(e);
    setDel(true);
  };

  const deleteClose = () => {
    setDel(false);
  };

//  const [person, setPerson] = useState([]);
 const [bemorIdpro, setBemorIdPro] = useState([]);
 const [shifokorlar, setShifokorlar] = useState([]);

 React.useEffect(() => {
   request
     .post(`/bemorlar/`, formData)
     .then(function (res) {
       setBemorIdPro({
         isFetched: true,
         data: res.data,
         error: false,
       });
      //  setPerson(res.data.bemorlar);
       setShifokorlar(res.data.shifokorlar);
       setLoeder(false)
     })
     .catch(function (err) {
       setBemorIdPro({
         isFetched: false,
         data: [],
         error: true,
       });
       setLoeder(false);
       throw err;
     });
 }, [loader]);

 
  function Deletes(id) {
    const forms = new FormData();
    forms.append("token", token);
    forms.append("shifokor_id", ides);
    request
      .post(`/dalete/shifokor/`, forms)
      .then(function (res) {
         setNotificationn({
           state: "success",
           text: `Shifokor o'chirildi`,
         });
        console.log(res.data);
        setLoeder(true)
        handleClick(true);
      })
      .catch(function (err) {
        console.log(err);
      });
    setLoeder(false);
    deleteClose();
  }
  function Search (e) {
    const regex = new RegExp(e.target.value,"gi")
    const value = shifokorlar.filter(el => el.ismi.match(regex))
      if (e.target.value.length >  1) setShifokorlar(value)
      else  setShifokorlar(bemorIdpro.data.shifokorlar) 
  }
   function Create(e) {
      const formmdata = new FormData();
      formmdata.append("token", token);
      for (let [key, value] of Object.entries(input)) {
        formmdata.append(key, value);
      }
     request
       .post(`/create/shifokor/`, formmdata)
       .then(function (res) {
          setNotificationn({
            state: "success",
            text: `Shifokor qo'shildi`,
          }); 
          setInput({ ...input, diagnoz: res.data.id });
          setLoeder(false)
          handleClick(true);
          if (res) window.location.reload()
       })
       .then(() => setLoeder(false))
       .catch(function (err) {
          setNotificationn({ state: "error", text: `Xato to'ldirdingiz` });
          setBemor1({ isFetched: false, data: [], error: err });
          handleClick(true);
          setLoeder(false);
         setBemor1({ isFetched: false, data: [], error: err });
       });
     handleClose2();
    //  window.location.reload()
   }
   const {t} = useTranslation();
   
   const idls = localStorage.getItem("id")
if (bemorIdpro.error) return <Error/>
 if(loader) return <Loading/>

  return (
    <>
      <div
        className="shifokor"
        style={{ paddingRight: "20px", paddingLeft: "20px" }}
      >
        <div className="poliklinika_top">
          <div className="poliklinika_top_left">
            <h2 className="all_doctor">
              {t("shifokor.allshifokor")}: {shifokorlar.length}
            </h2>
            <div className="search_input">
              <TextField
                id="standard-basic"
                onChange={Search}
                label={t("shifokor.placholder")}
                variant="standard"
              />
            </div>
          </div>
          <Button
            variant="contained"
            onClick={handleOpen2}
            style={{ marginTop: "15px" }}
            startIcon={<AddIcon />}
          >
            {t("shifokor.add")}
          </Button>
        </div>
        <div className="poliklinika">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow
                  style={{ backgroundColor: "white", marginTop: "25px" }}
                >
                  <TableCell>{t("shifokor.number")}</TableCell>
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
                    {t("shifokor.lavozim")}
                  </TableCell>
                  <TableCell
                    align="left"
                  >
                    {t("shifokor.professia")}
                  </TableCell>
                  <TableCell
                    align="left"
                  >
                    {t("shifokor.tel")}
                  </TableCell>
                  {/* <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Ish staji
                  </TableCell> */}
                  {/* <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Gemodializa bo'yicha ish staji
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Oxirgi malaka oshirgan vaqti va joyi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Qayta malaka oshirish vaqti
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Mutaxassislik toifasi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Telefon raqami
                  </TableCell> */}
                  {idls && (
                    <TableCell
                      align="center"
                    >
                      {t("shifokor.batafsil")}
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {shifokorlar?.map((row, index) => (
                  <TableRow TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{`${row.familiyasi} ${row.ismi} ${row.otasini_ismi}`}</TableCell>
                    <TableCell align="left">{row.tugilgan_sanasi}</TableCell>
                    <TableCell align="left">{row.lavozimi}</TableCell>
                    <TableCell align="left">
                      {row.mutaxassislik_toifasi}
                    </TableCell>
                    <TableCell align="left">{row.tel_raqami}</TableCell>
                    {/* <TableCell align="center">{row.otasini_ismi}</TableCell>
                    <TableCell align="center">{row.ish_staji}</TableCell>
                    <TableCell align="center">
                      {row.gemodializ_boyicha_ish_staji}
                    </TableCell>
                    <TableCell align="center">
                      {row.oxirgi_malaka_oshirgan_vati_va_joyi}
                    </TableCell>
                    <TableCell align="center">
                      {row.qayta_malaka_oshirish_vaqti}
                    </TableCell> */}

                    {idls && (
                      <TableCell align="left">
                        <div className="button_modal button_modal_1">
                          <div className=" button_modal_1">
                            <Link
                              Link
                              to={`/shifokor/${row.shifokor_id}`}
                              className="single_info"
                            >
                              <img
                                className="delete_icon"
                                src={l1}
                                alt="batafsil"
                              />
                            </Link>
                            {/* <button
                            onClick={(e) => EditIt(row.bemor_id)}
                            className="edit_btn"
                          >
                            <img className="delete_icon" src={l2} alt="o'zgartirish" />
                          </button> */}
                            <button
                              className="delete_div"
                              onClick={() => deleteOpen(row.shifokor_id)}
                              id={row.bemor_id}
                            >
                              <img
                                className="delete_icon"
                                src={l3}
                                alt="o'chirish"
                              />
                            </button>
                          </div>
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="modal_scrool">
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open2}
            onClose={handleClose2}
            closeAfterTransition
            BackdropProps={{
              timeout: 400,
            }}
          >
            <Fade in={open2}>
              <div style={classes.paper}>
                <div className="modal_scrool_y">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div className="add_shifokor_12">
                      <TextField
                        id="outlined-basic"
                        onChange={(e) =>pnflChange(e.target.value)}
                        name="pinfl"
                        label="PINFL"
                        variant="outlined"
                        type={"number"}
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        onChange={onChange}
                        name="ismi"
                        label={t("shifokor.alladd.name")}
                        variant="outlined"
                        value={input.ismi}
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        onChange={onChange}
                        name="familiyasi"
                        label={t("shifokor.alladd.surname")}
                        variant="outlined"
                        value={input.familiyasi}
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        onChange={onChange}
                        name="otasini_ismi"
                        label={t("shifokor.alladd.otch")}
                        variant="outlined"
                        value={input.otasini_ismi}
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        onChange={onChange}
                        name="jinsi"
                        label={t("shifokor.alladd.male")}
                        variant="outlined"
                        value={input.jinsi === 'male' ? 'Erkak' : 'Ayol'}
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <p>{t("shifokor.birthday")}</p>
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        onChange={onChange}
                        name="tugilgan_sanasi"
                        type="date"
                        variant="outlined"
                        value={input.tugilgan_sanasi}
                      />
                    </div>
                    {
                      input?.lavozimi  ? <div className="add_shifokor_12">
                      <TextField
                       className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label={t("shifokor.lavozim")}
                        onChange={onChange}
                        name="lavozimi"
                        variant="outlined"
                        value={input.lavozimi}
                      />
                    </div> : <div className="add_shifokor_12">
                      <TextField
                        id="outlined-basic"
                        label={t("shifokor.lavozim")}
                        type="string"
                        onChange={onChange}
                        name="lavozimi"
                        variant="outlined"
                      />
                    </div>
                    }
                    <div className="add_shifokor_12">
                      <TextField
                      className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        onChange={onChange}
                        type="number"
                        name="tel_raqami"
                        label={t("shifokor.tel")}
                        variant="outlined"
                        value={input.tel_raqami}
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                      className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        onChange={onChange}
                        type="text"
                        name="tashkiloti"
                        label={t("shifokor.alladd.tashkilot")}
                        variant="outlined"
                        disabled
                        value={input.tashkiloti}
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        id="outlined-basic"
                        label={t("shifokor.alladd.staj")}
                        type="number"
                        onChange={onChange}
                        name="ish_staji"
                        variant="outlined"
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        id="outlined-basic"
                        type="number"
                        label={t("shifokor.gemo")}
                        onChange={onChange}
                        name="gemodializ_boyicha_ish_staji"
                        variant="outlined"
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        id="outlined-basic"
                        onChange={onChange}
                        name="oxirgi_malaka_oshirgan_vati_va_joyi"
                        label={t("shifokor.alladd.malaka1")}
                        variant="outlined"
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        id="outlined-basic"
                        onChange={onChange}
                        name="qayta_malaka_oshirish_vaqti"
                        label={t("shifokor.alladd.malaka2")}
                        variant="outlined"
                      />
                    </div>
                    <div className="add_shifokor_12">
                      <TextField
                        id="outlined-basic"
                        onChange={onChange}
                        name="mutaxassislik_toifasi"
                        label={t("shifokor.professia")}
                        variant="outlined"
                      />
                    </div>
                    
                  </Box>
                  <Button
                    variant="contained"
                    onClick={Create}
                    style={{ marginTop: "15px" }}
                  >
                    Tasdiqlash
                  </Button>
                </div>
              </div>
            </Fade>
          </Modal>
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
          <div className="modal_one_99">
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal_one}
              open={del}
              onClose={deleteClose}
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
              <Fade in={del}>
                <div style={classes.paper}>
                  <div className="delete_btn_group">
                    <Button
                      className="red_btn"
                      variant="contained"
                      onClick={Deletes}
                    >
                      Shifokor o'chirish
                    </Button>
                    <Button
                      className="no_delete_person"
                      variant="contained"
                      color="success"
                      onClick={deleteClose}
                    >
                      Bekor qilish
                    </Button>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shifokor;

import { Button, Fade, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import './ariza.scss'
import { Link, useParams } from 'react-router-dom';


import l1 from "../../../assets/icon/l1.svg";
import { useEffect, useState } from 'react';
import { request } from '../../../api/request';
import { el } from 'date-fns/locale';
import Jihozget from '../arizajihoz/jihozget';
import { useTranslation } from 'react-i18next';

export default function Ariza() {

  const token = window.localStorage.token
  const muassasa_id = window.localStorage.muassasaId
  const formData = new FormData();
  formData.append('token', token);
  const [loader, setLoeder] = useState(true);
  const [ariza, setAriza] = useState([])
  const [sar, setSar] = useState([])
  const params = useParams();
  const [person, setPerson] = useState([]);
  useEffect(() => {
    request
      .post(`/omborxona/ariza/list/`, formData)
      .then(function (res) {

        setAriza(res.data.data);
        setSar({
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
  }, [loader, ]);

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
  const {t} = useTranslation() 
   const [open2, setOpen2] = useState(false);
   const handleOpen2 = (e) => {
     setOpen2(true);
   };
   const handleClose2 = () => {
     setOpen2(false);
   };
    const [cl, setCl] = useState("sarflov");

    function Sarflovlar(e) {
      setAriza(sar.data.data.filter(item => item.ariza_turi == e))
      setCl(e)
    }
    const Data = ariza.filter(el => el.ariza_turi === cl).reverse() 
  console.log(cl); 
    console.log(ariza);
  return (
    <dvi className="ariza">
      <div className="ariza_top">
        <h4 className="ariza_top_title">{t("bildirishnoma.allariza")}: {ariza.length}</h4> 
        <div className="create_ariza_btn">
          <Button
            onClick={() => handleOpen2()}
            variant="contained"
            startIcon={<AddIcon />}
          >
            {t("bildirishnoma.newariza")}
          </Button>
        </div>
      </div>
      <div className="ariza_bottom">
       <div className="ariza_bottom_top">
          <input
            value="Sarflov vositalar"
            name="input_radio_label"
            type="radio"
            id="label_t5"
            onclick={() =>setCl('sarflov')}
            className={`ariza_link_input ${cl === 'sarflov' ? 'active' : ''}`}
          
          />
          <label onClick={
            () => Sarflovlar('sarflov')
          }
          className={`ariza_link ${cl === 'sarflov' ? 'active' : ''}`}
          htmlFor = "label_t5" >
            {t("bildirishnoma.sarflov")}
          </label>
          <input
            value="Jihozlar va ehtiyot qismlar"
            name="input_radio_label"
            type="radio"
            id="jihozlar"
            className="ariza_link_input"
            onclick={() =>setCl('jihoz')}
           
          />
          <label  onClick = {
            () => Sarflovlar('jihoz')
          }
          className={`ariza_link ${cl === 'jihoz' ? 'active' : ''}`}
          htmlFor = "jihozlar" >
            {t("bildirishnoma.Jihozlarex")}
          </label>
        </div>
        <div className="ariza_bottom_bottom">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                 <TableRow style={{ backgroundColor: "white" }}>
                  <TableCell>{t("bildirishnoma.soni")}</TableCell>
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
                    {t("bildirishnoma.direktorism")}
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    {t("bildirishnoma.single.muas")}
                  </TableCell>
                 
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="left"
                  >
                    {t("bildirishnoma.single.data")}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    {t("bildirishnoma.single.status")}
                  </TableCell>
                  <TableCell
                    
                    align="center"
                  >
                    {t("shifokor.batafsil")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { 
                  ariza && Data.map((item,index) => {    
                    return  (
                      <>
                      <TableRow> 
                <TableCell align="left">{Data.length-index}</TableCell>
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
                    <Link Link to = {
                      `/arizasi/${item.ariza_id}`
                    }
                    className = "single_info" >
                      <img className="delete_icon" src={l1} alt="batafsil" />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
                </>
                    )
                  })
                }
               
              </TableBody>
            </Table>
          </TableContainer>
          
        </div>
      </div>
      
      <div className="modal_one_99">
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
              <div className="zayavka_block">
                <Button
                  style={{
                    color: "black",
                    textAlign: "right",
                    margin: "0 0 auto auto",
                    display: "flex",
                  }}
                  startIcon={<CloseIcon />}
                  onClick={() => handleClose2()}
                ></Button>
                <h4 className="zayavka_title">{t("modalariza.arizaturi")}</h4>
                <div className="delete_btn_group">
                  {/* <input
                    type="button"
                    value="Sarflov vositalar"
                    className="jayavka_btn"
                  />
                  <input
                    type="button"
                    value="Jihozlar va ehtiyot qismlar"
                    className="jayavka_btn"
                  /> */}
                  <Link to={'/sarflov'} className='jayavka_btn'>{t("bildirishnoma.sarflov")}</Link>
                  <Link to={'/apelatsion'} className='jayavka_btn'>{t("bildirishnoma.Jihozlarex")}</Link>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </dvi>
  );
}
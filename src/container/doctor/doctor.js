import { Button, Card, CardActions, CardContent,  Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { request } from '../../api/request';
import { Contextvalue } from '../../context/context';
import Drector from '../../modules/components/add-director/Drectot';
import bemor from "../../assets/img/bemor.svg";
import shifokor from "../../assets/img/doctor.svg";
import jihoz from "../../assets/img/jihoz.svg";
import sklad from "../../assets/img/sklad.svg";
import { useTranslation } from "react-i18next";
import './doctor.scss'


const classes = {
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px", 
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "12px",
  },
  pos: {
    marginBottom: 12,
  },
};

export default function Doctor() {
  const token = localStorage.getItem("token")
  const [viloyat, setViloyat] = useState([]);
  const[data,setData] = useState([])
  const {t} = useTranslation()
    const formData = new FormData();
    formData.append("token", token);
  useEffect(() =>{

      request
      .post(`/viloyatlar/`, formData)
      .then(function (res) {
       return setViloyat(res.data)
      })
    },[])

      useEffect(() => {
        request
          .post("/muassasa/", formData)
          .then((data) => setData(data.data.data));
      }, []);

    const id = localStorage.getItem("id")
    window.localStorage.setItem('name',data[0]?.bosh_vrach)
  // const muassalar1 =
  // viloyat.data &&
  // viloyat.data.find((el) => el.muassasalar.find((el) => +el.id === +id));
  // const muassasaName =
  // muassalar1 && muassalar1.muassasalar.find((el) => +el.id === +id);
  const{input} = useContext(Contextvalue)
  
  return (
    <>
      <div
        style={{
          display: "flex",
          marginRight: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
          <div style={{
            marginLeft:"20px",
          }}>
            <h2 className='site-heads'>
              {t("shifokor.muassasadir")}:
              <span style={{
                color:"#000"
              }}>
                  {input ? input.bosh_vrach : data.map((el) => el.bosh_vrach)}
                </span>
            </h2>
            <h2 className='site-heads'>
              {t("shifokor.direktortel")}: 
              <span style={{
                color:"#000"
              }}>
                + 
                 {input
                ? input.bosh_vrach_tel_raqami
                : data.map((el) => el.bosh_vrach_tel_raqami)}
              </span>
            </h2>
          </div>
          {id && <Drector />}
      </div>

      <div className="doctor">
        {id && (
          <Link to={"/muassasa"}>
            <Card className={classes.root}>
              <CardContent>
                <div style={{
                  // display:"flex",
                  // justifyContent:"space-between",
                  // alignItems:"center"
                }} className='doctor_div'>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {t("shifokor.bemorlar")}
                </Typography>
                <img src={bemor} />
                </div>
                <Typography variant="h5" component="h2"></Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                ></Typography>
                <Typography variant="body2" component="p">
                  <p className='doctor_desc_p'>
                  {t("shifokor.addbemor")}
                  </p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{t("bildirishnoma.batafsil")}</Button>
              </CardActions>
            </Card>
          </Link>
        )}
        {id && (
          <Link to={"/shifokor"}>
            <Card className={classes.root}>
              <CardContent>
              <div style={{
                  // width:"300px",
                  // minHeight:'100px',
                  // display:"flex",
                  // justifyContent:"space-between",
                  // alignItems:"center"
                }} className='doctor_div'>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {t("sidebar.li4")}
                </Typography>
                <img src={shifokor} />
                  </div>
                <Typography variant="h5" component="h2"></Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                ></Typography>
                <Typography variant="body2" component="p">
                  <p className='doctor_desc_p'>
                  {t("shifokor.addshifokor")}

                  </p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{t("bildirishnoma.batafsil")}</Button>
              </CardActions>
            </Card>
          </Link>
        )}

        <Link to={`/skladM/${id}`}>
          <Card className={classes.root}>
            <CardContent>
            <div style={{
                  // width:"300px",
                  // minHeight:'100px',
                  // display:"flex",
                  // justifyContent:"space-between",
                  // alignItems:"center"
                }} className='doctor_div'>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {t("sidebar.li3")}
              </Typography>
              <img src={sklad}/>    
            </div>
              <Typography variant="h5" component="h2"></Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
              ></Typography>
              <Typography variant="body2" component="p">
                <p className='doctor_desc_p'>
                {t("shifokor.addombor")}

                </p>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{t("bildirishnoma.batafsil")}</Button>
            </CardActions>
          </Card>
        </Link>

        <Link to={id ? `/jihozlar/${id}` : "/device"}>
          <Card className={classes.root}>
            <CardContent>
            <div style={{
                  // width:"300px",
                  // minHeight:'100px',
                  // display:"flex",
                  // justifyContent:"space-between",
                  // alignItems:"center"
                }} className='doctor_div'>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {t("sidebar.li2")}
              </Typography>
              <img src={jihoz} />
            </div>
              <Typography variant="h5" component="h2"></Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
              ></Typography>
              <Typography variant="body2" component="p">
                <p className='doctor_desc_p'>
                {t("jihoz.j0")}

                </p>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{t("bildirishnoma.batafsil")}</Button>
            </CardActions>
          </Card>
        </Link>
      </div>
      {/* <div className="tex_yordam">
        <h1>Texnik yordam:</h1>
        <a href="">Telegram</a>
      </div> */}
    </>
  );
}

import { useContext, useEffect, useState } from "react";
import { request } from "../../api/request";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Modalsklad from "./modal";
import { Contextvalue } from "../../context/context";
import Loading from "../../components/loading/loading";
import Error from "../../Error/Error";
import more from '../../assets/icon/l1.svg';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./skladmu.scss";
import Mmodal from "../components/add-director/minusmodal/Mmodal";
import { useTranslation } from "react-i18next";
function Skladm() { 
  const { parval,setId} = useContext(Contextvalue);
  const params = useParams();
  const [partnew, setPartnew] = useState([]);
  const [current,setCurrent] = useState({loding:false,error:false,data:[]})
  const [data,setData] = useState({loding:false,error:false,data:[]})
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("token", token);
  const {t} = useTranslation() 
  const idl = localStorage.getItem("ids")
  const hudud = localStorage.getItem("hudud");
  const mid = localStorage.getItem("id");
  useEffect(() => { 
      if (!mid){
          formData.append("viloyat_id",idl)
          hudud &&  formData.append("viloyat_id",hudud)
          request
          .post("/omborxona/muassasa/",formData)
          .then(data => setCurrent({loding:true,data:data.data,error:false}))
        }
    },[!mid])

  const Data = current.data && current.data.find(el => +el.id === +params.id)
  console.log(Data,"DAta");
  
  localStorage.setItem("parid",params.id)
  const arr = [
    {
      name: t("sbola.f"),
      category:"Filtr",
      get:Data && Data.keldi.filtr, 
      minus:Data && Data.ishlatildi.filtr,
      plus:Data && Data.mavjud.filtr,
      qoldiq:Data && Data.qoldi.filtr,
    },
    {
      name: t("sbola.m"),
      category:"Magistral",
      get:Data && Data.keldi.magistral,
      minus:Data && Data.ishlatildi.magistral,
      plus:Data && Data.mavjud.magistral,
      qoldiq:Data && Data.qoldi.magistral,
    },
    {
      name: t("sbola.i2"),
      category:"Igna",
      get:Data && Data.keldi.igna,
      minus:Data && Data.ishlatildi.igna,
      plus:Data && Data.mavjud.igna,
      qoldiq:Data && Data.qoldi.igna,
    },
    {
      name: t("sbola.i1"),
      category:"Igna2",
      get:Data && Data.keldi.igna2,
      minus:Data && Data.ishlatildi.igna2,
      plus:Data && Data.mavjud.igna2,
      qoldiq:Data && Data.qoldi.igna2,
    },
    {
      name: t("sbola.k1"),
      category:"Katetr",
      get:Data && Data.keldi.katetr,
      minus:Data && Data.ishlatildi.katetr,
      plus:Data && Data.mavjud.katetr,
      qoldiq:Data && Data.qoldi.katetr,
    },
    {
      name: t("sbola.tuz"),
      category:"Tuz",
      get:Data && Data.keldi.tuz,
      minus:Data && Data.ishlatildi.tuz,
      plus:Data && Data.mavjud.tuz,
      qoldiq:Data && Data.qoldi.tuz,
    },
    {
      name: t("sbola.kons"),
      category:"Konsentrat",
      get:Data && Data.keldi.konsentrat,
      minus:Data && Data.ishlatildi.konsentrat,
      plus:Data && Data.mavjud.konsentrat,
      qoldiq:Data && Data.qoldi.konsentrat,
    },
   {
      name: t("sbola.dez"),
      category:"Dezinfiktant",
      get:Data && Data.keldi.dezinfiktant,
      minus:Data && Data.ishlatildi.dezinfiktant,
      plus:Data && Data.mavjud.dezinfiktant,
      qoldiq:Data && Data.qoldi.dezinfiktant,
    },
  ];
 

  
  console.log(arr,"arrs");
    useEffect(() => {
          formData.append("yil",new Date().getFullYear());
          formData.append("oy",new Date().getMonth()+1);
          request
            .post("/omborxona/get/", formData)
            .then((data) =>setData({loding:true,data:data.data.data,error:false}))
            .catch(err =>{
              setData({
                error:true,
                loding:false,
                data:[]
              })  
              throw err;
            })
    },[mid]);  

    console.log(data.data,'data.data');

    const arr2 = [
      {
        name: t("sbola.f"),
        category:"Filtr",
        get:data.data[0] && data.data[0].keldi.Filtr,
        minus:data.data[0] && data.data[0].ishlatildi.Filtr,
        plus:data.data[0] && data.data[0].mavjud.Filtr,
        qoldiq:data.data[0] && data.data[0].qoldi.Filtr,
      },
      {
        name: t("sbola.m"),
        category:"Magistral",
        get:data.data[0] && data.data[0].keldi.Magistral,
        minus:data.data[0] && data.data[0].ishlatildi.Magistral,
        plus:data.data[0] && data.data[0].mavjud.Magistral,
        qoldiq:data.data[0] && data.data[0].qoldi.Magistral,
      },
      {
        name: t("sbola.i2"),
        category:"Igna",
        get:data.data[0] && data.data[0].keldi.Igna,
        minus:data.data[0] && data.data[0].ishlatildi.Igna,
        plus:data.data[0] && data.data[0].mavjud.Igna,
        qoldiq:data.data[0] && data.data[0].qoldi.Igna,
      },
      {
        name: t("sbola.i1"),
        category:"Igna2",
        get:data.data[0] && data.data[0].keldi.Igna2,
        minus:data.data[0] && data.data[0].ishlatildi.Igna2,
        plus:data.data[0] && data.data[0].mavjud.Igna2,
        qoldiq:data.data[0] && data.data[0].qoldi.Igna2,
      },
      {
        name: t("sbola.k1"),
        category:"Katetr",
        get:data.data[0] && data.data[0].keldi.Katetr,
        minus:data.data[0] && data.data[0].ishlatildi.Katetr,
        plus:data.data[0] && data.data[0].mavjud.Katetr,
        qoldiq:data.data[0] && data.data[0].qoldi.Katetr,
      },
      {
        name: t("sbola.tuz"),
        category:"Tuz",
        get:data.data[0] && data.data[0].keldi.Tuz,
        minus:data.data[0] && data.data[0].ishlatildi.Tuz,
        plus:data.data[0] && data.data[0].mavjud.Tuz,
        qoldiq:data.data[0] && data.data[0].qoldi.Tuz,
      },
      {
        name: t("sbola.kons"),
        category:"Konsentrat",
        get:data.data[0] && data.data[0].keldi.Konsentrat,
        minus:data.data[0] && data.data[0].ishlatildi.Konsentrat,
        plus:data.data[0] && data.data[0].mavjud.Konsentrat,
        qoldiq:data.data[0] && data.data[0].qoldi.Konsentrat,
      },
     {
        name: t("sbola.dez"),
        category:"Dezinfiktant",
        get:data.data[0] && data.data[0].keldi.Dezinfiktant,
        minus:data.data[0] && data.data[0].ishlatildi.Dezinfiktant,
        plus:data.data[0] && data.data[0].mavjud.Dezinfiktant,
        qoldiq:data.data[0] && data.data[0].qoldi.Dezinfiktant,
      },
    ];
    

      console.log(arr2,"arr2");
    console.log(data);
    

    const ida = localStorage.getItem("id")

    if (data.error) return <Error/>
    if (!data.loding) return <Loading/>
    
  return (
    <>
      <div style={{
        marginTop:"34px",
        marginRight:"20px",
        marginLeft:"20px"
      }}  >
        <Link to={ida?"/doctor":`/mSklad/${idl}`}>
              <Button style={{marginTop:"24px",marginBottom:"24px",backgroundColor:"#DDEBFB",borderRadius:"12px",color:"#1464C0"}} startIcon={<ArrowBackIcon />} variant="contained">
                  {t("bildirishnoma.single.ortga")}
              </Button>
          </Link>
          {
            mid && 
            <Mmodal/>
          }
        {mid && 
        <Modalsklad />
        }
        <TableContainer component={Paper}>
          <Table
            style={{ minWidth: 650, padding:'20px' }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
              <TableCell align="left">
                  {t("bildirishnoma.soni")}
                </TableCell>
                <TableCell>
                {t("bildirishnoma.single.vosi")}
                </TableCell>
                <TableCell align="center">
                {t("bildirishnoma.qoldig")}
                </TableCell>
                <TableCell align="left">
                {t("bildirishnoma.kirim")}
                </TableCell>
                <TableCell align="left"> 
                {t("bildirishnoma.chiqim")}
                </TableCell>
                <TableCell align="left">
                {t("bildirishnoma.qoldiq")}
                </TableCell>
                <TableCell align="left">
                {t("bildirishnoma.batafsil")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                mid ? 
                arr2?.map((el,index) => (
                  <TableRow>
                    <TableCell align="left">
                    {index+1}
                    </TableCell>
                    <TableCell style={{textTransform:"uppercase"}}>
                    {el.name}
                    </TableCell>
                    <TableCell style={{padding:"20px"}}   align="center">{el.qoldiq}</TableCell>
                    <TableCell style={{padding:"20px"}}   align="left">{el.get}</TableCell>
                    <TableCell style={{padding:"20px"}}   align="left">{el.minus}</TableCell>
                    <TableCell style={{padding:"20px"}}   align="left">{el.qoldiq+el.get-el.minus}</TableCell>
                    <TableCell  style={{padding:"20px"}}  align="left"><Link to={`/more/${el.category}`}><img src={more}/></Link></TableCell>
                  </TableRow>
                ))
                :
                arr?.map((el,index) => (
                  <TableRow>
                    <TableCell align="left">
                    {index+1}
                    </TableCell>
                    <TableCell style={{textTransform:"uppercase"}} > 
                    {el.name}
                    </TableCell>
                    <TableCell  align="center">{el.qoldiq}</TableCell>
                    <TableCell align="left">{el.get}</TableCell>
                    <TableCell align="left">{el.minus}</TableCell>
                    <TableCell align="left">{el.qoldiq+el.get-el.minus}</TableCell>
                    <TableCell align="left"><Link to={`/more/${el.category}`}><img src={more}/></Link></TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default Skladm;
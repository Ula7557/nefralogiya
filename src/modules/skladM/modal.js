import { Button, FormControl, InputLabel, MenuItem, Modal, Select, SvgIcon, TextField } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import l2 from "../../assets/icon/l2.svg";
import l3 from "../../assets/icon/l3.svg";
import "./modal.scss";
import { Contextvalue } from "../../context/context";
import { request } from "../../api/request";
import { useTranslation } from "react-i18next";
function Modalsklad() {
  const { setParval } =
    useContext(Contextvalue);
  const [open, setOpen] = useState(false);
  const [popone, setPopone] = useState(false);
  const [poptwo, setPoptwo] = useState(false);
  const [popthree,setPopthree] = useState(false)
  const [popfour,setPopfour] = useState(false);
  const [name, setName] = useState("");
  const [edituri,setEdituri] = useState("")
  const [ediname,setEdiname] = useState("")
  const [current,setCurrent] = useState()
  const [editid,setEditid]= useState();
  const [id,setId] = useState()
  const [turi, setTuri] = useState("");
  const [create,setCreate] = useState([]);
  const parRef = useRef();
  const miqRef = useRef()
  const edmiq = useRef()
  const {t} = useTranslation()
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPopone(false);
    setPoptwo(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

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
      category: "filtr",
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
      size: "dona",
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
      category: "Katetr",
      name: "  Икки тирқишли катетер. ZDD 11F20",
      size: "dona",
    },
    {
      category: "Katetr",
      name: "Икки тирқишли катетер. ZDD 12F20",
      size: "dona",
    },
    {
      category: "Katetr",
      name: " Икки тирқишли катетер.ZDD 8 F15",
      size: "dona",
    },
    {
      category: "Katetr",
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
  const [Arr,setArr] = useState([])

  const Changeturi = (e) =>{
    setTuri(e.target.value);
      request
      .get("/omborxona/mahsulotturi/")
      .then(data => setArr(data.data.data[e.target.value]))
  }
  const data = arr.filter(el => el.category.includes(turi))
  
  console.log(Arr,"ARR");
  function submitpar(e) {
    e.preventDefault();
    setParval(parRef.current.value);
    formData.append("partiya_raqami", parRef.current.value);
    request.post("/omborxona/partiya/create/", formData).then((data) => setId(data.data.data));
    setOpen(false);
    setPopone(true);
  }
  function submitmah(e) {
    e.preventDefault();
    formData.append("partiya_id",id.partiya_id);
    formData.append("nomi", name);
    formData.append("olchov_birligi", data[0].size);
    formData.append("turi", turi);
    formData.append("miqdori", miqRef.current.value);
    request.post("/omborxona/mahsulot/create/", formData).then((data) => setCreate(data.data.data.partiya))
    setPoptwo(false);
    setPopone(true);
  }
  function del (e) {
      formData.append("mahsulot_id",e.target.id)
      request
      .post("/omborxona/mahsulot/delete/",formData)
      const data = create.filter(el => +el.id !== +e.target.id)
      setCreate(data)
  }

 function edit(e){
  setPopthree(true)
  let current = create.find(el => el.id == e.target.id)
  setCurrent(current)
  setEditid(e.target.id)
 } 
function editSub(e){
  e.preventDefault()
  formData.append("mahsulot_id",editid);
  formData.append("nomi",ediname);
  formData.append("turi",edituri);
  formData.append("miqdori",edmiq.current.value);
  formData.append("olchov_birligi", data[0].size);
  request
  .post('/omborxona/mahsulot/update/',formData)
  .then(data => console.log(data,"edite"))
  let current = create.find(el => el.id == editid)
  let currentIndex = create.findIndex(el => el.id == editid)
  let obj = {
    id:Math.floor(Math.random())*10,
    nomi:ediname,
    turi:edituri,
    miqdori:edmiq.current.value,
    olchov_birligi:data[0].size
  }
  current = {...obj}
  create[currentIndex] = {...current}
  setCreate(create)
  setPopthree(false)
}

const token = localStorage.getItem("token")
const formData = new FormData()
formData.append("token",token)
 function Save (){
  formData.append("partiya_id",id.partiya_id)
    request
    .post("/omborxona/add/", formData)
    .then((data) => console.log(data, "save"));
    window.location.reload();
    setPopone(false);
 }

 
  return ( 
    <> 
      <Button
        style={{
          display:"flex",
          marginTop:"20px",
          marginBottom: "19px",
          marginLeft:"auto",
          borderRadius:"12px",
          backgroundColor:"#1464C0"
        }}
        onClick={handleOpen}
        variant={"contained"}
        startIcon={<AddIcon />}
      >
        {t("bola.add")}
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <Button
            style={{
              marginBottom: "14px",
              marginLeft: "-25px",
            }}
            variant="text"
            onClick={handleClose}
          >
            <SvgIcon component={ArrowBackIcon} inheritViewBox />
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <form action="#" method="post" onSubmit={submitpar}>
              <TextField
                style={{
                  width: "398px",
                  marginBottom: "20px",
                }}
                id="outlined-basic"
                label={t("vosita.partiys")}
                variant="outlined"
                required
                type={"number"}
                inputRef={parRef}
              />
              <Button
                style={{
                  display: "block",
                }}
                type="submit"
                variant="contained"
              >
                {t("bildirishnoma.jonat")}
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={popone}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box  sx={{ ...style, width: 500, }}>
            <Button
            style={{
              marginBottom: "14px",
              marginLeft: "-25px",
            }}
            variant="text"
            onClick={handleClose}
          >
            <SvgIcon component={ArrowBackIcon} inheritViewBox />
            </Button>
            <ul className={"site-list site-list--create"}>
              {
                 create.map((el,index) => {

                  return(
                    <>
                    <li>№{index+1}</li>
                    <li className="site-list__item">
                       {t("bildirishnoma.single.nomiinput")}: {el.nomi}
                    </li>
                    <li className="site-list__item">
                     {t("input.turi")}:  {
                        el.turi === "Igna"&&
                        "Igna Arterial"
                      }
                      {
                        el.turi === "Igna2" &&
                        "Igna Venoz"
                      }
                        {!el.turi.includes("igna") && el.turi}
                    </li>
                    <li className="site-list__item">
                      {t("sbola.olchov")}:  {el.olchov_birligi}
                    </li>
                    <li className="site-list__item">
                      {t("bildirishnoma.single.miqdori")}: {el.miqdori}
                    </li>
                    <li style={{marginTop:"10px",marginBottom:"14px"}}>
                        <button style={{border:"none",backgroundColor:"transparent"}} onClick={del}>
                            <img style={{marginRight:"14px"}} src={l3} id={el.id}/>
                          </button>
                          <button style={{border:"none",backgroundColor:"transparent"}} onClick={edit}>
                              <img src={l2} id={el.id}/>
                          </button>
                    </li>
                    </>
                  )
                })
              }
            </ul>
           
        <Button 
        onClick={() => setPoptwo(true)}
         startIcon={<AddIcon />}
         variant="contained">{t("bola.add")}</Button>
         <Button
         onClick={() => {setPopfour(true)
           alert("Ushbu Ma'lumotni Tasdiqlaysizmi?")}}
         style={{
          marginLeft:"18px"
         }}
          variant="contained">
              {t("bildirishnoma.kirim")}
         </Button>
        </Box>
    </Modal> 

      <Modal
        keepMounted
        open={poptwo}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <Button
            style={{
              marginBottom: "14px",
              marginLeft: "-25px",
            }}
            variant="text"
            onClick={handleClose}
          >
            <SvgIcon component={ArrowBackIcon} inheritViewBox />
          </Button>
          <form action="#" onSubmit={submitmah}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t("input.turi")}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={turi}
                label={t("bildirishnoma.single.nomiinput")}
                required
                onChange={Changeturi}
              >
                <MenuItem value={"Filtr"}>{t("sbola.f")}</MenuItem>
                <MenuItem value={"Magistral"}>{t("sbola.m")}</MenuItem>
                <MenuItem value={"Igna"}>{t("sbola.i2")}</MenuItem>
                <MenuItem value={"Igna2"}>{t("sbola.i1")}</MenuItem>
                <MenuItem value={"Katetr"}>{t("sbola.k1")}</MenuItem>
                <MenuItem value={"Tuz"}>{t("sbola.tuz")}</MenuItem>
                <MenuItem value={"Konsentrat"}>{t("sbola.kons")}</MenuItem>
                <MenuItem value={"Dezinfiktant"}>{t("sbola.dez")}</MenuItem>
              </Select>
            </FormControl> 
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t("bildirishnoma.single.nomiinput")}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label={t("bildirishnoma.single.nomiinput")}
                required
                onChange={handleChange}
              >
                {Arr.map((el, index) => {
                    return (
                      <MenuItem key={index} value={`${el.nomi}`}>
                        {el.nomi}
                      </MenuItem>
                    );
                })}
              </Select>
            </FormControl>
            <TextField
            style={{
              width: "437px",
              marginBottom: "20px",
            }}
            id="outlined-basic"
            label={t("bildirishnoma.soni")}
            variant="outlined"
            required
            type={"number"}
            inputRef={miqRef}
          />
            <Button
              style={{
                display: "block",
              }}
              type="submit"
              variant="contained"
            >
              {t("bildirishnoma.jonat")}
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal
        keepMounted
        open={popthree}
        onClose={() => setPopthree(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <Button
            style={{
              marginBottom: "14px",
              marginLeft: "-25px",
            }}
            variant="text"
            onClick={() => setPopthree(false)}
          >
            <SvgIcon component={ArrowBackIcon} inheritViewBox />
          </Button>
          <form action="#" onSubmit={editSub}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t("input.turi")}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={current && current.turi}
                label={t("bildirishnoma.single.nomiinput")}
                required
                onChange={(e) => setEdituri(e.target.value)}
              >
                <MenuItem value={"Filtr"}>{t("sbola.f")}</MenuItem>
                <MenuItem value={"Magistral"}>{t("sbola.m")}</MenuItem>
                <MenuItem value={"Igna"}>{t("sbola.i2")}</MenuItem>
                <MenuItem value={"Igna2"}>{t("sbola.i1")}</MenuItem>
                <MenuItem value={"Katetr"}>{t("sbola.k1")}</MenuItem>
                <MenuItem value={"Tuz"}>{t("sbola.tuz")}</MenuItem>
                <MenuItem value={"Konsentrat"}>{t("sbola.kons")}</MenuItem>
                <MenuItem value={"Dezinfiktant"}>{t("sbola.dez")}</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t("bildirishnoma.single.nomiinput")}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={current && current.nomi}
                label={t("bildirishnoma.single.nomiinput")}
                required
                onChange={(e) => setEdiname(e.target.value)}
              >
                {arr.map((el, index) => {
                  if (el.category === edituri)
                    return (
                      <MenuItem key={index} value={`${el.name}`}>
                        {el.name}
                      </MenuItem>
                    );
                })}
              </Select>
            </FormControl>
            <TextField
            style={{
              width: "437px",
              marginBottom: "20px",
            }}
            id="outlined-basic"
            label={t("bildirishnoma.soni")}
            variant="outlined"
            required
            type={"number"}
            // value={current && current.miqdori}
            inputRef={edmiq}
          />
            <Button
              style={{
                display: "block",
              }}
              type="submit"
              variant="contained"
            >
              {t("input.Ozgarish")}
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={popfour}
        onClose={() => setPopfour(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <Button
            style={{
              marginBottom: "14px",
              marginLeft: "-25px",
            }}
            variant="text"
            onClick={() => setPopfour(false)}
          >
            <SvgIcon component={ArrowBackIcon} inheritViewBox />
          </Button>
          <ul className={"site-list site-list--create"}>
              {
                 create.map((el,index) => {

                  return(
                    <>
                    <li>№{index+1}</li>
                    <li className="site-list__item">
                       {t("bildirishnoma.single.nomiinput")}: {el.nomi}
                    </li>
                    <li className="site-list__item">
                     {t("input.turi")}:  {
                        el.turi === "Igna"&&
                        "Igna Arterial"
                      }
                      {
                        el.turi === "Igna2" &&
                        "Igna Venoz"
                      }
                        {!el.turi.includes("igna") && el.turi}
                    </li>
                    <li className="site-list__item">
                      {t("sbola.olchov")}:  {el.olchov_birligi}
                    </li>
                    <li className="site-list__item">
                      {t("bildirishnoma.single.miqdori")}: {el.miqdori}
                    </li>
                    <li style={{marginTop:"10px",marginBottom:"14px"}}>
                        <button style={{border:"none",backgroundColor:"transparent"}} onClick={del}>
                            <img style={{marginRight:"14px"}} src={l3} id={el.id}/>
                          </button>
                          <button style={{border:"none",backgroundColor:"transparent"}} onClick={edit}>
                              <img src={l2} id={el.id}/>
                          </button>
                    </li>
                    </>
                  )
                })
              }
            </ul>
          <Button
          onClick={Save}
          style={{
            width:"100%",
            marginLeft:"18px"
          }}
            variant="contained">
                {t("shifokor.tasdiq")}
          </Button>
          </Box>
          </Modal>
    </>
  );
}
export default Modalsklad
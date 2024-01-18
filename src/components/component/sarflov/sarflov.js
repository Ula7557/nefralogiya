import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./sarflov.scss";
import { useEffect, useState, forwardRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import pdfDoc from "../../../assets/icon/pdf_doc.svg";
import scrip from "../../../assets/icon/scripka.svg";
import { request } from "../../../api/request";
import MuiAlert from "@mui/material/Alert";
import skrip from "../../../assets/icon/skrip.svg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTranslation } from "react-i18next";

const Sarflov = () => {
  const {t} = useTranslation()
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
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
  const [names,setNames] = useState(false)

  const token = window.localStorage.token;
  const formData = new FormData();
  formData.append("token", token);
  const muassasaId = localStorage.getItem("id");
  console.log("muassasaId", muassasaId);

  const [loader, setLoeder] = useState(true);
  // const [ariza, setAriza] = useState([])
  // useEffect(() => {
  //   request
  //     .post(`/omborxona/arizalar/`, formData)
  //     .then(function (res) {
  //       setAriza({
  //         isFetched: true,
  //         data: res.data,
  //         error: false,
  //       });
  //       // setPerson(res.data.bemorlar);
  //       // setShifokorlar(res.data.shifokorlar);
  //       setLoeder(false);
  //     })
  //     .catch(function (err) {
  //       setAriza({
  //         isFetched: false,
  //         data: [],
  //         error: err,
  //       });
  //     });

  // }, [loader]);

  const [sarf, setSarf] = useState([
    {
      kimdan: window.localStorage.getItem("name").split("").join(""),
      ariza_turi: "",
      muassasa: Number(muassasaId),
      ariza_turi: "sarflov",
      kimga: "",
      qoshimcha_matn: "",
    },
  ]);


  console.log(sarf);

  const [sarflovarr, setSarflovarr] = useState([
    {
      mahsulot_nomi: "",
      mahsulot_olchov_birligi: "",
      miqdori: "",
      mahsulot_turi: "",
    },
  ]);

  const params = useParams();
  const [input, setInput] = useState({
    muassasa: params.id,
  });
  console.log("params.id", params.id);

  //  const onAriza = (e) => {
  //    let arr = [];
  //    arr.push(e.target.value);
  //    if (e.target.type === "checkbox") {
  //      setSarf({
  //        ...sarf,
  //        [e.target.name]: String(e.target.checked),
  //      });
  //    } else {
  //      setSarf({
  //        ...sarf,
  //        [e.target.name]: e.target.value,
  //      });
  //    }
  //  };

  function onAriza(name, index, value) {
    let data = [];
    data.push(...sarf);
    data[index][name] = value;
    setSarf(data);
    setPass(pass);
  }

  const [turi, setTuri] = useState("");
  const [name, setName] = useState("");
  const [ediname, setEdiname] = useState("");
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

  const [down, setDown] = useState([]);

  function addObj() {
    setSarflovarr([
      ...sarflovarr,
      {
        mahsulot_nomi: "",
        mahsulot_olchov_birligi: "",
        miqdori: "",
        mahsulot_turi: "",
      },
    ]);
  }
  function addFile(value) {
    setDown([
      ...down,
      {
        filename: value,
      },
    ]);
  }

  function onChange(name, index, value) {
    let data = [];
    data.push(...sarflovarr);
    data[index][name] = value;
    arr.map((item) => {
      if (item.category === value) {
        data[index]["mahsulot_olchov_birligi"] = item.size;
      }
    });
    setSarflovarr(data);
  }

  function delObj(index) {
    let sss = [];
    sss.push(...sarflovarr);
    sss.splice(index, 1);
    setSarflovarr(sss);
  }
  function delFile(index) {
    let sss = [];
    sss.push(...down);
    sss.splice(index, 1);
    setDown(sss);
  }

  

  function dels() {
    setPass()
    setNames(true)
  }

  const [newjihoz, setNewJihoz] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  const [arizafil, setArizafil] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  // const headers = {
  //   headers: {
  //     Authorization: "Bearer " + token
  //   },
  // };
  // console.log('headers',headers);
  const [pass, setPass] = useState();
  const File = (e) => {
    setNames(true)
    setPass(e.target.files);
  };
  function send2(e) {
    const formsdata = new FormData()
    formsdata.append('token',token)
    formsdata.append('ariza_id',e)
    formsdata.append('file',pass[0])
    request
      .post(`omborxona/arizafile/`, formsdata)
      .then(function (res) {
        setNotificationn({
          state: "success",
          text: `Ariza yuborildi`,
        });
        setLoeder(false);
        setArizafil({
          isFetched: true,
          data: res.data,
          error: false,
        });
        console.log(res.data);
        handleClick(true);
      })
      .catch(function (err) {
        setNotificationn({
          state: "error",
          text: `Ariza yuborilmadi`,
        });
        setLoeder(false);
        handleClick(true);
        setArizafil({
          isFetched: false,
          data: [],
          error: err,
        });
        //  handleClick(true);
      });
  }

  function Send(e) {

    e.preventDefault();
    let a = {
      //  token:JSON.stringify(token),
      ariza: sarf,
      data: sarflovarr,
    };
    const formmdata = new FormData();
    for (var key in a) {
      formmdata.append(key, a[key]);
      setLoeder(true);
    }
    request
      .post(`omborxona/ariza/`, a)

      .then((res) => {
        setNotificationn({
          state: "success",
          text: `Ariza yuborildi`,
        });
        setLoeder(false);
        setNewJihoz({
          isFetched: true,
          data: res.data,
          error: false,
        });
        send2(res?.data?.ariza_id);
        console.log(res.data);
        handleClick(true);
      })
      .catch(function (err) {
        setNotificationn({
          state: "error",
          text: `Ariza yuborilmadi`,
        });
        setLoeder(false);
        handleClick(true);
        setNewJihoz({
          isFetched: false,
          data: [],
          error: err,
        });
        //  handleClick(true);
      });
    //  setInput({});
    //  handleClose();
    //  setEdi(false);
    setLoeder(true);
  }

  console.log("pass", pass);

  console.log(sarflovarr, "sarflovarr");
  console.log(sarf, "sarf");
  const [age, setAge] = useState("");
  // const dias = arr.filter(item =>item.category.includes(turi))
  console.log(down);

  const allArr = [...sarf, ...sarflovarr, ...down];
  console.log("allArr", allArr);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="sarflov">
      <div className="sarflov_inner">
        <Link to={"/arizalar"}>
          <Button startIcon={<ArrowBackIcon />} variant="contained">
            {t("bildirishnoma.single.ortga")}
          </Button>
        </Link>
        <h4 className="sarflov_title">{t("bildirishnoma.sarflov")}</h4>
      </div>

      <form onSubmit={Send}>
        {sarf.map((item, index) => (
          <div className="sarflov_block" key={index}>
            <h4 className="sarflov_block_title">{t("bildirishnoma.new.kimdankimga")}</h4>
            <div className="sarflov_block_inner">
              <div className="sarflov_block_inner_div">
                <h5 className="sarflov_block_inner_div_title">
                  {t("bildirishnoma.single.kimdan")} ({t("bildirishnoma.direktorism")})
                </h5>
                {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select1">Kimdan</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select1"
                    // value={item.kimdan}
                    value={item.kimdan}
                    name='kimdan'
                  label="Age"
                  onChange = {
                    (e) => onAriza(e.target.name, index, e.target.value)
                  }
                    // label="Nomi"


                >
                  <MenuItem value="H.G. Ganiyev">{
                    window.localStorage.getItem('name').split('')
                  }</MenuItem>
                </Select>
              </FormControl> */}
                <TextField
                  id="outlined-basic"
                  disabled
                  name="kimdan"
                  value={item.kimdan}
                  onChange={(e) =>
                    onAriza(e.target.name, index, e.target.value)
                  }
                  label="Outlined"
                  variant="outlined"
                />
              </div>
              {/* <div className="sarflov_block_inner_div">
              <h5 className="sarflov_block_inner_div_title">Muassasa nomi</h5>
              <TextField
                id="outlined-basic"
                label="Boyovut tuman ko’p tarmoqli markaziy poliklinikasi"
                variant="outlined"
                value={item.muassasa_id}
                onChange={(e) => onAriza(e.target.name, index, e.target.value)}

              />
            </div> */}
              <div className="sarflov_block_inner_div">
                <h5 className="sarflov_block_inner_div_title">{t("bildirishnoma.send")}</h5>
                <TextField
                  id="outlined-basic"
                  label="Minzdravga"
                  variant="outlined"
                  name="kimga"
                  required
                  value={item.kimga}
                  onChange={(e) =>
                    onAriza(e.target.name, index, e.target.value)
                  }
                />
              </div>
              {/* <div className="sarflov_block_inner_div">
              <h5 className="sarflov_block_inner_div_title">Qo’chimcha matn</h5>
              <TextField
                id="outlined-basic"
                label="Qo’chimcha matn"
                variant="outlined"
              />
            </div> */}
            </div>
          </div>
        ))}
        <div className="sarflov_block">
          <h4 className="sarflov_block_title">{t("bildirishnoma.single.vosi")}</h4>
          {sarflovarr.map((item, index) => (
            <div className="sarflov_block_inner_two">
              <h4 className="num_title">{index + 1}</h4>
              <div className="sarflov_block_inner_div_two">
                <h5 className="sarflov_block_inner_div_title">{t("bildirishnoma.single.nomi")}</h5>
                <FormControl fullWidth>
                  <InputLabel id={`demo-simple-select-label${index}`}>
                  {t("bildirishnoma.single.nomi")}
                  </InputLabel>
                  <Select
                    labelId={`demo-simple-select-label${index}`}
                    id={`demo-simple-select${index}`}
                    value={item.mahsulot_nomi}
                    label="Nomi"
                    required
                    name="mahsulot_nomi"
                    onChange={(e) =>
                      onChange(e.target.name, index, e.target.value)
                    }
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
              </div>
              <div style={{width:"11%"}}  className="sarflov_block_inner_div_two">
                <h5 className="sarflov_block_inner_div_title">
                  {t("sbola.olchov")}
                </h5>
                <TextField
                  id="outlined-basic"
                  name="mahsulot_olchov_birligi"
                  variant="outlined"
                  required
                  value={item.mahsulot_olchov_birligi}
                  disabled
                />
              </div>
              <div className="sarflov_block_inner_div_two">
                <h5 className="sarflov_block_inner_div_title">{t("bildirishnoma.soni")}</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="miqdori"
                  required
                  onChange={(e) =>
                    onChange(e.target.name, index, e.target.value)
                  }
                />
              </div>
              <div className="sarflov_block_inner_div_two">
                <h5 className="sarflov_block_inner_div_title">
                  {t("jihoz.ishlabfirma")}
                </h5>
                <FormControl fullWidth>
                  <InputLabel id={`demo-simple-select-label`}>{t("bildirishnoma.single.nomiinput")}</InputLabel>
                  <Select
                    labelId={`demo-simple-select-label`}
                    id={`demo_nomi${index}`}
                    value={item.mahsulot_turi}
                    label="Nomi"
                    required
                    name="mahsulot_turi"
                    onChange={(e) =>
                      onChange(e.target.name, index, e.target.value)
                    }
                  >
                    {arr.map((el, index) => {
                      if (el.category === item.mahsulot_nomi)
                        return (
                          <MenuItem key={index} value={`${el.name}`}>
                            {el.name}
                          </MenuItem>
                        );
                    })}
                  </Select>
                </FormControl>
              </div>
              {/* <div className="sarflov_block_inner_div_two">
                <h5 className="sarflov_block_inner_div_title">
                  Diametri (vosita turi)
                </h5>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Vosita turi
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id={`diametr${index}`}
                    // value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    {arr.map((el, index) => {
                      if (el.category === turi)
                        return (
                          <MenuItem key={index} value={`${el.size}`}>
                            {el.size}
                          </MenuItem>
                        );
                    })}
                  </Select>
                </FormControl>
              </div> */}
              <div className="close_arr_btn">
                <Button
                  onClick={(e) => delObj(index)}
                  startIcon={<CloseIcon />}
                ></Button>
              </div>
            </div>
          ))}
          <div className="add_btn">
            <Button onClick={() => addObj()} startIcon={<AddIcon />}>
              {t("vosita.vositaqosh")}
            </Button>
          </div>
        </div>

        <div className="sarflov_comment">
          <div className="sarflov_block_comment">
            <h4 className="sarflov_block_title">{t("sbola.p6")}</h4>
            {sarf.map((item, index) => (
              <div className="sarflov_block_inner_div1">
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="..."
                  name="qoshimcha_matn"
                  value={item.qoshimcha_matn}
                  onChange={(e) =>
                    onAriza(e.target.name, index, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
          <div className="sarflov_block_comment">
            <div className="sarflov_block_comment_inner">
              <div className="sarflov_top_blocks">
                <h4 className="sarflov_block_title">{t("bildirishnoma.new.fail")}</h4>

                {pass ? (
                  <Button
                    className="delets_icons_file"
                    startIcon={<DeleteForeverIcon />}
                    onClick={() => setPass()}
                    variant="contained"
                    type="button"
                  >
                    {t("bildirishnoma.new.del")}
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <input
                onChange={(e) => File(e)}
                type="file"
                id="files" 
                className="file_add_input"
              />
              <label className="download_label" htmlFor="files">
                <img src={skrip} alt="" className="files_add_icon" />
                <div className="files_block_title">
                  <p className="files_add_title">
                    {pass
                      ? t("bildirishnoma.new.failinf1")
                      : t("bildirishnoma.new.failinf")}
                  </p>
                  <span className="files_add_span">
                    {pass ? "" : t("bildirishnoma.new.biriktir")}
                  </span>
                </div>
              </label>
            </div>
            <div className="sarflov_block_inner_div">
              {down.map((item, index) =>
                down.length > 0 ? (
                  <div key={index} className="sarflov_block_download_file">
                    <label className="input_tyle_download">
                      <img src={pdfDoc} alt="" className="label_img" />
                      {item.filename}
                      <div className="close_file">
                        <Button
                          onClick={(e) => delFile(index)}
                          startIcon={<CloseIcon />}
                        ></Button>
                      </div>
                    </label>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        <Button
          // onClick={Send}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          {t("modalariza.arizayub")}
        </Button>
      </form>
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
    </div>
  );
};

export default Sarflov;

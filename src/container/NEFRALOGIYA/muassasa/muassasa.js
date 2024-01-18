
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
  Autocomplete
} from '@mui/material';
import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { request } from '../../../api/request';
import Loading from '../../../components/loading/loading';
import './muassasa.scss'
import del from '../../../assets/img/delete.png'
import MuiAlert from '@mui/material/Alert';
import Seanslar from '../../../components/component/seanslar/seanslar';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Error from '../../../Error/Error';
import pnflIcon from '../../../assets/img/pnfl.png'
import EditIcon from '@mui/icons-material/Edit';
import "../../../assets/scss/visually-hidden.scss";
import { render } from "react-dom";
// import Excels from '../../../assets/icon/excel.svg'
import DescriptionIcon from "@mui/icons-material/Description";
import l1 from '../../../assets/icon/l1.svg'
import l2 from '../../../assets/icon/l2.svg'
import l3 from '../../../assets/icon/l3.svg'
import {CSVLink} from 'react-csv'
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Box } from '@mui/system';
import Mockdata from '../../../assets/json/icd-10.json'
import more from '../../../assets/icon/more.svg';
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import { useTranslation } from 'react-i18next';
const onch = (currentNode, selectedNodes) => {
  console.log("path::", currentNode.path);
};

const assignObjectPaths = (obj, stack) => {
  Object.keys(obj).forEach(k => {
    const node = obj[k];
    if (typeof node === "object") {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

export default function Muassasa() {
  assignObjectPaths(Mockdata);

  // console.log("Mockdatas", Mockdatas);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [noti, setNoti] = useState(false);
  const [notificationn, setNotificationn] = useState({
    state: "",
    text: "",
  }); 
  const {t} = useTranslation()
  const handleClick = () => {
    setNoti(true);
  };

  const handlenoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNoti(false);
  };

  //  const [arr1,setArr1] = useState([])
  //  setArr1([...Mockdata.compose.include[0]])
  //  const arr1 = Mockdata.compose.include[0].concept

  //  console.log('arr1',arr1);

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

  const token = window.localStorage.token;

  const formData = new FormData();
  formData.append("token", token);

  const [loader, setLoeder] = useState(true);

  const [person, setPerson] = useState([]);
  const [shifokorlar, setShifokorlar] = useState([]);
  const [pass, setPass] = useState();
  const [file, setFile] = useState();
  const { id } = useParams();
  const [bemorIdpro, setBemorIdPro] = useState([]);
  const [doc, setDoc] = useState();
  const arrs = [
    {
      b1:"B"
    },
    {
      b1:"D"
    },
  ]
  React.useEffect(() => {
    request
      .post(`/bemorlar/`, formData)
      .then(function (res) {
        setBemorIdPro({
          isFetched: true,
          data: res.data,
          error: false,
        });
        // setPerson(res.data.bemorlar)
        setPerson(res.data.bemorlar.filter(el => el.familiyasi[0] === "A").concat(res.data.bemorlar.filter(el => el.familiyasi[0] === "B"),res.data.bemorlar.filter(el => el.familiyasi[0] === "D"),res.data.bemorlar.filter(el => el.familiyasi[0] === "E"),res.data.bemorlar.filter(el => el.familiyasi[0] === "F"),res.data.bemorlar.filter(el => el.familiyasi[0] === "G"),res.data.bemorlar.filter(el => el.familiyasi[0] === "H"),res.data.bemorlar.filter(el => el.familiyasi[0] === "I"),res.data.bemorlar.filter(el => el.familiyasi[0] === "J"),res.data.bemorlar.filter(el => el.familiyasi[0] === "K"),res.data.bemorlar.filter(el => el.familiyasi[0] === "L"),res.data.bemorlar.filter(el => el.familiyasi[0] === "M"),res.data.bemorlar.filter(el => el.familiyasi[0] === "N"),res.data.bemorlar.filter(el => el.familiyasi[0] === "O"),res.data.bemorlar.filter(el => el.familiyasi[0] === "P"),res.data.bemorlar.filter(el => el.familiyasi[0] === "Q"),res.data.bemorlar.filter(el => el.familiyasi[0] === "Q"),res.data.bemorlar.filter(el => el.familiyasi[0] === "R"),res.data.bemorlar.filter(el => el.familiyasi[0] === "S"),res.data.bemorlar.filter(el => el.familiyasi[0] === "T"),res.data.bemorlar.filter(el => el.familiyasi[0] === "U"),res.data.bemorlar.filter(el => el.familiyasi[0] === "V"),res.data.bemorlar.filter(el => el.familiyasi[0] === "X"),res.data.bemorlar.filter(el => el.familiyasi[0] === "Y"),res.data.bemorlar.filter(el => el.familiyasi[0] === "Z"),res.data.bemorlar.filter(el => el.familiyasi[0] === "O'",res.data.bemorlar.filter(el => el.familiyasi[0] === "G'",res.data.bemorlar.filter(el => el.familiyasi[0] === "SH",res.data.bemorlar.filter(el => el.familiyasi[0] === "CH"))))));
        setShifokorlar(res.data.shifokorlar);
        setLoeder(false);
      })
      .catch(function (err) {
        setBemorIdPro({
          isFetched: false,
          data: [],
          error: true,
        });
      });
  }, [loader]);

  const [edits, setEdits] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  function EditIt(e) {
    const arr = person.filter((el) => el.bemor_id === e);
    setInput(...arr);
    handleOpen(true);
    setEdi(true);
  }
  const [edi, setEdi] = useState(false);
  function Heets(e) {
    e.preventDefault()
    const fordata = new FormData();
    fordata.append("token", token);
    fordata.append("qoshimcha_malumot", file);
    fordata.append("bemor_passporti", pass);
    fordata.append("shifokor", doc);
    fordata.append("shifokor_id", doc);
    for (let [key, value] of Object.entries(input)) {
      fordata.append(key, value);
    }
    request
      .put(`/create/bemor/`, fordata)
      .then(function (res) {
        setNotificationn({
          state: "success",
          text: `Bemor o'zgardi`,
        });
        setEdits({
          isFetched: true,
          data: res.data,
          error: false,
        });
        console.log(res.data);
        setLoeder(false);
        handleClick(true);
      })
      .catch(function (err) {
        setNotificationn({
          state: "error",
          text: `Bemor o'zgarmadi`,
        });
        setEdits({
          isFetched: false,
          data: [],
          error: err,
        });
        handleClick(true);
      });
    setInput({});
    handleClose();
    setEdi(false);
    setLoeder(true);
  }

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
    button: {
      padding: "8px",
      borderRadius: "12px",
    },
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log('mock',Mockdata);

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const [ides, setides] = useState(null);

  const handleOpen2 = (e) => {
    setides(e);
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [seans, setSeans] = React.useState(false);
  const [izohs, setIzohs] = React.useState("");

  const handleSeansClose = () => {
    setSeans(false);
  };

  const [dializa, setDializa] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [bemor1, setBemor1] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  function Create(e) {
    e.preventDefault()
    const formmdata = new FormData();
    formmdata.append("token", token);
    formmdata.append("bemor_passporti", pass);
    formmdata.append("qoshimcha_malumot", file);
    formmdata.append("shifokor", doc);
    formmdata.append("shifokor_id", doc);
    for (let [key, value] of Object.entries(input)) {
      formmdata.append(key, value);
    }
    request
      .post(`/create/bemor/`, formmdata)
      .then(function (res) {
        setNotificationn({
          state: "success",
          text: `Bemor qo'shildi`,
        });
        setBemor1({ isFetched: true, data: res.data, error: false });
        console.log(res.data);
        handleClick(true);
        // setTimeout(() =>{
        //   window.location.reload();
        // },1500)
      })
      .catch(function (err) {
        if (err.response.data === `duplicate key value violates unique constraint \"bemor_bemor_JSHSHIR_key\"\nDETAIL:  Key (\"JSHSHIR\")=(${input.JSHSHIR}) already exists.\n`)
        {
          alert("Bu PINFL egasi qo'shilgan!")
        }
        if (!input.diagnoz)  alert("Iltimos diagnoz to'ldiring!")
        console.log(err,"err");
        setNotificationn({ state: "error", text: `Bemor qo'shilmadi` });
        setBemor1({ isFetched: false, data: [], error: err });
        handleClick(true);
      });
    setLoeder(true);
    handleClose();
  }

  const [bemorid, setBemorId] = useState([]);

  function Iddiagnoz(id) {
    console.log(Iddiagnoz, "diag");
    const formmdata = new FormData();
    formmdata.append("token", token);
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

  function Deletes(id) {
    const forms = new FormData();
    forms.append("token", token);
    forms.append("bemor_id", ides);
    forms.append("izoh", izohs);
    setIzohs("");
    request
      .post(`/dalete/bemor/`, forms)
      .then(function (res) {
        console.log(res.data);
        setNotificationn({
          state: "success",
          text: `Bemor o'chirildi`,
        });
      })
      .catch(function (err) {
        setNotificationn({
          state: "success",
          text: `Bemor o'chirilmadi`,
        });
        console.log(err);
      });
    setLoeder(true);
    handleClose2();
  }

  const [diainput, setDiainput] = useState({});
  const [multiselectdata, setMultiSelectData] = useState({
    asorati: [],
    asosiy: [],
    raqobat: [],
    fon: [],
    bogliq: [],
  });
  let aa = []
  const treeOnchangeHandler = async (a, b) => {
    aa = [];
    aa = [...b]
    console.log(aa,"a1");
    // setMultiSelectData({ ...multiselectdata, asorati: dializes });
  };
  let aa2 = []
  const treeOnchangeHandler2 = (a, b) => {
    aa2 = [];
    aa2 = [...b]
    console.log(aa2,"a2");
    // const dializes = [...multiselectdata.asosiy];
    // if (b.length == 0) {
     
    //   const removableItem = dializes.findIndex((i) => i === a.label);
    //   const updated = dializes.splice(removableItem, 1);
    //   setMultiSelectData({ ...multiselectdata, asosiy: updated });
    // } else {
    //   dializes.push(a.label);
    //   setMultiSelectData({ ...multiselectdata, asosiy: dializes });
    // }
  };
  let aa3 = []
  const treeOnchangeHandler3 = async (a, b) => {
    aa3 = [];
    aa3 = [...b]
    console.log(aa3,"a3");
    // const dializes = [...multiselectdata.raqobat];
    // dializes.push(a.label);
    // setMultiSelectData({ ...multiselectdata, raqobat: dializes });
  };
  let aa4 = []
  const treeOnchangeHandler4 = (a, b) => {
    aa4 = [];
    aa4 = [...b]
    console.log(aa4,"a4");
    // const dializes = [...multiselectdata.fon];
    // dializes.push(a.label);
    // setMultiSelectData({ ...multiselectdata, fon: dializes });
  };
  let aa5 = []
  const treeOnchangeHandler5 = (a, b) => {
    aa5 = [];
    aa5 = [...b]
    console.log(aa5,"a4");
    // const dializes = [...multiselectdata.bogliq];
    // dializes.push(a.label);
    // setMultiSelectData({ ...multiselectdata, bogliq: dializes });
  };

  const [ll1,setLl1] = useState([])
  const [ll2,setLl2] = useState([])
  const [ll3,setLl3] = useState([])
  const [ll4,setLl4] = useState([])
  const [ll5,setLl5] = useState([])

  function Dializa(e) {
    setLl1(aa2.map(el => el.label))
    setLl2(aa.map(el => el.label))
    setLl3(aa3.map(el => el.label))
    setLl4(aa4.map(el => el.label))
    setLl5(aa5.map(el => el.label))
    const formmdata = new FormData();
    for (let [key, val] of Object.entries(diainput)) {
      formmdata.append(key, val);
    }
    formmdata.append("asosiy", JSON.stringify(aa2.map(el => el.label)));
    formmdata.append("asorati", JSON.stringify(aa.map(el => el.label)));
    formmdata.append("raqobat", JSON.stringify(aa3.map(el => el.label)));
    formmdata.append("fon", JSON.stringify(aa4.map(el => el.label)));
    formmdata.append("bogliq", JSON.stringify(aa5.map(el => el.label)));
    formmdata.append("token", token);
    request
      .post(`/bemor/create/diagnoz/`, formmdata)
      .then(function (res) {
        setInput({ ...input, diagnoz: res.data.id });
      })
      .then(() => setLoeder(false))
      .catch(function (err) {
        setDializa({ isFetched: false, data: [], error: err });
      });
    handleClose1();
  }

  const onDializa = (e) => {
    setDiainput({ ...diainput, [e.target.name]: e.target.value });
  };
  const [arr, setArr] = useState(null);
  const [input, setInput] = useState({
    kasalliklar: "",
    tuman: "",
    bemor_passporti: "",
    qoshimcha_malumot: "",
    qoshimcha_tel_raqami: " ",
    passport_qayerdan_kim_tomonidan_berilgan: " ",
    manzil: " ",
    ijtimoiy_maqom: " ",
    yashash_manzili: "",
    royxatga_olingan_sana:`${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`,
    rasxodniki: 0,
    nogironligi: "",
    RW: "false",
    SPID: "false",
    HBsAg: "false",
    Anti_HCV: "false",
  });
  console.log(new Date().getFullYear());
  const pnflChange = (e) => {
    const body = new FormData();
    body.append("JSHSHIR", e.target.value);
    body.append("token", token);
    request.post("/identifikatsiya/", body).then((data) =>
      setInput({
        JSHSHIR: data.data.JSHSHIR,
        ismi: data.data.ism,
        familiyasi: data.data.familiya,
        otasini_ismi: data.data.otasini_ismi,
        tugilgan_sanasi: data.data.tugilgan_sana,
        passport_raqami: data.data.pasport_raqami,
        passport_seriyasi: data.data.pasport_seriya,
        manzil:data.data.address.line,
        kasalliklar: " ",
        tuman: " ",
        RW: "false",
        SPID: "false",
        HBsAg: "false",
        Anti_HCV: "false",
        passport_qayerdan_kim_tomonidan_berilgan: " ",
        yashash_manzili: " ",
        bemor_passporti: " ",
        qoshimcha_malumot: " ",
        qoshimcha_tel_raqami: " ",
        royxatga_olingan_sana:`${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`,
        ijtimoiy_maqom: " ",
        nogironligi: "",
        rasxodniki: 0,
        jinsi: data.data.jinsi === "male" ? "Erkak" : "Ayol",
      })
    );
  };

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      setInput({ ...input, [e.target.name]: String(e.target.checked) });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  };
  const doctr = (e) => {
    setDoc(e.target.value);
  };
  function transliterate(word) {
    return word
      .split("")
      .map(function (char) {
        return a[char] || char;
      })
      .join("");
  }

  let backgrounds = [
    { background: "greey", color: "white" },
    { background: "green", color: "white" },
    { background: "yellow", color: "black" },
    { background: "red", color: "white" },
  ];

  function filt(params) {
    if (params.length > 1) {
      const filteredData = person.filter((item) => {
        return Object.values(transliterate(String(item.familiyasi)))
          .join("")
          .toLowerCase()
          .includes(transliterate(params.toLowerCase()));
      });
      setPerson(filteredData);
    } else {
      setPerson(bemorIdpro.data.bemorlar);
    }
  }

  const [sea, setSea] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const [ids, setIds] = useState(null);
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

  const File = (e) => {
    setPass(e.target.files[0]);
  };

  const idls = localStorage.getItem("id");

  const muassalar1 =
    viloyat.data.data &&
    viloyat.data.data.find((el) =>
      el.muassasalar.find((el) => +el.id === +idls)
    );
  const muassasaName =
    muassalar1 && muassalar1.muassasalar.find((el) => +el.id === +idls);
  const [bemId, setBemId] = useState(null);
  function Seansbemor(e) {
    setBemId(e);
    setSeans(true);
    const formsdata = new FormData();
    formsdata.append("token", token);
    formsdata.append("bemor_id", e);
    request
      .post(`seans/bemor/`, formsdata)
      .then(function (res) {
        setSea({
          isFetched: true,
          data: res.data,
          error: false,
        });
        console.log(res.data);
      })
      .catch(function (err) {
        setSea({
          isFetched: false,
          data: [],
          error: err,
        });
      });
  }
  const [del,setDel] = useState()
//  let as = person.filter(el => el.ismi[0] === "A").concat(person.filter(el => el.ismi[0] === "B"),person.filter(el => el.ismi[0] === "D"))
    console.log(person,"person");
    // setPerson(person.filter(el => el.ismi[0] === "A"))
  console.log(ll1);
  if (bemorIdpro.error) return <Error />;
  if (loader) return <Loading />;

  return (
    <div
      className="muassasa_personal" 
      style={{
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingBottom: "20px",
      }}
    >
      <div className="muassasa_blocks">
        <div className="muassasa_blocks_left">
          {/* <Link Link to={`/doctor`} className="back_doctor">
            <ArrowBackIcon />
            <p>Orqaga</p>  
          </Link> */}
          <h4 className="person_all">
            {t("vosita.title")}: {person.length}
          </h4>
          <div className="button_block">
            {idls && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={edi ? Heets : handleOpen}
                className={classes.button}
                startIcon={<AddIcon />}
              >
                {t("bola.add")}
              </Button>
            )}
            <div className="green_block">
              <Button
                variant="contained"
                // color="primary"
                size="large"
                className={classes.button}
                startIcon={<DescriptionIcon />}
              >
                <CSVLink data={person} className="excel_download">
                  {t("bola.excel")}
                </CSVLink>
                {/* Excelga yuklab olish */}
              </Button>
            </div>

            <div className="sonlar"></div>
          </div>
        </div>
        <div className="muassasa_blocks">
          <div className="serach_person">
            <TextField
              onChange={(e) => filt(e.target.value)}
              id="standard-search"
              label={t("bola.qidirish")}
              type="search"
              variant="standard"
            />
            {/* <TextField
              fullWidth
              label="Bemorni qidirish"
              type="search"
              id="fullWidth"
              onChange={(e) => filt(e.target.value)}
            /> */}
          </div>
        </div>
      </div>

      <div className="poliklinika">
        <div className="poliklinika">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                {/* <TableRow>
                  <TableCell>Soni</TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Familiya
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Ismi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Sharifi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Jinsi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Pasport seriya
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Pasport raqam
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Shifokor (FIO)
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Nogironligi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Dializ olgan miqdori
                  </TableCell>

                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Filtr
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Magistral
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Igna
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Tuz
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Konsentrat
                  </TableCell>

                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Dializ boshlangan sana
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Ro'yxatga olingan sanasi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Bemor toifasi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Diagnoz
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Qon guruhi
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Anti HCV
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    HBsAg
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    VICH/SPID
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    RW
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Bemor passporti
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Qo'shimcha malumot
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Ijtimoiy maqom
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Passport qayerdan kim tomonidan berilgan
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Ro'yxatdan o'tgan manzil
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Yashash manzil
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Telefon raqami
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Qo'shimcha raqam
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Bemor holati
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    JSHSHIR
                  </TableCell>
                  {idls && (
                    <TableCell
                      style={{
                        fontWeight: "bold",
                      }}
                      align="center"
                    >
                      Bemor
                    </TableCell>
                  )}
                  <TableCell
                    style={{
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Barcha Seanslar
                  </TableCell>
                </TableRow> */}
                <TableRow style={{ backgroundColor: "white" }}>
                  <TableCell>Soni</TableCell>
                  <TableCell
                    
                    align="left"
                  >
                    PINFL
                  </TableCell>
                  <TableCell
                    align="left"
                  >
                    {t("shifokor.alladd.name")} {t("shifokor.alladd.surname")} {t("shifokor.alladd.otch")}
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
                    align="left"
                  >
                    {t("sbola.h1")}
                  </TableCell>
                  <TableCell
                    align="center"
                  >
                    {t("sbola.h2")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {person?.map((row, index) => (
                  <TableRow>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left">{row.JSHSHIR}</TableCell>
                    <TableCell align="left">{`${row.familiyasi} ${row.ismi} ${row.otasini_ismi}`}</TableCell>
                    <TableCell align="left">{row.tugilgan_sanasi}</TableCell>
                    <TableCell align="left">{`${row.shifokor_familiyasi} ${row.shifokor_ismi}`}</TableCell>
                    <TableCell align="left">
                      {muassasaName && muassasaName.muassasa_nomi}
                    </TableCell>
                    <TableCell
                      align="left"
                      className='statuses'
                      style={backgrounds[row.bemor_holati]} 
                    >
                      {row.bemor_holati == 2
                        ? t("sbola.h4")
                        : row.bemor_holati == 1
                        ? t("sbola.h3")
                        : row.bemor_holati == 3
                        ? t("sbola.h5") 
                        : t("sbola.l5") }   
                    </TableCell>
                    {idls && (
                      <TableCell align="right">
                        <div className="button_modal button_modal_1">
                          <Link
                            Link
                            to={`/bemormalumoti/${row.bemor_id}`}
                            className="single_info"
                          >
                            <img
                              className="delete_icon"
                              src={l1}
                              alt="batafsil"
                            />
                          </Link>
                          <button
                            onClick={(e) => EditIt(row.bemor_id)}
                            className="edit_btn"
                          >
                            <img
                              className="delete_icon"
                              src={l2}
                              alt="o'zgartirish"
                            />
                          </button>
                          <button
                            className="delete_div"
                            onClick={() => handleOpen2(row.bemor_id)}
                            id={row.bemor_id}
                          >
                            <img
                              className="delete_icon"
                              src={l3}
                              alt="o'chirish"
                            />
                          </button>
                          <div className="seans_div">
                            <Button
                              startIcon={<PendingActionsIcon />}
                              className="seanslar_btn_muassasa"
                              onClick={() => Seansbemor(row.bemor_id)}
                            ></Button>
                          </div>
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                  // <TableRow
                  //   TableRow
                  //   key={row.name}
                  //   style={backgrounds[row.bemor_holati]}
                  // >
                  //   <TableCell component="th" scope="row">
                  //     {index + 1}
                  //   </TableCell>
                  //   <TableCell align="right">{row.familiyasi}</TableCell>
                  //   <TableCell align="right">{row.ismi}</TableCell>
                  //   <TableCell align="right">{row.otasini_ismi}</TableCell>
                  //   <TableCell align="right">{row.jinsi}</TableCell>
                  //   <TableCell align="right">{row.passport_seriyasi}</TableCell>
                  //   <TableCell align="right">{row.passport_raqami}</TableCell>
                  //   <TableCell align="right">{`${row.shifokor_familiyasi} ${row.shifokor_ismi}`}</TableCell>
                  //   <TableCell align="right">{row.nogironligi}</TableCell>
                  //   <TableCell align="right">
                  //     {row.dializ_olgan_miqdori}
                  //   </TableCell>

                  //   <TableCell align="right">1</TableCell>
                  //   <TableCell align="right">2</TableCell>
                  //   <TableCell align="right">3</TableCell>
                  //   <TableCell align="right">4</TableCell>
                  //   <TableCell align="right">5</TableCell>

                  //   <TableCell align="right">
                  //     {row.dializ_boshlangan_sana}
                  //   </TableCell>
                  //   <TableCell align="right">
                  //     {row.royxatga_olingan_sana}
                  //   </TableCell>
                  //   <TableCell align="right">{row.nogironligi}</TableCell>
                  //   <TableCell align="right">{row.status}</TableCell>
                  //   <TableCell align="right">
                  //     <div
                  //       className="popup"
                  //       onMouseEnter={() => Iddiagnoz(row.diagnoz_id)}
                  //     >
                  //       <div className="popup_inner">
                  //         <h6>Asosiy</h6>
                  //         <p>{bemorid?.data?.asosoiy}</p>
                  //         <br />
                  //         <h6>Fon</h6>
                  //         <p>{bemorid?.data?.fon}</p>
                  //         <br />
                  //         <h6>Bog'liq</h6>
                  //         <p>{bemorid?.data?.bogliq}</p>
                  //         <br />
                  //         <h6>Raqobat</h6>
                  //         <p>{bemorid?.data?.raqobat}</p>
                  //         <br />
                  //         <h6>Asorati</h6>
                  //         <p>{bemorid?.data?.asorati}</p>
                  //       </div>
                  //     </div>
                  //   </TableCell>
                  //   <TableCell align="right">{row.qon_guruhi}-guruh</TableCell>
                  //   <TableCell align="right">
                  //     {row.Anti_HCV === "true" ? "ijobiy" : "salbiy"}
                  //   </TableCell>
                  //   <TableCell align="right">
                  //     {row.HBsAg === "true" ? "ijobiy" : "salbiy"}
                  //   </TableCell>
                  //   <TableCell align="right">
                  //     {row.RW === "true" ? "ijobiy" : "salbiy"}
                  //   </TableCell>
                  //   <TableCell align="right">
                  //     {row.SPID === "true" ? "ijobiy" : "salbiy"}
                  //   </TableCell>
                  //   <TableCell align="right">
                  //     <a
                  //       href={`https://nefrologiya.herokuapp.com/${row.bemor_passporti}`}
                  //       download
                  //       style={{ color: "blue", cursor: "pointer" }}
                  //     >
                  //       yuklash
                  //     </a>
                  //   </TableCell>
                  //   <TableCell align="right">
                  //     <a
                  //       href={`https://nefrologiya.herokuapp.com/${row.qoshimcha_malumot}`}
                  //     >
                  //       qo 'shimcha malumot
                  //     </a>
                  //   </TableCell>
                  //   <TableCell align="right">{row.ijtimoiy_maqom}</TableCell>
                  //   <TableCell align="right">
                  //     {row.passport_qayerdan_kim_tomonidan_berilgan}
                  //   </TableCell>
                  //   <TableCell align="right">{row.manzil}</TableCell>
                  //   <TableCell align="right">{row.yashash_manzili}</TableCell>
                  //   <TableCell align="right">{row.tel_raqami}</TableCell>
                  //   <TableCell TableCell align="right">
                  //     {row.qoshimcha_tel_raqami}
                  //   </TableCell>

                  //   {row.bemor_holati == 1 ? (
                  //     <TableCell TableCell align="right">
                  //       {`Stabil og'ir`}
                  //     </TableCell>
                  //   ) : row.bemor_holati == 2 ? (
                  //     <TableCell TableCell align="right">
                  //       {`O'rta og'ir`}
                  //     </TableCell>
                  //   ) : row.bemor_holati == 3 ? (
                  //     <TableCell TableCell align="right">
                  //       {`O'ta og'ir`}
                  //     </TableCell>
                  //   ) : (
                  //     <TableCell TableCell align="right">
                  //       {`Nomalum`}
                  //     </TableCell>
                  //   )} 
                  //   <TableCell component="th" scope="row">
                  //     {row.JSHSHIR}
                  //   </TableCell>
                  //   {idls && (
                  //     <TableCell align="right">
                  //       <div className="button_modal button_modal_1">
                  //         <button
                  //           className="delete_div"
                  //           onClick={() => handleOpen2(row.bemor_id)}
                  //           id={row.bemor_id}
                  //         >
                  //           <img className="delete_icon" src={del} alt="" />{" "}
                  //         </button>
                  //         <button
                  //           onClick={(e) => EditIt(row.bemor_id)}
                  //           className="edit_btn"
                  //         >
                  //           <EditIcon />
                  //         </button>
                  //       </div>
                  //     </TableCell>
                  //   )}
                  //   <TableCell align="right">
                  //     <button
                  //       className="seanslar_btn"
                  //       onClick={() => Seansbemor(row.bemor_id)}
                  //     >
                  //       Seanslar
                  //     </button>
                  //   </TableCell>
                  // </TableRow>
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
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
              timeout: 400,
            }}
          >
            <Fade in={open}>
              <div style={classes.paper}>
                <form className="form_control_scrool"  onSubmit={edi ? Heets : Create}>
                  <h1>{t("sidebar.li9")} {t("bola.add")}</h1>
                  <div className="input_blocks">
                    <div className="select_div jshshir_inner">
                      <TextField
                        className="back"
                        id="outlined-basic"
                        label="PINFL"
                        onChange={(e) =>
                          (e.target.value.split("").length === 14 &&
                            pnflChange(e)) ||
                          setArr(e.target.value.split("").length)
                        }
                        name="JSHSHIR"
                        variant="outlined"
                        inputProps={{ maxLength: 14 }}
                        type="number"
                        defaultValue={input.JSHSHIR}
                        required
                        error={arr > 14}
                      />
                      <div className="jshshir_inner">
                        {/* <img src={more}/> */}
                        <div className="jshshir_inner_item">
                          <img
                            className="pnfl_icon"
                            src={pnflIcon}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="select_div">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label={t("shifokor.alladd.name")}
                        onChange={(e) => onChange(e)}
                        name="ismi"
                        variant="outlined"
                        value={input.ismi}
                        required
                        disabled
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label={t("shifokor.alladd.surname")}
                        variant="outlined"
                        onChange={onChange}
                        name="familiyasi"
                        value={input.familiyasi}
                        required
                        disabled
                      />
                    </div>
                    <div className="select_div">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label={t("shifokor.alladd.otch")}
                        variant="outlined"
                        onChange={onChange}
                        name="otasini_ismi"
                        value={input.otasini_ismi}
                        required
                        disabled
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div">
                    {t("shifokor.birthday")}
                      <TextField
                        className="filed"
                        id="outlined-basic"
                        variant="outlined"
                        type="date"
                        onChange={onChange}
                        name="tugilgan_sanasi"
                        value={input.tugilgan_sanasi}
                        required
                        disabled
                      />
                    </div>
                    <div className="pasport_block">
                      <div className="select_div">
                        <TextField
                          className={input.ismi && "input-sel"}
                          id="outlined-basic"
                          label={t("sbola.l4")}
                          variant="outlined"
                          inputProps={{ maxLength: 2 }}
                          onChange={onChange}
                          name="passport_seriyasi"
                          value={input.passport_seriyasi}
                          required
                          disabled
                        />
                      </div>
                      <div className="select_div">
                        <TextField
                          className={input.ismi && "input-sel"}
                          id="outlined-basic"
                          label={t("sbola.l3")}
                          variant="outlined"
                          inputProps={{ maxLength: 7 }}
                          onChange={onChange}
                          name="passport_raqami"
                          value={input.passport_raqami}
                          required
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inpub_blocks_jinsi">
                    <div className="select_div_jinsi">
                      <FormControl className={classes.formControl}>
                        <InputLabel
                          InputLabel
                          id="qon-guruh"
                          value={input.jinsi}
                        >
                          {input.jinsi ? input.jinsi : "Jinsi"}
                        </InputLabel>
                        <Select
                          labelId="qon-guruh"
                          id="demo-simple-select2"
                          // value={age}
                          onChange={onChange}
                          disabled
                          name={"jinsi"}
                        >
                          <MenuItem value="Erkak">Erkak</MenuItem>
                          <MenuItem value="Ayol">Ayol</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="select_div">
                      <TextField
                        className={input.ismi && "input-sel"}
                        id="outlined-basic"
                        label={t("bola.ro")}
                        variant="outlined"
                        onChange={onChange}
                        name="manzil"
                        value={input.ismi && input.manzil}
                      />
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label={t("bola.who")}
                        variant="outlined"
                        onChange={onChange}
                        name="passport_qayerdan_kim_tomonidan_berilgan"
                        value={input.passport_qayerdan_kim_tomonidan_berilgan}
                        required
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    {/* <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Yashash manzili"
                        variant="outlined"
                        onChange={onChange}
                        name="yashash_manzili"
                        value={input.yashash_manzili}
                        required
                      />
                    </div> */}
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label={t("shifokor.tel")}
                        variant="outlined"
                        onChange={onChange}
                        name="tel_raqami"
                        value={input.tel_raqami}
                        required
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label={t("bola.qtel")}
                        variant="outlined"
                        onChange={onChange}
                        name="qoshimcha_tel_raqami"
                        value={input.qoshimcha_tel_raqami}
                      />
                    </div>
                    <div className="select_div select_div_100">
                      <Autocomplete
                        style={{
                          width: "100%",
                        }}
                        id="country-select-demo"
                        sx={{ width: 300 }}
                        options={shifokorlar}
                        onChange={doctr}
                        // value={input.shifokor}
                        autoHighlight
                        getOptionLabel={(option) =>
                          `${option.ismi} ${option.familiyasi}`
                        }
                        renderOption={(props, option) => (
                          <Box
                            value={option.shifokor_id}
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.ismi} {option.familiyasi}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            required
                            {...params}
                            label={t("bola.shifo")}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="input_blocks">
                    {/* <div className="select_div">
                      Ro'yxatga olingan sanasi
                      <TextField
                        className="filed"
                        id="outlined-basic"
                        variant="outlined"
                        type="date"
                        onChange={onChange}
                        name="royxatga_olingan_sana"
                        required
                        value={input.royxatga_olingan_sana}
                      />
                    </div> */}
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Ijtimoiy maqom"
                        variant="outlined"
                        onChange={onChange}
                        name="ijtimoiy_maqom"
                        value={input.ijtimoiy_maqom}
                        required
                      />
                    </div>
                  </div>
                  <div className="select">
                    <div className="select_div">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="nogironlik">
                         {t("sbola.l2")}
                        </InputLabel>
                        <Select
                          labelId="nogironlik"
                          id="demo-simple-select1"
                          // value={age}
                          onChange={onChange}
                          name="nogironligi"
                          value={input.nogironligi}
                          required
                        >
                          <MenuItem value={1}>1-guruh</MenuItem>
                          <MenuItem value={2}>2-guruh</MenuItem>
                          <MenuItem value={3}>3-guruh</MenuItem>
                          <MenuItem value={4}>Nogiron emas</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="select_div">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="qon-guruh">{t("bola.guruh")}</InputLabel>
                        <Select
                          labelId="qon-guruh"
                          id="demo-simple-select2"
                          value={input.qon_guruhi}
                          onChange={onChange}
                          name="qon_guruhi"
                          required
                        >
                          <MenuItem value={1}>AB(IV)Rh+</MenuItem>
                          <MenuItem value={2}>AB(IV)Rh-</MenuItem>
                          <MenuItem value={3}>A(II)Rh+</MenuItem>
                          <MenuItem value={4}>A(II)Rh-</MenuItem>
                          <MenuItem value={5}>B(III)Rh+</MenuItem>
                          <MenuItem value={6}>B(III)Rh-</MenuItem>
                          <MenuItem value={7}>O(I)Rh+</MenuItem>
                          <MenuItem value={8}>O(I)Rh-</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div-11">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="Status">Status</InputLabel>
                        <Select
                          labelId="Status"
                          id="demo-simple-select3"
                          onChange={onChange}
                          name="status"
                          value={input.status}
                          required
                        >
                          <MenuItem MenuItem value={"Nazorat ostida"}>
                            Nazorat ostida
                          </MenuItem>
                          <MenuItem value={"Dializda"}>Dializda</MenuItem>
                          <MenuItem value={"Transplant"}>Transplant</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="select_div-11">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="nogironlik">{t("sbola.l1")}</InputLabel>
                        <Select
                          labelId="123"
                          id="demo-simple-select3"
                          onChange={onChange}
                          name="bemor_kasallik_turi"
                          value={input.bemor_kasallik_turi}
                          required
                        >
                          <MenuItem
                            MenuItem
                            value={"Otkir buyurak zararlanishi"}
                          >
                            Otkir buyrak zararlanishi
                          </MenuItem>
                          <MenuItem value={"Surunkali buyurak kasallanishi"}>
                            Surunkali buyrak kasallanishi
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="input_blocks">
                    <div className="select_div-11">
                      <div
                        labelId="diag"
                        id="demo-simple-select4"
                        onChange={onChange}
                        name="diagnoz"
                        required
                        onClick={handleOpen1}
                        value={input.diagnoz}
                        style={{
                          padding: "17px",
                          border: "2px solid rgb(201 201 201)",
                          cursor: "pointer",
                        }}
                        className="dializa_div_99"
                      >

                        Diagnoz
                      </div>

                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open1}
                        onClose={handleClose1}
                        closeAfterTransition
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open1}>
                          <div
                            className="diagnoz_block_div"
                            style={classes.paper}
                          >
                            <div
                              className="nazad"
                              onClick={handleClose1}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              {t("new.ortga")}
                            </div>
                            <div className="diagnoz_div">
                              <div className="diagniz_div_left">
                                <h6 className="title">Asosiy</h6>
                                <DropdownTreeSelect
                                  data={Mockdata}
                                  onChange={treeOnchangeHandler2}
                                  className="mdl-demo"
                                />
                              </div>
                                
                             {
                              ll1[0] && 
                             <div className="li_div">
                                {ll1.map((item) => (
                                <ul>
                                  <li>{item}</li>
                                </ul>
                                ))}
                                </div>
                             } 
                            </div>
                            <div className="diagnoz_div">
                              <div className="diagniz_div_left">
                                <h6 className="title">Asorati</h6>
                                <DropdownTreeSelect
                                  data={Mockdata}
                                  className="mdl-demo"
                                  onChange={treeOnchangeHandler}
                                />
                              </div>
                              {
                                ll2[0] && 
                              <div className="li_div">
                                {ll2.map((item,index) => (
                                  <ul>
                                   
                                      <li id={index}>{item}</li>
                                   
                                  </ul>
                                ))}
                              </div>
                              }
                            </div>
                            
                            <div className="diagnoz_div">
                              <div className="diagniz_div_left">
                                <h6 className="title">Raqobat</h6>
                                <DropdownTreeSelect
                                  data={Mockdata}
                                  onChange={treeOnchangeHandler3}
                                  className="mdl-demo"
                                />
                              </div>
                             {
                              ll3[0] && 
                             <div className="li_div">
                                {ll3.map((item) => (
                                <ul>
                                  <li>{item}</li> 
                                </ul>
                                ))}
                              </div>
                             } 
                            </div>
                            <div className="diagnoz_div">
                              <div className="diagniz_div_left">
                                <h6 className="title">Fon</h6>
                                <DropdownTreeSelect
                                  data={Mockdata}
                                  onChange={treeOnchangeHandler4}
                                  className="mdl-demo"
                                />
                              </div>
                              {
                                ll4[0] && 
                              <div className="li_div">
                                {ll4.map((item) => (
                                <ul>
                                  <li>{item}</li>
                                </ul>
                                ))}
                              </div>
                              }
                            </div>
                            <div className="diagnoz_div">
                              <div className="diagniz_div_left">
                                <h6 className="title">Bogliq</h6>
                                <DropdownTreeSelect
                                  data={Mockdata}
                                  onChange={treeOnchangeHandler5}
                                  className="mdl-demo"
                                />
                              </div>
                              {
                                ll5[0] && 
                              <div className="li_div">
                                {ll5.map((item) => (
                                <ul>
                                  <li>{item}</li>
                                </ul>
                                ))}
                              </div>
                              }
                            </div>

                            {/* <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="Asosiy"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="asosiy"
                                required
                                value={diainput.asosiy}
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="asorati"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="asorati"
                                value={diainput.asorati}
                                required
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="raqobat"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="raqobat"
                                value={diainput.raqobat}
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="fon"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="fon"
                                value={diainput.fon}
                              />
                            </div>
                            <div className="dializ_input">
                              <TextField
                                id="outlined-basic"
                                label="bogliq"
                                variant="outlined"
                                onChange={(e) => onDializa(e)}
                                name="bogliq"
                                value={diainput.bogliq}
                              />
                            </div> */}
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              className={classes.button}
                              onClick={Dializa}
                            >
                              Qo'shish
                            </Button>
                          </div>
                        </Fade>
                      </Modal>
                    </div>
                    <div className="kasalliklar">
                      Dializ boshlanishi sansi
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="date"
                        onChange={onChange}
                        name="dializ_boshlangan_sana"
                        value={input.dializ_boshlangan_sana}
                        required
                      />
                    </div>
                  </div>

                  <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Dializ olgan soni"
                        variant="outlined"
                        onChange={onChange}
                        name="dializ_olgan_miqdori"
                        type="number"
                        value={input.dializ_olgan_miqdori}
                        required
                      />
                    </div>
                    {/* <div className="select_div-11">
                      <div className="select_div">
                        <TextField
                          id="outlined-basic"
                          label="Filtr"
                          variant="outlined"
                          onChange={onChange}
                          name="filtr"
                          type="number"
                          value={input.filtr}
                          required
                        />
                      </div>
                    </div> */}
                  </div>

                  {/* <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Magistral"
                        variant="outlined"
                        onChange={onChange}
                        name="magistral"
                        type="number"
                        value={input.magistral}
                        required
                      />
                    </div>
                    <div className="select_div-11">
                      <div className="select_div">
                        <TextField
                          id="outlined-basic"
                          label="Igna"
                          variant="outlined"
                          onChange={onChange}
                          name="igna"
                          type="number"
                          value={input.igna}
                          required
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="input_blocks">
                    <div className="select_div">
                      <TextField
                        id="outlined-basic"
                        label="Tuz"
                        variant="outlined"
                        onChange={onChange}
                        name="tuz"
                        type="number"
                        required
                        value={input.tuz}
                      />
                    </div>
                    <div className="select_div-11">
                      <div className="select_div">
                        <TextField
                          id="outlined-basic"
                          label="Konsentrat"
                          variant="outlined"
                          onChange={onChange}
                          name="konsentrat"
                          type="number"
                          value={input.konsentrat}
                          required
                        />
                      </div>
                    </div>
                  </div> */}
                  <label style={{
                    witdh:"15%"
                  }} class="custom-file-upload">
                    <input
                      className="upload-file visually-hidden"
                      type="file"
                      onChange={(e) => File(e)}
                    />
                    Bemor passporti Yuklash
                  </label>
                  <p>{pass && pass.name}</p>
                  <label
                    class="custom-file-upload"
                    style={{
                      width: "154px",
                    }}
                  >
                    <input
                      className="upload-file visually-hidden"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    Qo'shimcha ma'lumot
                  </label>
                  <p>{file && file.name}</p>
                  <div className="checkbox_blocks">
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="RW"
                        variant="outlined"
                        type="checkbox"
                        onChange={(event) => onChange(event)}
                        name="RW"
                        value={input.RW}
                      />
                      <p className="checkClass">RW</p>
                    </div>
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="SPID"
                        variant="outlined"
                        onChange={(event) => onChange(event)}
                        name="SPID"
                        type="checkbox"
                        value={input.SPID}
                      />
                      <p className="checkClass">SPID</p>
                    </div>
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="HBsAg"
                        variant="outlined"
                        type="checkbox"
                        onChange={(event) => onChange(event)}
                        name="HBsAg"
                        value={input.HBsAg}
                      />
                      <p className="checkClass">HBsAg</p>
                    </div>
                    <div className="checkbox_type">
                      <TextField
                        id="outlined-basic"
                        label="ANTI_HCV"
                        variant="outlined"
                        onChange={(event) => onChange(event)}
                        name="Anti_HCV"
                        type="checkbox"
                        value={input.Anti_HCV}
                      />
                      <p className="checkClass">ANTI_HCV</p>
                    </div>
                  </div>
                  <div className="kasalliklar1">
                    <TextField
                      id="outlined-basic"
                      label="Dializ boshlanishi"
                      variant="outlined"
                      type="text"
                      onChange={onChange}
                      name="kasalliklar"
                      value={input.kasalliklar}
                      required
                    />
                  </div>
                  <div className="button_block1">
                    <Button
                      type='submit'
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.button}
                      // onClick={edi ? Heets : Create}
                    >
                      {edi ? `Bemor o'zgartirish` : `Bemor qo'shish`}
                    </Button>
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>
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
                  <div className="delete_g">
                    <h4>bemorni o'chirish sababi</h4>
                    <div className="izoh_text">
                      <FormControl className={classes.formControl}>
                        <InputLabel id="nogironlik">Sababi</InputLabel>
                        <Select
                          labelId="123"
                          id="demo-simple-select3"
                          onChange={(e) => setIzohs(e.target.value)}
                          name="izoh"
                          value={input.bemor_kasallik_turi}
                        >
                          <MenuItem MenuItem value={"Vafot etdi"}>
                            Vafot etdi
                          </MenuItem>
                          <MenuItem value={"Transplant"}>Transplant</MenuItem>
                          <MenuItem value={"Muassasa almashtirildi"}>
                            Muassasa almashtirildi
                          </MenuItem>
                          <MenuItem value={"Sog'aydi"}>Sog'aydi</MenuItem>
                        </Select>
                      </FormControl>
                      {/* <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        label="Izoh"
                        onChange={(e) => setIzohs(e.target.value)}
                        name="izoh"
                        required
                      /> */}
                    </div>
                    <div className="delete_btn_group">
                      {izohs?.length > 3 ? (
                        <Button
                          style={{
                            marignBottom: "14px",
                          }}
                          className="red_btn"
                          variant="contained"
                          onClick={Deletes}
                        >
                          Bemorni o'chirish
                        </Button>
                      ) : (
                        <Button
                          className="red_btn"
                          variant="contained"
                          onClick={Deletes}
                          disabled
                        >
                          Bemorni o'chirish
                        </Button>
                      )}

                      <Button
                        className="no_delete_person"
                        variant="contained"
                        color="success"
                        onClick={handleClose2}
                      >
                        Bekor qilish
                      </Button>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
        </div>
      </div>
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
                loader={loader}
                setLoeder={setLoeder}
              />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, SvgIcon } from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import { request } from "../../../../api/request";
import { useNavigate, useParams } from "react-router-dom";
const Bemormodal = () =>{
    const params = useParams()
    const [open,setOpen] = useState(false);
    const [popone,setPopone] = useState(false);
    const [data,setData] = useState([]);
    const [target,setTarget] = useState();
    const [curt,setCurt] = useState();
    const navigate = useNavigate()
    const handleOpen = () => {
        setOpen(true);
      };
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("token",token) ;
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
      const Changeone = (e) =>{
        setTarget(e.target.value)
    }
      useEffect(() =>{
            request
            .post("/viloyatlar/",formData)
            .then(data => setData(data.data.data))
      },[])
    const Current = data.find(el =>{
          if (el.viloyat === target){
                return el
          }
      })
      const Currents = Current &&  Current.muassasalar.find(el =>{
        if (el.muassasa_nomi === curt){
              return el
        }
    })

    const Opentwo = (e) =>{
        e.preventDefault();
        alert("Ushbu ma'lumotni Tasdiqlaysizmi?")
        setPopone(true);
    }
    
      const Send = (e) =>{
        e.preventDefault();
        formData.append("viloyat_id",Current.id)
        formData.append("muassasa_id",Currents.id)
        formData.append("bemor_id",params.id)
        request
        .post("/bemorlar/share/",formData);
        navigate("/muassasa")
        setOpen(false)
      }
      console.log(target);
    return(
        <>
        <Button
        style={{backgroundColor:"#F69641"}}
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<UndoIcon/>}
                >
                   Muassasa Almashtirish
            </Button>
        <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
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
                    onClick={() => setOpen(false)}
                >
                    <SvgIcon component={ArrowBackIcon} inheritViewBox />
                </Button>
                    
                <form onSubmit={Opentwo}>
                    <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Hududni Tanlang</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={Changeone}
                    required
                >
                    {
                        data.map(el => {
                            return(
                                <MenuItem value={el.viloyat} >{el.viloyat}</MenuItem>
                            )
                        })
                    }
                    
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Muassasa Tanlang</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={e => setCurt(e.target.value)}
                    required
                >
                    {
                      Current &&  Current.muassasalar.map(el => {
                            return(
                                <MenuItem value={el.muassasa_nomi}>{el.muassasa_nomi}</MenuItem>
                            )
                        })
                    }
                    </Select>
                </FormControl>
                    <Button
                    style={{width:"100%"}}
                    variant="contained"
                    type="submit"
                    >
                        Tasdiqlash
                    </Button>
             </form>
            </Box>
          </Modal>
          <Modal
        keepMounted
        open={popone}
        onClose={() => setPopone(false)}
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
                    onClick={() => setPopone(false)}
                >
                    <SvgIcon component={ArrowBackIcon} inheritViewBox />
                </Button>
                <form onSubmit={Send}>
                    <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{target}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    disabled
                    required
                >
                                <MenuItem value={target} >{target}</MenuItem>
                       
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{curt}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    disabled
                    required
                >
                    
                                <MenuItem value={curt}>{curt}</MenuItem>
                           
                    </Select>
                </FormControl>
                    <Button
                    style={{width:"100%"}}
                    variant="contained"
                    type="submit"
                    >
                        Tasdiqlash
                    </Button>
                </form>
            </Box>
        </Modal>
        </>
    )
}
export default Bemormodal
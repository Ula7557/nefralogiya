import { createContext, useState } from "react";

export const  Contextvalue = createContext();

export const Context = ({children}) =>{
    const[paramsid,setParamsid] = useState(null)
    const [input, setInput] = useState();
    const[parval,setParval] = useState()
    const[nametxt,setNametxt] = useState()
    const [ulchovtxt, setUlchovtxt] = useState();
    const [turitxt, setTuritxt] = useState();
    const [miqtxt,setMiqtxt] = useState()
    const [id,setId] = useState() 
    const [snsid,setSnsid] = useState()
    const [mahsulotlar,setMahsulotlar] = useState()
    const [open,setOpen] = useState(false)
    const [navi,setNavi] = useState(false)
    return <Contextvalue.Provider value={{paramsid,setParamsid,input,setInput,parval,setParval,navi,setNavi,nametxt,setNametxt,ulchovtxt,setUlchovtxt,turitxt,setTuritxt,miqtxt,setMiqtxt,open,setOpen,id,setId,snsid,setSnsid,mahsulotlar,setMahsulotlar}}>{children}</   Contextvalue.Provider>
}
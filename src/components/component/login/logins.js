
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../../loading/loading";
const Logins = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code')
  const navigate = useNavigate()

  useEffect(() => {
    if(code) {
       const formmdata = new FormData();
       formmdata.append("code_verifier", window.localStorage.getItem('code_verifier'));
       formmdata.append('code', code)
       axios
         .post(
           `https://admin-nefro.ssv.uz/api/auth/authenticate`, formmdata
         )

         .then(function (response) {
           window.localStorage.setItem('token', response.data.token)
           window.localStorage.setItem('id',response.data.muassasa_id)
           console.log('params', code);
           if (response.data.token && response.data.muassasa_id) {
             navigate(`/doctor`);
             window.location.reload();
           } else if (response.data.token) {
             localStorage.removeItem("id");
             navigate(`/`);
             window.location.reload();
           } else{
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            navigate(`/notfound`);
           }
         })
         .catch(function (error) {
         });
    }
     
      }, [code]);
      
  return (
    <>
    <Loading/>
    </>
  );
};

export default Logins;
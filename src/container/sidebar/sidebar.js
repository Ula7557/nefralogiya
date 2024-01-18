import { Link, useNavigate, useParams } from "react-router-dom";
import "./sidebar.scss";
import jihoz from "../../assets/img/jihoz.svg";
import sklad from "../../assets/img/sklad.svg";
import arxiv from "../../assets/img/arxiv.svg";
import shifokor from "../../assets/img/shifokor.svg";
import bemor from "../../assets/img/bemor.svg";
import home from "../../assets/img/home.svg";
import logo from "../../assets/img/logo.svg";
import statis from "../../assets/img/statis.svg";
import ariza from "../../assets/icon/ariza.svg";
import Marizalar from "../NEFRALOGIYA/marizalar";
import { useContext, useEffect, useState } from "react";
import { Contextvalue } from "../../context/context";
import { request } from "../../api/request";
import eurosoft from '../../assets/eurosoft.png'
import { useTranslation } from "react-i18next";

function  ResponsiveDrawer(news1) {
  const {open} = useContext(Contextvalue)
  const navigate = useNavigate()
  const remove = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("ids")
    navigate('/');
    window.location.reload();
  }

   const token = window.localStorage.token
   const {t} = useTranslation()
   const formData = new FormData();
   formData.append('token', token);
   const [loader, setLoeder] = useState(true);
   const [arizas, setArizas] = useState([])
   const params = useParams();
   const [news, setNews] = useState([]);
   useEffect(() => {
     request
       .post(`/omborxona/arizalar/`, formData)
       .then(function (res) {
         setArizas({
           isFetched: true,
           data: res.data.data,
           error: false,
         });
          setNews(res.data.data)
       
         // setShifokorlar(res.data.shifokorlar);
        //  setLoeder(false);
       })
       .catch(function (err) {
         setArizas({
           isFetched: false,
           data: [],
           error: err,
         });
       });
   }, [loader, params.id, news1]);
  const id = localStorage.getItem("id")
  return (
    <>
      <div>
        <div className="area" />
        <nav className={open?"main-menu main-menu--open":"main-menu"}>
        <img src={logo} className="site-logo"/>
          <ul className="sidebar_scrool">
            <li>
              <Link  to={!id ? "/" : `/doctor`}>
                <img src={home}/>
                <span className="nav-text">{t("sidebar.li1")}</span>
              </Link>
            </li>
            {!id && (
              <li>
                <Link to={"/statistic"}>
                  <img src={statis} />
                  <span className="nav-text">{t("sidebar.li8")}</span>
                </Link>
              </li>
            )}
            <li className="has-subnav">
              <Link to={id ? `/jihozlar/${id}` : "/device"}>
                <img src={jihoz}/>
                <span className="nav-text">{t("sidebar.li2")}</span>
              </Link>
            </li>
            {id && (
              <li className="has-subnav">
                <Link to={"/muassasa"}>
                  <img src={bemor}/>
                  <span className="nav-text">{t("sidebar.li9")}</span>
                </Link>
              </li>
            )}
            <li className="has-subnav">
              <Link to={id ?`/skladM/${id}`:"/sklad"}>
                <img src={sklad}/>
                <span className="nav-text">{t("sidebar.li3")}</span>
              </Link>
            </li>
            {id && (
              <li>
                <Link to={"/shifokor"}>
                  <img src={shifokor}/>
                  <span className="nav-text">{t("sidebar.li4")}</span>
                </Link>
              </li>
            )}
            {id && (
              <li>
                <Link to={"/arxiv"}>
                 <img src={arxiv}/>
                  <span className="nav-text">{t("sidebar.li5")}</span>
                </Link>
              </li>
            )}
             {
               id && (
                  <li>
                <Link to={"/arizalar"}>
                 <img src={ariza}/>
                  <span className="nav-text">{t("sidebar.li6")}</span>
                </Link>
              </li>
               )
             }
             {
               !id && (
                  <li>
                <Link to={"/barchaArizalar"} className='ariza_num'>
                 <img src={ariza}/>
                  <span className="nav-text">{t("sidebar.li6")}</span>
                  <span className="ariza_number">{news && news.length}</span>
                </Link>
              </li>
               )
             }
            <li>
              <button className="remove-item " onClick={remove}>
                  <svg style={{marginLeft:"17px"}} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.7844 9.53437L13.8469 13.4719C13.7029 13.6095 13.5117 13.6867 13.3125 13.6875C13.2159 13.6877 13.1203 13.6686 13.0312 13.6312C12.893 13.5753 12.7746 13.4794 12.6911 13.3559C12.6076 13.2323 12.5628 13.0866 12.5625 12.9375V9.75H6.75C6.55109 9.75 6.36032 9.67098 6.21967 9.53033C6.07902 9.38968 6 9.19891 6 9C6 8.80109 6.07902 8.61032 6.21967 8.46967C6.36032 8.32902 6.55109 8.25 6.75 8.25H12.5625V5.0625C12.5628 4.91336 12.6076 4.7677 12.6911 4.64413C12.7746 4.52055 12.893 4.42468 13.0312 4.36875C13.1682 4.31436 13.3179 4.30047 13.4625 4.32872C13.6071 4.35698 13.7405 4.42619 13.8469 4.52813L17.7844 8.46563C17.9252 8.60782 18.0042 8.79986 18.0042 9C18.0042 9.20014 17.9252 9.39218 17.7844 9.53437ZM6.75 16.5H1.5V1.5H6.75C6.94891 1.5 7.13968 1.42098 7.28033 1.28033C7.42098 1.13968 7.5 0.948912 7.5 0.75C7.5 0.551088 7.42098 0.360322 7.28033 0.21967C7.13968 0.0790178 6.94891 0 6.75 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H6.75C6.94891 18 7.13968 17.921 7.28033 17.7803C7.42098 17.6397 7.5 17.4489 7.5 17.25C7.5 17.0511 7.42098 16.8603 7.28033 16.7197C7.13968 16.579 6.94891 16.5 6.75 16.5Z" fill="#E63943"/>
                  </svg>

                <span
                  className="nav-text"
                  style={{
                    fontWeight:"400",
                    fontSize:"16px",
                    lineHeight:"20px",
                    width: "61px",
                    color:"#E63943"
                  }}
                >
                  {t("sidebar.li7")}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ResponsiveDrawer;
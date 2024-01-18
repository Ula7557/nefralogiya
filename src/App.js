import { Route, Routes } from "react-router-dom";
import SingleId from "./components/singleId";
import Sklad from './components/component/sklad/sklad'
import Doctor from './container/doctor/doctor'
import Poliklinika from "./components/component/anketa/poliklinika";
import Statis from "./statistic/statistic";
import Header from "./components/header/header";
import Datatable from "./pages/nefralogiya/datatable";
import Muassasalar from "./container/NEFRALOGIYA/tumanlar/muassasalar/muassasalar";
import Auth from "./components/component/auth/auth";
import ResponsiveDrawer from "./container/sidebar/sidebar";
import Sort from './container/NEFRALOGIYA/sort/sort'
import Muassasa from "./container/NEFRALOGIYA/muassasa/muassasa";
import Shifokor from './container/NEFRALOGIYA/shifokor/shifokor'
import Jihozlar from "./components/component/jihozlar/jihozlar";
import Arxiv from "./container/NEFRALOGIYA/arxiv/arxiv";
import Device from "./components/component/minstrjihozlar/device";
import Region from "./components/component/minstrjihozlar/region/region";
import Msklad from "./modules/msklad/msklad";
import Skladm from "./modules/skladM/skladmu";
import SingleBemor from "./container/NEFRALOGIYA/bemormalumoti/singleBemor";
import More from "./modules/more/more";
import SingleArxiv from "./container/NEFRALOGIYA/arxivsingle/arxivsingle";
import SingleShifokor from "./container/NEFRALOGIYA/shifokorsingle/singleShifokor";
import SingleBemorMin from "./container/NEFRALOGIYA/singlebemorMin/singleBemorMin";
import Name from "./modules/components/moreM/name";
import Ariza from "./container/NEFRALOGIYA/ariza/ariza";
import Sarflov from "./components/component/sarflov";
import Marizalar from "./container/NEFRALOGIYA/marizalar";
import Msarflov from "./components/component/msarflov";
import Usarflov from "./components/component/sarflovuser";
import { useState } from "react";
import Login from "./components/component/auth/sso/login";
import Logins from "./components/component/login/logins";
import "./i18.js"; 
import Apelation from "./modules/components/jihozariza/apelatsion";
import Notfound from "./Error/notfound";


function App() {
 
  const auth = localStorage.getItem('token')
  const id = localStorage.getItem("id")

  const [news, setNews] = useState(false)

  return (
    <div className="app">
      <div className="app_left">
        {!auth ? (
          <div className="none">
            <ResponsiveDrawer news1={news} setNews={setNews} />
          </div>
        ) : (
          <ResponsiveDrawer news1={news} setNews={setNews} />
        )}
      </div>
      <div className="app_right">
        {auth && <Header />}
        <Routes>

          {!auth &&
          
          <>
              <Route path="/auth/callback/" element={<Logins />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/notfound" element={<Notfound />} /> 
          
          </>
          }
          {!auth ? (
            <>
            <Route path="/" element={<Auth />} />
            <Route path="/auth/callback/" element={<Logins />} />
            
            </>
          ) : (
            <>
              <Route path="/:id" element={<SingleId />} />
              <Route path="/sklad" element={!id && <Sklad />} />
              <Route path="/mSklad/:id" element={!id && <Msklad />} />
              <Route path="/jihozlar/:id" element={<Jihozlar />} />
              <Route path="/doctor" element={id && <Doctor />} />
              <Route path="/sort" element={<Sort />} />
              <Route path="/poliklinika/:id" element={!id && <Poliklinika />} />
              <Route path="/muassasalar/:id" element={!id && <Muassasalar />} />
              <Route path="/muassasa" element={id && <Muassasa />} />
              <Route
                path="/bemormalumoti/:id"
                element={id && <SingleBemor />}
              />
              <Route path="/bemor/:id" element={!id && <SingleBemorMin />} />
              <Route path="/arxivmalumot/:id" element={id && <SingleArxiv />} />
              <Route path="/shifokor/:id" element={id && <SingleShifokor />} />
              <Route path="/arxiv" element={id && <Arxiv />} />
              <Route path="/sarflov" element={id && <Sarflov />} />
              <Route
                path="/ariza/:id"
                element={!id && <Msarflov news={news} setNews={setNews} />}
              />
              <Route path="/arizasi/:id" element={id && <Usarflov />} />
              <Route path="/arizalar" element={id && <Ariza />} />
              <Route
                path="/barchaArizalar"
                element={!id && <Marizalar news={news} setNews={setNews} />}
              />
              <Route path="/apelatsion" element={id && <Apelation/>}/>
              <Route path="/shifokor" element={id && <Shifokor />} />
              <Route path="/statistic" element={<Statis />} />
              <Route path="/device" element={!id && <Device />} />
              <Route path="/skladM/:id" element={<Skladm />} />
              <Route path="/more/:name" element={<More />} />
              <Route path="/nameMore/:name/" element={!id && <Name />} />
              <Route path="/region/:id" element={!id && <Region />} />
              <Route path="/" element={!id && <Datatable />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}
export default App;

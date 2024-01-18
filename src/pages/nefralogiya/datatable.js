import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { request } from "../../api/request";
import Loading from "../../components/loading/loading";
import Error from "../../Error/Error";
import summary_renderer from "../../utils/tableSummaryCalc";
import l1 from "../../assets/icon/l1.svg";
import "./datatable.scss";

const DataTable = () => {
  const token = window.localStorage.token;
  const formData = new FormData();
  formData.append("token", token);
  const [viloyat, setViloyat] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
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
          error: true,
        });
        if (err.message === "Request failed with status code 401") {
          localStorage.removeItem("token");
          window.location.reload();
        }
      });
  }, []);
  useEffect(() => {
    if (viloyat.isFetched) {
      setRows(viloyat.data.data.map((user, i) => ({ index: i + 1, ...user })));
    }
  }, [viloyat.isFetched]);

  const columns = [
    {
      field: "index",
      headerName: "Soni",
      width: 10,
      headerAlign: "left",
    },
    {
      renderCell: (params) => (
        <strong>
          <Link
            to={`/muassasalar/${params.row.id}`}
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
          >
            {params.row.viloyat}
          </Link>
        </strong>
      ),
      headerName: "HUDUD",
      width: 225,
      field: "viloyat",
      headerAlign: "left",
    },

    {
      field: "muassasa",
      headerName: "MUASSASALAR",
      width: 150,
      headerAlign: "left",
    },
    {
      field: "bemorlar",
      headerName: "BEMORLAR",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "Shifokorlar",
      headerName: "SHIFOKORLAR",
      type: "number",
      width: 150,
      headerAlign: "right",
    },
    // {
    //   field: "Rasxodniklar",
    //   headerName: "RASXODNIKLAR",
    
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   headerAlign: "left",
    // },
    {
      renderCell: (el) => (
        <>
            {el.row.omborxona[0].keldi.filtr+el.row.omborxona[0].qoldi.filtr-el.row.omborxona[0].ishlatildi.filtr}
        </>
      ),
      field: "filtr",
      headerName: "FILTR",
      type: "number",
      width: 100,
      headerAlign: "right",
    },
    {
      renderCell: (el) => (
        <>
            {el.row.omborxona[0].keldi.magistral+el.row.omborxona[0].qoldi.magistral-el.row.omborxona[0].ishlatildi.magistral}
        </>
      ),
      field: "magistral",
      headerName: "MAGISTRAL",
      type: "number",
      width: 150,
      headerAlign: "right",
    },
    {
      renderCell: (el) => (
        <>
            {el.row.omborxona[0].keldi.igna+el.row.omborxona[0].qoldi.igna-el.row.omborxona[0].ishlatildi.igna}
        </>
      ),
      field: "igna arterial",
      headerName: "IGNA ARTERIAL",
      type: "number",
      width: 150,
      headerAlign: "right",
    },
    {
      renderCell: (el) => (
        <>
            {el.row.omborxona[0].keldi.igna2+el.row.omborxona[0].qoldi.igna2-el.row.omborxona[0].ishlatildi.igna2}
        </>
      ),
      field: "igna venoz",
      headerName: "IGNA VENOZ",
      type: "number",
      width: 150,
      headerAlign: "right",
    },
    {
      renderCell: (params) => (
        <strong>
          <Link
            to={`/muassasalar/${params.row.id}`}
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
          >
            <img src={l1} />
          </Link>
        </strong>
      ),
      headerName: "Harakatlar",
      width:200,
      headerAlign: "right",
      
    },
  ];
  const [ids, setIds] = useState([]);
  const [rows, setRows] = useState([]);
  const filter = (e) => {
    setIds(e);
  };
  const send = () => {
    if (rows.length > 0) {
      setRows(viloyat.data.data.filter((item) => ids.includes(item.id)));
      setIds([]);
    }
  };
  console.log(rows);
  if (viloyat.error) return <Error />;
  if (!viloyat.isFetched) return <Loading />;

  return (
    <div className="datatable_block">
      <div className="">
        <div style={{ height: 850, width: "100%" }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <button
              className={ids[0] ? "datatable_none--style" : "datatable_none"}
              onClick={send}
              style={{
                padding: "10px",
                marginBottom: "14px",
                border: "none",
                backgroundColor: "#13a8e2",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Saralash
            </button>
            <button
              className={ids[0] ? "datatable_none--style" : "datatable_none"}
              style={{
                padding: "10px",
                marginBottom: "14px",
                marginLeft: "9px",
                border: "none",
                backgroundColor: "#13a8e2",
                color: "#fff",
                borderRadius: "8px",
              }}
              onClick={() => window.location.reload()}
            >
              Ortga
            </button>
          </div>
          <DataGrid
          style={{
            marginTop:"28px",
            marginLeft:"20px",
            marginRight:"20px"
          }}
            rows={rows}
            columns={columns}
            checkboxSelection
            selectionModel={ids}
            onSelectionModelChange={filter}
          />
          
          <div
            className="none-element"
            style={
              ids[0]
                ? {
                    display: "flex",
                    position: "absolute",
                    alignItems: "left",
                    marginTop:"49px",
                    marginLeft:"20px",
                    backgroundColor:"#fff",
                    borderRadius:"12px",
                    width:"94%",
                    top: "914px",
                  }
                : {
                    display: "flex",
                    position: "absolute",
                    alignItems: "left",
                    marginLeft:"20px",
                    marginTop:"49px",
                    backgroundColor:"#fff",
                    borderRadius:"12px",
                    width:"94%",
                    top: "914px",
                  }
            }
          >
            <h2
              style={{
                paddingLeft:"51px",
                marginLeft: "15px",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "28px",
              }}
            >
              Jami:
            </h2>
            <p
              className="pageAll"
              style={{
                left: "390px",
              }}
            >
              {summary_renderer(rows, "muassasa")}
            </p>
            <p
              className="pageAll"
              style={{
                left: "532px",
              }}
            >
              {summary_renderer(rows, "bemorlar")}
            </p>
            <p
              className="pageAll"
              style={{
               left:"692px",
              }}
            >
              {summary_renderer(rows, "Shifokorlar")}
            </p>
            <p
              className="pageAll"
              style={{
               left:"856px",
              }}
            >
              {rows.map(el => el.omborxona[0].keldi.filtr+el.omborxona[0].qoldi.filtr-el.omborxona[0].ishlatildi.filtr).reduce((per,acc) => per+acc,0)}
            </p>
            <p
              className="pageAll"
              style={{
               left:"1010px",
              }}
            >
              {rows.map(el => el.omborxona[0].keldi.magistral+el.omborxona[0].qoldi.magistral-el.omborxona[0].ishlatildi.magistral).reduce((per,acc) => per+acc,0)}
            </p>
            <p
              className="pageAll"
              style={{
               left:"1160px",
              }}
            >
              {rows.map(el => el.omborxona[0].keldi.igna+el.omborxona[0].qoldi.igna-el.omborxona[0].ishlatildi.igna).reduce((per,acc) => per+acc,0)}
            </p>
            <p
              className="pageAll"
              style={{
               left:"1308px",
              }}
            >
              {rows.map(el => el.omborxona[0].keldi.igna2+el.omborxona[0].qoldi.igna2-el.omborxona[0].ishlatildi.igna2).reduce((per,acc) => per+acc,0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

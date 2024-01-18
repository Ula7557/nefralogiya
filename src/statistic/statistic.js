import "./statistic.scss";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { request } from "../api/request";
import { Pie } from "react-chartjs-2";

const labels = ["Qoraqalpog`iston Respublikasi", "Andijon viloyati", "Buxor viloyati", "Farg`ona viloyati", "Jizzax viloyati", "Xorazm vilotati", "Namangan viloyati","Navoiy viloyati","Qashqadaryo viloyati","Samarqand viloyati","Sirdaryo viloyati","Surxanadaryo viloyati","Toshkent viloyati","Toshkent shahri"];

ChartJS.register(ArcElement, Tooltip, Legend);


// {
//   viloyat:"Andijon viloyati",    
//   bemorlar:100,
//  shifokorlar:10
// }
function Statis() {
  const [viloyat, setViloyat] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vertikal statistika",
      },
    },
  };
  console.log("viloyatlar", viloyat.data.data);
  const data = {
    labels,
    datasets: [
      {
        label: "Bemorlar",
        data: viloyat.data.data && viloyat.data.data.map((el) => el.bemorlar),
        backgroundColor: "#1464C0",
      },
      {
        label: "Shifokorlar",
        backgroundColor: "#9AC4F4",
        data:
          viloyat.data.data && viloyat.data.data.map((el) => el.Shifokorlar),
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const formData = new FormData();
  formData.append("token", localStorage.getItem("token"));
  //2 -charts
  const spral = {
    labels: viloyat.data.data && viloyat.data.data.map((el) => el.viloyat),
    datasets: [
      {
        label: "muassalar",
        data: viloyat.data.data && viloyat.data.data.map((el) => el.muassasa),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
        throw err;
      });
    // eslint-disable-next-line
  }, []);

  

  return (
    <>
        <h2 className="chart-head">Vertikal statistika</h2>
        <Bar className="chart-width" options={options} data={data} />
    </>
  );
}
export default Statis;
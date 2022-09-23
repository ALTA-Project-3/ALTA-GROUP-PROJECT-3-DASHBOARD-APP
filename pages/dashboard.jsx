import { BriefcaseIcon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Chart from "chart.js/auto";

export default function Dashboard() {
  const [total, setTotal] = useState([]);

  const getTotal = () => {
    axios
      .get("https://tugas.website/user/profile", {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((response) => {
        console.log("ini response", response.data.data);
        setTotal(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTotal();
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Placement",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
      {
        label: "Graduate",
        data: [50, 25, 35, 51, 54, 76],
        fill: true,
        backgroundColor: "rgba(116,39,116,0.2)",
        borderColor: "rgba(116,39,116,1)",
        tension: 0.3,
      },
      {
        label: "Register",
        data: [29, 27, 48, 42, 65, 45],
        fill: true,
        backgroundColor: "rgba(83,87,212,0.2)",
        borderColor: "#5357D4",
        tension: 0.3,
      },
    ],
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="w-screen">
          <Header />
          <div className="grid md:gap-20 gap-3 mb-8 mt-12 mx-14 md:grid-cols-2 xl:grid-cols-3">
            {/* <!-- Card --> */}
            <div className="flex items-center justify-start p-4  bg-white rounded-lg shadow-xs dark:bg-gray-800">
              <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                <UserGroupIcon className="w-5 h-5" stroke="currentColor" />
              </div>
              <div>
                <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">Mentee Active</p>
                <p className="text-6xl text-center font-bold text-gray-700 dark:text-gray-200">{total.menteeActive}</p>
              </div>
            </div>
            {/* <!-- Card --> */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
              <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                <BriefcaseIcon className="w-5 h-5" stroke="currentColor" />
              </div>
              <div>
                <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">Mentee Placement</p>
                <p className="text-6xl text-center font-bold text-gray-700 dark:text-gray-200">{total.menteePlacement}</p>
              </div>
            </div>
            {/* <!-- Card --> */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
              <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                <DocumentTextIcon className="w-5 h-5" stroke="currentColor" />
              </div>
              <div>
                <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">Mentor Feedback</p>
                <p className="text-6xl text-center font-bold text-gray-700 dark:text-gray-200">{total.menteeFeedback}</p>
              </div>
            </div>
          </div>
          <div className="min-w-0 mx-14 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="App">
              <Line data={data} width={50} height={13} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

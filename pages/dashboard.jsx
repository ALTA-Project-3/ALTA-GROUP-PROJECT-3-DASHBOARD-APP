import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
  UserGroupIcon,
  BriefcaseIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";


export default function Dashboard() {
  const [total, setTotal] = useState([]);

  const getTotal = () => {
    axios .get('https://virtserver.swaggerhub.com/nawihusen/groupproject3/1.0.0/user/profile')
    .then((response) => {
      console.log("ini response", response.data);
      setTotal(response.data)
    })

    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getTotal()
  }, []) 



  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="w-screen">
          <Header />
          <div className="grid gap-20 mb-8 mt-12 mx-14 md:grid-cols-2 xl:grid-cols-3">
            {/* <!-- Card --> */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
              <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                <UserGroupIcon className="w-5 h-5" stroke="currentColor" />
              </div>
              <div>
                <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                  Mentee Active
                </p>
                <p className="text-6xl text-center font-bold text-gray-700 dark:text-gray-200">
                  {total.Menteeactive}
                </p>
              </div>
            </div>
            {/* <!-- Card --> */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
              <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                <BriefcaseIcon className="w-5 h-5" stroke="currentColor" />
              </div>
              <div>
                <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                  Mentee Placement
                </p>
                <p className="text-6xl text-center font-bold text-gray-700 dark:text-gray-200">
                  {total.MenteePlacement}
                </p>
              </div>
            </div>
            {/* <!-- Card --> */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
              <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                <DocumentTextIcon className="w-5 h-5" stroke="currentColor" />
              </div>
              <div>
                <p className="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                  Mentor Feedback
                </p>
                <p className="text-6xl text-center font-bold text-gray-700 dark:text-gray-200">
                  {total.MenteeFeedback}
                </p>
              </div>
            </div>
          </div>
          <div
                className="min-w-0 mx-14 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                  Register
                </h4>
                <canvas id="line"></canvas>
                <div
                  className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
                >
                  {/* <!-- Chart legend --> */}
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"
                    ></span>
                    <span>Graduates</span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                    ></span>
                    <span>Placement</span>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}

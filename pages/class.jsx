import {
  PencilSquareIcon,
  TrashIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import axios from "axios";
import Cookies from "js-cookie";
import ModalClass from "../components/ModalClass";
import ModalClassEdit from "../components/ModalClassEdit";

function Class() {
  const [classname, setClassname] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [className, setClassName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [userId, setUserId] = useState(0);
  const [showAlertDeleted, setShowAlertDeleted] = useState(false);
  const [showAlertCreated, setShowAlertCreated] = useState(false);
  const [showAlertEdited, setShowAlertEdited] = useState(false);

  const getClassName = () => {
    axios
      .get("https://tugas.website/user/class", {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })

      .then((result) => {
        setClassname(result.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getClassName();
  }, []);

  const handleAddNewClass = () => {
    setClassName("");
    setStartDate("");
    setEndDate("");
    axios
      .post(
        "https://tugas.website/user/class",
        {
          name: className,
          start_date: startDate,
          end_date: endDate,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((response) => {
        setShowModal(false);
        getClassName();
        setShowAlertCreated(true);
        setTimeout(() => setShowAlertCreated(false), 2000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleDeleteClass = (item) => {
    axios
      .delete(`https://tugas.website/user/class/${item}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((response) => {
        getClassName();
        setShowAlertDeleted(true);
        setTimeout(() => setShowAlertDeleted(false), 2000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleEditClass = (id) => {
    setClassName("");
    setStartDate("");
    setEndDate("");
    axios
      .put(
        `https://tugas.website/user/class/${id}`,
        {
          ID: id,
          name: className,
          start_date: startDate,
          end_date: endDate,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((response) => {
        setShowModalEdit(false);
        setShowAlertEdited(true);
        setTimeout(() => setShowAlertEdited(false), 2000);
        getClassName();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="w-screen">
          <Header />
          <div className="w-full overflow-x-auto px-24">
            {showAlertDeleted ? (
              <div
                className={
                  "text-white px-6 py-4 mt-14 border-0 rounded relative  bg-red-500"
                }
              >
                <span className="text-xl inline-block mr-5 align-middle">
                  <BellAlertIcon className="text-white" />
                </span>
                <span className="inline-block align-middle mr-8">
                  <b className="capitalize">Class Successfully Deleted</b>
                </span>
                <button
                  className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                  onClick={() => setShowAlertDeleted(false)}
                >
                  <span>×</span>
                </button>
              </div>
            ) : null}
            {showAlertCreated ? (
              <div
                className={
                  "text-white px-6 py-4 mt-14 border-0 rounded relative  bg-green-500"
                }
              >
                <span className="text-xl inline-block mr-5 align-middle">
                  <BellAlertIcon className="text-white" />
                </span>
                <span className="inline-block align-middle mr-8">
                  <b className="capitalize">Class Successfully Created</b>
                </span>
                <button
                  className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                  onClick={() => setShowAlertCreated(false)}
                >
                  <span>×</span>
                </button>
              </div>
            ) : null}
            {showAlertEdited ? (
              <div
                className={
                  "text-white px-6 py-4 mt-14 border-0 rounded relative  bg-blue-500"
                }
              >
                <span className="text-xl inline-block mr-5 align-middle">
                  <BellAlertIcon className="fas fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                  <b className="capitalize">Class Successfully Edited</b>
                </span>
                <button
                  className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                  onClick={() => setShowAlertCreated(false)}
                >
                  <span>×</span>
                </button>
              </div>
            ) : null}
            <label className="block mt-16 text-sm mb-4">
              <div className=" text-gray-500 focus-within:text-purple-600 flex justify-end">
                <input
                  className="block w-48 py-2 mr-3 text-sm text-gray-300 border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple focus:shadow-outline-gray form-input rounded-md placeholder:px-2"
                  placeholder="Search"
                />
                <button className="block px-4 mr-6 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-transparent border border-purple-600 rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-purple focus:shadow-outline-purple">
                  Search
                </button>
                <button
                  className=" block px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  onClick={() => setShowModal(true)}
                >
                  Add New
                </button>
              </div>
            </label>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-center text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3 border-r dark:border-gray-700">
                      Class Name
                    </th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  {classname.map((item) => {
                    return (
                      <tr
                        className="text-gray-700 dark:text-gray-400"
                        key={item.ID}
                      >
                        <td className="px-4 py-3 border-r dark:border-gray-700">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold ">{item.Name}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 ">
                          <div className="flex items-center space-x-4 text-sm justify-around">
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Edit"
                              onClick={() => {
                                setShowModalEdit(true), setUserId(item.ID);
                              }}
                            >
                              <PencilSquareIcon className="w-5 h-5 " />
                            </button>
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Delete"
                              onClick={() => handleDeleteClass(item.ID)}
                            >
                              <TrashIcon className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="text-gray-500 focus-within:text-purple-600 flex justify-end mt-6 gap-4">
              <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                <ChevronDoubleLeftIcon className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                <ChevronDoubleRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <ModalClass
          className={className}
          setClassName={(e) => setClassName(e.target.value)}
          startDate={startDate}
          setStartDate={(e) => setStartDate(e.target.value)}
          endDate={endDate}
          setEndDate={(e) => setEndDate(e.target.value)}
          handleAddNewClass={handleAddNewClass}
          setShowModal={() => setShowModal(false)}
        />
      ) : null}

      {showModalEdit ? (
        <ModalClassEdit
          className={className}
          setClassName={(e) => setClassName(e.target.value)}
          startDate={startDate}
          setStartDate={(e) => setStartDate(e.target.value)}
          endDate={endDate}
          setEndDate={(e) => setEndDate(e.target.value)}
          handleEditClass={() => handleEditClass(userId)}
          setShowModalEdit={() => setShowModalEdit(false)}
        />
      ) : null}
    </>
  );
}

export default Class;

{
  /* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */
}

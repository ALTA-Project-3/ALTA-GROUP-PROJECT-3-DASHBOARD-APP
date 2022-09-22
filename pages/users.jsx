import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { PencilSquareIcon, TrashIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Cookies from "js-cookie";
import Modal from "../components/Modal";
import ModalEditUser from "../components/ModalEditUser";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(0);
  const [showAlertDeleted, setShowAlertDeleted] = useState(false);
  const [showAlertCreated, setShowAlertCreated] = useState(false);
  const [showAlertEdited, setShowAlertEdited] = useState(false);

  const getUsers = () => {
    axios
      .get("https://tugas.website/users", {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleAddNewUser = () => {
    setFullName("");
    setEmail("");
    setTeam("");
    setRole("");
    setStatus("");
    setPassword("");

    axios
      .post(
        "https://tugas.website/admin",
        {
          fullName,
          email,
          team,
          status,
          role,
          password,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((response) => {
        setShowModal(false);
        setShowAlertCreated(true);
        setTimeout(() => setShowAlertCreated(false), 2000);
        getUsers();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleDeleteUser = (user) => {
    axios
      .delete(`https://tugas.website/admin/${user}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((response) => {
        getUsers();
        setShowAlertDeleted(true);
        setTimeout(() => setShowAlertDeleted(false), 2000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleEditUser = (id) => {
    setFullName("");
    setEmail("");
    setTeam("");
    setRole("");
    setStatus("");
    setPassword("");
    axios
      .put(
        "https://tugas.website/users",
        {
          id: id,
          fullName,
          email,
          team,
          status,
          role,
          password,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((response) => {
        setShowModalEdit(false);
        setShowAlertEdited(true);
        setTimeout(() => setShowAlertEdited(false), 2000);
        getUsers();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 py-10 mx-auto">
              {showAlertDeleted ? (
                <div className={"text-white px-6 py-4 mt-14 border-0 rounded relative  bg-red-500"}>
                  <span className="text-xl inline-block mr-5 align-middle">
                    <BellAlertIcon className="fas fa-bell" />
                  </span>
                  <span className="inline-block align-middle mr-8">
                    <b className="capitalize">User Successfully Deleted</b>
                  </span>
                  <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={() => setShowAlertDeleted(false)}>
                    <span>×</span>
                  </button>
                </div>
              ) : null}
              {showAlertCreated ? (
                <div className={"text-white px-6 py-4 mt-14 border-0 rounded relative  bg-green-500"}>
                  <span className="text-xl inline-block mr-5 align-middle">
                    <BellAlertIcon className="fas fa-bell" />
                  </span>
                  <span className="inline-block align-middle mr-8">
                    <b className="capitalize">User Successfully Created</b>
                  </span>
                  <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={() => setShowAlertCreated(false)}>
                    <span>×</span>
                  </button>
                </div>
              ) : null}
              {showAlertEdited ? (
                <div className={"text-white px-6 py-4 mt-14 border-0 rounded relative  bg-blue-500"}>
                  <span className="text-xl inline-block mr-5 align-middle">
                    <BellAlertIcon className="fas fa-bell" />
                  </span>
                  <span className="inline-block align-middle mr-8">
                    <b className="capitalize">User Successfully Edited</b>
                  </span>
                  <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={() => setShowAlertCreated(false)}>
                    <span>×</span>
                  </button>
                </div>
              ) : null}
              <label className="block mt-4 text-sm mb-4">
                <div className=" text-gray-500 focus-within:text-purple-600 flex justify-end">
                  <input
                    className="block w-48 py-2 mr-3 text-sm text-gray-300 border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple focus:shadow-outline-gray form-input rounded-md placeholder:px-2"
                    placeholder="Search"
                  />
                  <button className="block px-4 mr-6 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-transparent border border-purple-600 rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-purple focus:shadow-outline-purple">
                    Search
                  </button>
                  <button
                    type="button"
                    className=" block px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                    onClick={() => setShowModal(true)}
                  >
                    Add New
                  </button>
                </div>
              </label>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                        <th className="px-4 py-3 text-center">Fullname</th>
                        <th className="px-4 py-3 text-center">Email</th>
                        <th className="px-4 py-3 text-center">Team</th>
                        <th className="px-4 py-3 text-center">Role</th>
                        <th className="px-4 py-3 text-center">Status</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-700 bg-gray-800">
                      {users.map((user) => {
                        return (
                          <>
                            <tr className="text-gray-400" key={user.id}>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center text-sm">
                                  <p className="font-semibold capitalize">{user.fullname}</p>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-center text-sm">{user.email}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.team}</td>
                              <td className="px-4 py-3 text-center text-sm capitalize">{user.role}</td>
                              <td className="px-4 py-3 text-center text-xs">
                                {user.status === "Active" ? (
                                  <span className="px-2 py-1 font-semibold leading-tight rounded-full bg-green-700 text-green-100">{user.status}</span>
                                ) : user.status === "Not-Active" ? (
                                  <span className="px-2 py-1 font-semibold leading-tight rounded-full bg-orange-700 text-green-100">{user.status}</span>
                                ) : user.status === "Deleted" ? (
                                  <span className="px-2 py-1 font-semibold leading-tight rounded-full bg-red-700 text-green-100">{user.status}</span>
                                ) : null}
                              </td>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center justify-center space-x-4 text-sm">
                                  <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Edit"
                                    onClick={() => {
                                      setShowModalEdit(true), setUserId(user.id);
                                    }}
                                  >
                                    <PencilSquareIcon className="w-5 h-5" />
                                  </button>
                                  <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Delete"
                                    onClick={() => handleDeleteUser(user.id)}
                                  >
                                    <TrashIcon className="w-5 h-5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
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
          </main>
        </div>
      </div>
      {showModal ? (
        <Modal
          fullName={fullName}
          setFullName={(e) => setFullName(e.target.value)}
          email={email}
          setEmail={(e) => setEmail(e.target.value)}
          team={team}
          setTeam={(e) => setTeam(e.target.value)}
          role={role}
          setRole={(e) => setRole(e.target.value)}
          status={status}
          setStatus={(e) => setStatus(e.target.value)}
          password={password}
          setPassword={(e) => setPassword(e.target.value)}
          handleAddNewUser={handleAddNewUser}
          setShowModal={() => setShowModal(false)}
        />
      ) : null}
      {showModalEdit ? (
        <ModalEditUser
          fullName={fullName}
          setFullName={(e) => setFullName(e.target.value)}
          email={email}
          setEmail={(e) => setEmail(e.target.value)}
          team={team}
          setTeam={(e) => setTeam(e.target.value)}
          role={role}
          setRole={(e) => setRole(e.target.value)}
          status={status}
          setStatus={(e) => setStatus(e.target.value)}
          password={password}
          setPassword={(e) => setPassword(e.target.value)}
          handleEditUser={() => handleEditUser(userId)}
          setShowModalEdit={() => setShowModalEdit(false)}
        />
      ) : null}
    </>
  );
}

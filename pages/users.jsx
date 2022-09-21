import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { PencilSquareIcon, TrashIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Cookies from "js-cookie";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

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

  const handleAddNewUser = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setTeam("");
    setRole("");
    setStatus("");
    setPassword("");
    axios
      .post("https://tugas.website/admin", {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
        data: {
          fullname: fullName,
          email: email,
          team: team,
          status: status,
          role: role,
          password: password,
        },
      })
      .then((response) => {
        console.log(response);
        setShowModal(false);
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
                                  <p className="font-semibold">{user.fullname}</p>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-center text-sm">{user.email}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.team}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.role}</td>
                              <td className="px-4 py-3 text-center text-xs">
                                <span className="px-2 py-1 font-semibold leading-tight rounded-full bg-green-700 text-green-100">{user.status}</span>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center justify-center space-x-4 text-sm">
                                  <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                                    <PencilSquareIcon className="w-5 h-5" />
                                  </button>
                                  <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
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
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-700 rounded-t">
                  <h3 className="text-3xl text-gray-400 font-semibold">Add New User</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="flex flex-col text-gray-400 gap-2">
                    <label>Full Name</label>
                    <input
                      className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Team</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      value={team}
                      onChange={(e) => setTeam(e.target.value)}
                    />
                    <label>Role</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label>Status</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-700 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:outline-purple-500 rounded mr-3 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-purple-600 text-white active:bg-purple-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleAddNewUser(e)}
                  >
                    Create User
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

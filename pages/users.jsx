import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { PencilSquareIcon, TrashIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Cookies from "js-cookie";
import { UsersIcon } from "@heroicons/react/24/outline";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://tugas.website/users", {
        headers: { Authorization: "Bearer " + Cookies.get("JWT") },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 py-40 mx-auto">
              <label className="block mt-4 text-sm mb-4">
                <div className=" text-gray-500 focus-within:text-purple-600 flex justify-end">
                  <input
                    className="block w-48 py-2 mr-3 text-sm text-gray-300 border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple focus:shadow-outline-gray form-input rounded-md placeholder:px-2"
                    placeholder="Search"
                  />
                  <button className="block px-4 mr-6 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-transparent border border-purple-600 rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-purple focus:shadow-outline-purple">
                    Search
                  </button>
                  <button className=" block px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    Add New
                  </button>
                </div>
              </label>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3 text-center">Fullname</th>
                        <th className="px-4 py-3 text-center">Email</th>
                        <th className="px-4 py-3 text-center">Team</th>
                        <th className="px-4 py-3 text-center">Role</th>
                        <th className="px-4 py-3 text-center">Status</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                      {users.map((user) => {
                        return (
                          <>
                            <tr className="text-gray-700 dark:text-gray-400" key={user.id}>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center text-sm">
                                  <p className="font-semibold">{user.fullname}</p>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-center text-sm">{user.email}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.team}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.role}</td>
                              <td className="px-4 py-3 text-center text-xs">
                                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">{user.status}</span>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center justify-center space-x-4 text-sm">
                                  <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                                    <PencilSquareIcon className="w-5 h-5" />
                                  </button>
                                  <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
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
    </>
  );
}

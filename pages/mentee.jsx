import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { PencilSquareIcon, TrashIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Mentee = () => {
  const [mentee, setMentee] = useState([]);
  const Router = useRouter();

  const getMentee = () => {
    axios
      .get("https://tugas.website/user/mentee", {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((response) => {
        setMentee(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMentee();
  }, []);

  return (
    <>
      <div className="flex w-screen bg-gray-900 h-max">
        <SideBar />

        <div className="flex flex-col flex-1 w-full">

          <Header />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 py-10 mx-auto">
              <label className="block mt-4 text-sm mb-4 ">
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
                    onClick={() => Router.push("/addMentee")}
                  >
                    Add New
                  </button>
                </div>

                
                <div className="text-gray-500 focus-within:text-purple-600 flex justify-end gap-4 pt-5 pb-8">
                <button

                    type="button"
                    className=" block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Filter
                  </button>
                  <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <select className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-500 focus:shadow-outline-gray">
                    <option value="">Select Class</option>
                    <option value="Frontend Engineer Batch 8">Frontend Engineer Batch 8</option>
                    <option value="Backend Engineer Batch 11">Backend Engineer Batch 11</option>
                    <option value="Frontend Engineer Batch 15">Frontend Engineer Batch 15</option>
                  </select>
                </div>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <select className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-500 focus:shadow-outline-gray">
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Non-Active">Non-Active</option>
                   
                  </select>
                </div>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <select className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-500 focus:shadow-outline-gray">
                    <option value="">Select Category</option>
                    <option value="Informatic">Informatic</option>
                    <option value="Non-Informatic">Non-Informatic</option>
                    
                  </select>
                </div>
                
                  <button
                    type="button"
                    className=" block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Export
                  </button>
                </div>
              </label>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                        <th className="px-4 py-3 text-center">Name</th>

                        <th className="px-4 py-3 text-center">Class</th>
                        <th className="px-4 py-3 text-center">Status</th>
                        <th className="px-4 py-3 text-center">Category</th>
                        <th className="px-4 py-3 text-center">Gender</th>
                        <th className="px-4 py-3 text-center">Detail</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-700 bg-gray-800">
                      {mentee.map((user) => {
                        return (
                          <>
                            <tr className="text-gray-400">
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center text-sm">
                                  <p className="font-semibold">{user.name}</p>
                                </div>
                              </td>

                              <td className="px-4 py-3 text-center text-sm">{user.class}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.status}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.category}</td>
                              <td className="px-4 py-3 text-center text-sm">{user.gender}</td>
                              <td className="px-4 py-3 text-center text-sm ">
                                <button
                                  className="flex items-center justify-center px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Detail"
                                  onClick={() => Router.push("/menteeLog")}
                                >
                                  <DocumentMagnifyingGlassIcon className="w-5 h-5" />
                                </button>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <div className="flex items-center justify-center space-x-4 text-sm">
                                  <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                                    <PencilSquareIcon className="w-5 h-5" />
                                  </button>
                                  <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Delete"
                                    // onClick={() => handleDeleteUser(user.id)}
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
    </>
  );
};

export default Mentee;

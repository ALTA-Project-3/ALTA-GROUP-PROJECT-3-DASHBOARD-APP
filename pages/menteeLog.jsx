import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const MenteeLog = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="w-screen">
          <Header />
          <div className="px-10">
            <div className=" pt-10 justify-between text-gray-300 flex">
              <div>
                <div className="flex">
                  <p className="text-xl">Rachman Kamil</p>
                  <p>- Kamil -</p>
                </div>
                <p className="text-sm">Quality Engineering Batch 8</p>
                <p>IPA</p>
                <p>SMA Negri 4 Surabaya</p>
              </div>
              <div>
                <p>Phone: 08983219836</p>
                <p>Telegram: @rachmankamil</p>
                <p>Discord: @rachmankamil#1234</p>
                <p>Email: rachmankamil@gmail.com</p>
              </div>
            </div>
            <div className="pt-10">
              <button
                className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple "
                onClick={() => setShowModal(true)}
              >
                Add New Log
              </button>
            </div>

            <div class="px-4 py-3 mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="flex text-gray-400 px-12 gap-20">
                <div>
                  <p className="text-sm">End Of Section</p>
                  <p className="text-sm">Bagas</p>
                  <p className="text-sm">22 September 2019</p>
                </div>
                <div>
                  <p className="text-sm">
                    Ini adalah feedback yang ditambahkan di add new log
                  </p>
                  <div className="pt-5">
                    <p>Changed Status: Active </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-700 rounded-t">
                    <h3 className="text-3xl text-gray-400 font-semibold">
                      Add New Log
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form className="flex flex-col text-gray-400 gap-2">
                      <label>Status</label>
                      <input className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" />
                      <label>Feedback</label>
                      <textarea className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" />
                      <input
                        className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                        type="file"
                        id="formFile"
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
                    >
                      Add New Log
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </>
  );
};

export default MenteeLog;

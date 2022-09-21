import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import axios from "axios";

function Class() {
  const [classname, setClassname] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getClassName = () => {
    axios
      .get(
        "https://virtserver.swaggerhub.com/nawihusen/groupproject3/1.0.0/user/class"
      )

      .then((result) => {
        console.log("ini hasil", result);
        setClassname(result.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getClassName();
  }, []);

  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="w-screen">
          <Header />
          <div className="w-full overflow-x-auto px-24">
            <label className="block mt-24 text-sm mb-4">
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
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3 border-r dark:border-gray-700">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold ">{item.name}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 ">
                          <div className="flex items-center space-x-4 text-sm justify-around">
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Edit"
                            >
                              <PencilSquareIcon className="w-5 h-5 " />
                            </button>
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Delete"
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

            {/* modal */}
            <>
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
                    <label>Class Name</label>
                    <input
                      className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                    />
                    <label>Start Date</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>End Date</label>
                    <input
                      className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                      // value={team}
                      // onChange={(e) => setTeam(e.target.value)}
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
                    // onClick={(e) => handleAddNewUser(e)}
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
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Class;

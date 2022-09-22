import React from "react";

function Modal({ fullName, setFullName, email, setEmail, team, setTeam, role, setRole, status, setStatus, password, setPassword, handleAddNewUser, setShowModal }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-96 my-6 mx-auto max-w-3xl">
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
                <input className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" value={fullName} onChange={setFullName} />
                <label>Email</label>
                <input className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" value={email} onChange={setEmail} />
                <label>Team</label>
                <select className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" value={team} onChange={setTeam}>
                  <option value="">Select Team</option>
                  <option value="Academic">Academic</option>
                  <option value="Placement">Placement</option>
                  <option value="People">People</option>
                  <option value="Admission">Admission</option>
                </select>
                <label>Role</label>
                <select className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" value={role} onChange={setRole}>
                  <option value="">Select Role</option>
                  <option value="Default">Default</option>
                  <option value="Admin">Admin</option>
                </select>
                <label>Status</label>
                <select className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" value={status} onChange={setStatus}>
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Not-Active">Not-Active</option>
                </select>
                <label>Password</label>
                <input className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray" value={password} onChange={setPassword} />
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-700 rounded-b">
              <button
                className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:outline-purple-500 rounded mr-3 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={setShowModal}
              >
                Close
              </button>
              <button
                className="bg-purple-600 text-white active:bg-purple-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleAddNewUser}
              >
                Create User
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;

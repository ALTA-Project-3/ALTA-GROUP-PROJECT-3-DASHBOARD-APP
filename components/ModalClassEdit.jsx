import React from 'react'

function ModalClassEdit({ className, setClassName, startDate, setStartDate, endDate, setEndDate, handleEditClass, setShowModalEdit}) {
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-700 rounded-t">
                <h3 className="text-3xl text-gray-400 font-semibold">
                  Edit Class
                </h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <form className="flex flex-col text-gray-400 gap-2">
                  <label>Class Name</label>
                  <input
                    className="col  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                    value={className}
                    onChange={setClassName}
                  />
                  <label>Start Date</label>
                  <input
                    className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                    value={startDate}
                    type="date"
                    onChange={setStartDate}
                  />
                  <label>End Date</label>
                  <input
                    className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                    value={endDate}
                    type="date"
                    onChange={setEndDate}
                  />
                </form>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-700 rounded-b">
                <button
                  className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none hover:outline-purple-500 rounded mr-3 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={setShowModalEdit}
                >
                  Close
                </button>
                <button
                  className="bg-purple-600 text-white active:bg-purple-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleEditClass}
                >
                  Edit Class
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ModalClassEdit
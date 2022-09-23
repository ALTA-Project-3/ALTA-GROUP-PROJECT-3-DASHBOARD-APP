import Header from "../components/Header"
import SideBar from "../components/SideBar"

const AddMentee = () => {
  return (
    <>
    <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="w-screen">
          <Header />
          <div className="px-10 py-10">
          <div
              className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 "
            >
              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Name</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Name"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Address</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Adress"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Home Adress</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Home Adress"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Email</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Email"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Gender</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Gender"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Telegram</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Telegram"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Phone</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Phone"
                  />
                
                </div>
              </label>

              <p className="text-gray-700 dark:text-gray-400 pt-3">Emergency Data</p>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Name</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Name"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Phone</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Phone"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Status</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Status"
                  />
                
                </div>
              </label>

              <p className="text-gray-700 dark:text-gray-400 pt-3">Education Data</p>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Type</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Type"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Class</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Class"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Major</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Major"
                  />
                
                </div>
              </label>

              <label className="block text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Graduate</span>
                <div
                  className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5"
                >
                  <input
                    className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Graduate"
                  />
                
                </div>
              </label>

              

             
            </div>
            </div>
          </div>
          </div>
          </>
  )
}

export default AddMentee
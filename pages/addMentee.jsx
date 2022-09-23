import Header from "../components/Header";
import SideBar from "../components/SideBar";

const AddMentee = () => {
  return (
    <>
      <div className="flex bg-gray-900 h-max">
        <SideBar />
        <div className="w-screen ">
          <Header />
          <div className="px-10 py-10">
            <div className="px-8 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 ">
              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Name</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5 ">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Name"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Address</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Adress"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Home Adress</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Home Adress"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Email</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Email"
                  />
                </div>
              </label>

              <label className="text-sm flex my-3">
                <span className="text-gray-700 dark:text-gray-400 basis-1/6">Gender</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 items-center flex gap-3 ">
                  <label for="male">Male</label>
                  <input
                    id="male"
                    name="gender"
                    value="Male"
                    type="radio"
                    className="rounded-full border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-radio"
                    placeholder="Gender"
                  />

                  <label for="female">Female</label>
                  <input
                    id="female"
                    name="gender"
                    value="Female"
                    type="radio"
                    className="rounded-full border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-radio"
                    placeholder="Gender"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Telegram</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Telegram"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Phone</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Phone"
                  />
                </div>
              </label>

              <p className="text-gray-700 dark:text-gray-400 pt-3">Emergency Data</p>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Name</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Name"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Phone</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Phone"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Status</span>
                <div className="relative pt-1 text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <select className=" w-full  px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-500 focus:shadow-outline-gray">
                    <option value="">Select Status</option>
                    <option value="Orangtua">Orangtua</option>
                    <option value="Kakek Nenek">Kakek Nenek</option>
                    <option value="Saudara Orangtua">Saudara Orangtua</option>
                  </select>
                </div>
              </label>

              <p className="text-gray-700 dark:text-gray-400 pt-3">Education Data</p>

              <label className=" text-sm flex mt-3">
                <span className="text-gray-700 dark:text-gray-400 basis-1/6">Type</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5 flex gap-3 items-center mb-3">
                  <label for="Informatic">Informatic</label>
                  <input
                    id="Informatic"
                    name="gender"
                    value="Informatic"
                    type="radio"
                    className="rounded-full border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-radio"
                    placeholder="Gender"
                  />

                  <label for="Non-Informatic">Non-Informatic</label>
                  <input
                    id="Non-Informatic"
                    name="gender"
                    value="Non-Informatic"
                    type="radio"
                    className="rounded-full border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-radio"
                    placeholder="Gender"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Class</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Class"
                  />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Major</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input placeholder="Major" />
                </div>
              </label>

              <label className=" text-sm flex">
                <span className="text-gray-700 dark:text-gray-400 pt-3 basis-1/6">Graduate</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 basis-4/5">
                  <input
                    className=" rounded-lg w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Graduate"
                  />
                </div>
              </label>

              <div className="justify-end pt-8">
                <button
                  type="button"
                  className="  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMentee;

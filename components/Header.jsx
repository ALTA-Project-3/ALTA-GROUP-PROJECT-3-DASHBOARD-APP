import Image from "next/image";
import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
function Header() {
  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 shadow-md bg-gray-800">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-gray-300">
            <div className="flex flex-col">
              <h4 className="font-bold text-[24]">Immersive Dashboard</h4>
              <p className="text-[24] mt-4">Dashboard</p>
            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              {/* <!-- Notifications menu --> */}
              <li className="relative">
                <p>Hello, Users</p>
              </li>
              {/* <!-- Profile menu --> */}
              <li className="relative">
                <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none pointer" aria-label="Users">
                  <UserCircleIcon className="object-cover w-8 h-8 rounded-full" alt="Profile Picture" />
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;

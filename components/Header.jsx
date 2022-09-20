import Image from "next/image";
import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
function Header() {
  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
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
                <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Account">
                  <UserCircleIcon
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt="Profile Picture"
                  />
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

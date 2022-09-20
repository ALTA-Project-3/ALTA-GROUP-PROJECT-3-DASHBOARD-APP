import React from "react";
import { HomeIcon, TrophyIcon, UsersIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";
import logo from "../public/img/logo-alta.png";
import Image from "next/image";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/router";

function SideBar() {
  const router = useRouter();
  const handleLogout = async () => {
    await cookie.remove("JWT");
    await router.push("/");
  };
  return (
    <>
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link href="/dashboard">
            <a className="flex justify-center py-7">
              <Image src={logo} width={160} height={80} alt="Logo"></Image>
            </a>
          </Link>
          <ul className="mt-24">
            <li className="relative px-6 py-3">
              <Link href="/dashboard">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200 ">
                  <HomeIcon className="w-5 h-5" stroke="currentColor" />
                  <span className="ml-4">Dashboard</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <Link href="/mentee">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200" href="forms.html">
                  <TrophyIcon className="w-5 h-5" />
                  <span className="ml-4">Mentee</span>
                </a>
              </Link>
            </li>
            <li className="relative px-6 py-3">
              <Link href="/users">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200" href="cards.html">
                  <UsersIcon className="w-5 h-5" />
                  <span className="ml-4">User</span>
                </a>
              </Link>
            </li>
            <li className="relative px-6 py-3">
              <Link href="/class">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200" href="charts.html">
                  <PresentationChartLineIcon className="w-5 h-5" />
                  <span className="ml-4">Class</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center pt-24">
          <button
            className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default SideBar;

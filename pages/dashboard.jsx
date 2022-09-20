import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <Header />
      </div>
    </>
  );
}

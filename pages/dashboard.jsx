import React from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const handleLogout = async () => {
    await cookie.remove("JWT");
    await router.push("/");
  };
  return (
    <>
      <div>Dashboard</div>
      <button type="buton" className="bg-slate-400" onClick={handleLogout}>
        logout
      </button>
    </>
  );
}

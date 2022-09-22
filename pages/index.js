import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import office from "../public/img/login-office-dark.jpeg";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const loginHandler = async () => {
    setEmail("");
    setPassword("");
    await axios({
      url: "https://tugas.website/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        cookie.set("token", res.data.data);
        router.push("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden  rounded-lg shadow-xl bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-56 md:h-[600px] md:w-1/2 relative">
            <Image className="object-cover w-full h-full block" src={office} alt="Office" layout="fill" />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <form className="w-full" onSubmit={(e) => submit(e)}>
              <h1 className="mb-4 text-xl font-semibold text-gray-200">Login</h1>
              <label className="block text-sm">
                <span className="text-gray-400">Email</span>
                <input
                  className="block w-full mt-1 px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-400">Password</span>
                <input
                  className="block w-full mt-1 px-4 py-2 rounded-lg text-sm border border-gray-600 bg-gray-700 focus:border-purple-400  focus:outline-none  text-gray-300 focus:shadow-outline-gray"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {error ? <small className="text-red-600">{error}</small> : null}
              <button
                type="submit"
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                onClick={loginHandler}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

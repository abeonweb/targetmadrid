"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInAdmin,  } from "@/components/utils/firebase.utils";


const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState(initialValues);
  const { email, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAdmin(email, password);
      setForm(initialValues);
      router.push("/dashboard")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-10 bg-orange-100">
      <h1 className="pt-10 text-4xl text-center mb-10 font-semibold text-orange-500">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col gap-3 max-w-2xl py-10 px-5 bg-white shadow-2xl rounded-2xl"
      >
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
          name="email"
          className="px-6 py-2 rounded-full border-2 border-orange-400 w-64 bg-orange-50 focus:bg-white"
        />
        <input
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
          name="password"
          className="px-6 py-2 rounded-full border-2 border-orange-400 w-64 bg-orange-50 focus:bg-white"
        />
        <div>
          <button
            type="submit"
            className="px-8 py-2 bg-green-400 text-white shadow-2xl rounded-xl mt-8"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    // authentication > update context/prop drill to give access to rescricted area
  );
};

export default Login;

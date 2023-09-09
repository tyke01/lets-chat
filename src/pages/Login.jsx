import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await signInWithEmailAndPassword(auth, email, password)
       
        navigate("login")

    } 
    catch (error) {
      setError(true);
    }
  };

  return (
    <div className="bg-[#a7bcff] min-h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-16 rounded-xl flex flex-col gap-3 items-center">
        <p className="text-2xl font-bold text-[#5d5b8d]">Lets chat</p>
        <p className="font-medium text-[#5d5b8d] text-sm">Login</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-4 border-b border-[#5d5b8d] outline-0"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="p-4 border-b border-[#5d5b8d] outline-0"
          />

          <button className="bg-[#7b96ec] text-white p-3 font-bold hover:opacity-90">
            Sign in
          </button>
          {error && <span>Something went wrong when signing in</span>}
        </form>

        <p className="text-[#5d5b8d] text-xs mt-3 cursor-pointer">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm">
      <h2 className="text-4xl font-medium text-teal-400 mb-10">Login</h2>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="email" className="cursor-pointer hover:text-teal-400 duration-300">Email address</label>
        <input
        className="px-5 py-2 bg-transparent border border-gray-600 outline-none focus:border-teal-400 rounded duration-300 "
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="hello@js.dev"
          value={email}
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="password" className="cursor-pointer hover:text-teal-400 duration-300">Password</label>
        <input
        className="px-5 py-2 bg-transparent border border-gray-600 outline-none focus:border-teal-400 rounded duration-300 "
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
        />
      </div>
    <button type="submit" className="bg-teal-500 text-gray-50 rounded-xl hover:bg-teal-600 duration-300 py-3 px-6 font-semibold mt-3">Log in</button>

    </form>
  );
};

export default Login;

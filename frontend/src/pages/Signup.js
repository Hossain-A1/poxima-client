import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, loading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    // sign up user
    await signup(email, password);
  };

  return (
    <form
      onSubmit={handleSignup}
      className="signup-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-teal-400 mb-10">Signup</h2>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="email"
          className="cursor-pointer hover:text-teal-400 duration-300"
        >
          Email address
        </label>
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
        <label
          htmlFor="password"
          className="cursor-pointer hover:text-teal-400 duration-300"
        >
          Password
        </label>
        <input
          className="px-5 py-2 bg-transparent border border-gray-600 outline-none focus:border-teal-400 rounded duration-300 "
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-teal-500 text-gray-50 rounded-xl hover:bg-teal-600 duration-300 py-3 px-6 font-semibold mt-3"
      >
        Sign up
      </button>

      {error && (
        <p className="bg-rose-600/10 text-rose-500 border border-rose-700 p-5 rounded-lg">
          {error}
        </p>
      )}
    </form>
  );
};

export default Signup;

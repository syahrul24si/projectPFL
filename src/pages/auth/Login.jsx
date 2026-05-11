import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";

export default function Login() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-9">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Login to your account
      </h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-50 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-50 rounded-lg px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-lime-300"
          />
          <EyeOff
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-lime-400" />
            Remember me
          </label>

          <a href="#" className="text-lime-600 font-semibold">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-lime-300 hover:bg-lime-400 transition rounded-lg py-3 text-sm font-bold text-black"
        >
          Sign in with email
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="h-px bg-gray-200 flex-1"></div>
        <span className="text-xs text-gray-400">Or login with</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="border border-gray-200 rounded-lg py-3 text-sm font-medium flex items-center justify-center gap-2">
          Google
        </button>

        <button className="border border-gray-200 rounded-lg py-3 text-sm font-medium flex items-center justify-center gap-2">
          Apple
        </button>
      </div>

      <p className="text-center text-xs text-gray-500 mt-7">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-lime-600 font-bold">
          Get Started
        </Link>
      </p>
    </div>
  );
}
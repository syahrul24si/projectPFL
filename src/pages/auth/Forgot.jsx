import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Forgot() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-9">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">
        Forgot your password?
      </h2>

      <p className="text-sm text-gray-500 mb-8 text-center leading-relaxed">
        Enter your email address and we&apos;ll send you a link to reset your
        password.
      </p>

      <form className="space-y-4">
        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full bg-gray-50 rounded-lg px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-lime-300"
            placeholder="Email"
          />

          <Mail
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lime-300 hover:bg-lime-400 transition rounded-lg py-3 text-sm font-bold text-black"
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-center text-xs text-gray-500 mt-7">
        Remember your password?{" "}
        <Link to="/login" className="text-lime-600 font-bold">
          Login Now
        </Link>
      </p>
    </div>
  );
}
import { FaTools } from "react-icons/fa";

export default function Register() {
  return (
    <div>
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-yellow-400">
          <FaTools className="text-2xl" />
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900">
          Bengkel<span className="text-yellow-400">.</span>
        </h2>

        <p className="mt-2 text-sm font-medium text-gray-500">
          Buat akun Workshop Admin
        </p>
      </div>

      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            placeholder="********"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 px-4 py-2 font-bold text-gray-900 transition duration-300 hover:bg-yellow-500"
        >
          Register
        </button>
      </form>
    </div>
  );
}
import axios from "axios";
import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="mb-5 flex items-center rounded-lg bg-red-100 p-4 text-sm font-medium text-red-700">
      <BsFillExclamationDiamondFill className="me-2 text-lg text-red-600" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="mb-5 flex items-center rounded-lg bg-gray-200 p-4 text-sm font-medium text-gray-700">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

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
          Login ke Workshop Admin Dashboard
        </p>
      </div>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="email"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            placeholder="Masukkan username"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            placeholder="********"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 px-4 py-2 font-bold text-gray-900 transition duration-300 hover:bg-yellow-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}
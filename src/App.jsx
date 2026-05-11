import "./assets/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/main/Dashboard"));
const Orders = React.lazy(() => import("./pages/main/Orders"));
const Customers = React.lazy(() => import("./pages/main/Customers"));
const Mechanics = React.lazy(() => import("./pages/main/Mechanics"));
const MechanicDetail = React.lazy(() => import("./pages/main/MechanicDetail"));
const Spareparts = React.lazy(() => import("./pages/main/Spareparts"));
const SparepartDetail = React.lazy(() => import("./pages/main/SparepartDetail"));

const NotFound = React.lazy(() => import("./pages/main/NotFound"));
const Error400 = React.lazy(() => import("./pages/main/Error400"));
const Error401 = React.lazy(() => import("./pages/main/Error401"));
const Error403 = React.lazy(() => import("./pages/main/Error403"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const Loading = React.lazy(() => import("./components/Loading"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/mechanics" element={<Mechanics />} />
          <Route path="/mechanics/:id" element={<MechanicDetail />} />

          <Route path="/spareparts" element={<Spareparts />} />
          <Route path="/spareparts/:id" element={<SparepartDetail />} />

          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
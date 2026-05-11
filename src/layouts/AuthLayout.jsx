import { Outlet } from "react-router-dom";
import { Wrench } from "lucide-react";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-lime-300 flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-3 w-20 h-16 flex items-center justify-center">
          <Wrench size={58} className="text-black" strokeWidth={3.5} />
        </div>

        <h1 className="text-xl font-extrabold text-black">
          Bengkel<span className="font-black">Ku</span>
        </h1>
      </div>

      <Outlet />
    </div>
  );
}
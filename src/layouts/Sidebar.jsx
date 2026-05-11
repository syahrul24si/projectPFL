import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Wrench,
  LogOut,
} from "lucide-react";

const menus = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Mekanik", path: "/mechanics", icon: Users },
  { name: "Sparepart", path: "/spareparts", icon: Package },
  { name: "Pelanggan", path: "/customers", icon: Users },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-100 px-5 py-6">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-11 h-11 rounded-2xl bg-lime-300 flex items-center justify-center">
          <Wrench className="text-lime-700" size={28} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-lime-700 leading-none">
            BENGKEL
          </h1>
          <p className="text-sm text-gray-500">Management System</p>
        </div>
      </div>

      <nav className="space-y-3">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-xl text-sm font-semibold transition ${
                  isActive
                    ? "bg-lime-300 text-gray-950 shadow-sm"
                    : "text-gray-500 hover:bg-lime-50 hover:text-lime-700"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-5 right-5 border-t border-gray-100 pt-5">
        <button className="flex items-center gap-4 text-gray-500 font-semibold hover:text-red-500 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
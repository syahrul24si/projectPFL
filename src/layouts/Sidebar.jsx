import { NavLink } from "react-router-dom";
import { MdSpaceDashboard, MdErrorOutline, MdInventory } from "react-icons/md";
import { FaTools, FaCar, FaUserCog } from "react-icons/fa";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 ${
      isActive
        ? "bg-yellow-400 text-gray-900 font-extrabold"
        : "text-gray-300 hover:bg-yellow-400 hover:text-gray-900 hover:font-extrabold"
    }`;

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 p-4 shadow-md">
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-white">
          Bengkel<span className="text-yellow-400">.</span>
        </h1>
        <p className="mt-2 text-sm text-gray-400">Workshop Admin Dashboard</p>
      </div>

      <ul className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdSpaceDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <FaTools className="mr-4 text-xl" />
            Service
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <FaCar className="mr-4 text-xl" />
            Kendaraan
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-4" to="/mechanics" className={menuClass}>
            <FaUserCog className="mr-4 text-xl" />
            Mekanik
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-5" to="/spareparts" className={menuClass}>
            <MdInventory className="mr-4 text-xl" />
            Sparepart
          </NavLink>
        </li>

        <li className="pt-4 text-xs font-bold uppercase tracking-wider text-gray-500">
          Error Pages
        </li>

        <li>
          <NavLink id="menu-6" to="/error-400" className={menuClass}>
            <MdErrorOutline className="mr-4 text-xl" />
            Error 400
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-7" to="/error-401" className={menuClass}>
            <MdErrorOutline className="mr-4 text-xl" />
            Error 401
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-8" to="/error-403" className={menuClass}>
            <MdErrorOutline className="mr-4 text-xl" />
            Error 403
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
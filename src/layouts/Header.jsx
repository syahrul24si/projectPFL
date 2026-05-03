import { FaBell, FaSearch, FaUserCog } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div
      id="header-container"
      className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-4"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative w-full max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Cari data service..."
          className="w-full max-w-lg rounded-md border border-gray-300 bg-white p-2 pr-10 outline-none focus:border-yellow-400"
        />
        <FaSearch
          id="search-icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
        />
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        <div
          id="notification-icon"
          className="relative cursor-pointer rounded-2xl bg-yellow-100 p-3 text-yellow-600"
        >
          <FaBell />
          <span
            id="notification-badge"
            className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-gray-900"
          >
            50
          </span>
        </div>

        <div
          id="chart-icon"
          className="cursor-pointer rounded-2xl bg-gray-200 p-3"
        >
          <FcAreaChart />
        </div>

        <div
          id="settings-icon"
          className="cursor-pointer rounded-2xl bg-red-100 p-3 text-red-500"
        >
          <SlSettings />
        </div>

        <div
          id="profile-container"
          className="flex items-center space-x-4 border-l border-gray-300 pl-4"
        >
          <span id="profile-text">
            Halo, <b>Syahrul Ramadhan</b>
          </span>

          <div
            id="profile-avatar"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-yellow-400 bg-gray-900 text-yellow-400"
          >
            <FaUserCog className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
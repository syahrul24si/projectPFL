import { Bell, Mail, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 ml-64 h-20 bg-white/90 backdrop-blur border-b border-gray-100 px-8 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-950">Hi, Admin Bengkel</h2>
        <p className="text-sm text-gray-500">Let's check your Garage today</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-[420px] h-12 rounded-xl bg-gray-100 flex items-center px-4 gap-3">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <Mail size={22} className="text-gray-700" />
        <Bell size={22} className="text-gray-700" />

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="profile"
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-sm text-gray-950">Admin Bengkel</h3>
            <p className="text-xs text-gray-500">Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
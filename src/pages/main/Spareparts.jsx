import { Link } from "react-router-dom";
import {
  MoreHorizontal,
  Search,
  Filter,
  FileDown,
  Package,
} from "lucide-react";

const spareparts = [
  {
    id: 1,
    nama: "Oli Mesin",
    kategori: "Engine",
    stok: 120,
    harga: "Rp 85.000",
    status: "Ready",
  },
  {
    id: 2,
    nama: "Kampas Rem",
    kategori: "Brake System",
    stok: 75,
    harga: "Rp 150.000",
    status: "Ready",
  },
  {
    id: 3,
    nama: "Aki Motor",
    kategori: "Electrical",
    stok: 24,
    harga: "Rp 320.000",
    status: "Low Stock",
  },
  {
    id: 4,
    nama: "Busi",
    kategori: "Ignition",
    stok: 180,
    harga: "Rp 35.000",
    status: "Ready",
  },
];

export default function Spareparts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <select className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600">
          <option>Semua Sparepart</option>
        </select>

        <div className="flex gap-3">
          <button className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
            <FileDown size={16} />
            Import
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 w-full max-w-md">
            <Search size={18} className="text-gray-400" />
            <input
              className="bg-transparent outline-none text-sm w-full"
              placeholder="Cari nama sparepart atau kategori..."
            />
          </div>

          <button className="ml-4 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-100">
              <th className="py-4 w-10">
                <input type="checkbox" />
              </th>
              <th>ID Sparepart</th>
              <th>Nama Sparepart</th>
              <th>Kategori</th>
              <th>Stok</th>
              <th>Harga</th>
              <th>Status</th>
              <th className="text-right">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {spareparts.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-lime-50/40 transition"
              >
                <td className="py-5">
                  <input type="checkbox" />
                </td>

                <td className="font-semibold text-gray-700">
                  SP-{String(item.id).padStart(3, "0")}
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-lime-100 flex items-center justify-center">
                      <Package size={22} className="text-lime-600" />
                    </div>

                    <span className="font-semibold text-gray-800">
                      {item.nama}
                    </span>
                  </div>
                </td>

                <td>{item.kategori}</td>
                <td>{item.stok} pcs</td>
                <td>{item.harga}</td>

                <td>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      item.status === "Ready"
                        ? "bg-lime-100 text-lime-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="text-right">
                  <Link
                    to={`/spareparts/${item.id}`}
                    className="p-2 hover:bg-gray-100 rounded-lg inline-flex"
                  >
                    <MoreHorizontal size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
          <p>Show result: 4</p>

          <div className="flex items-center gap-3">
            <button className="px-3 py-1 rounded-lg bg-black text-white">
              1
            </button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
          </div>
        </div>
      </div>
    </div>
  );
}
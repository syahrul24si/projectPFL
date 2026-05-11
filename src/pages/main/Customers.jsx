import {
  MoreHorizontal,
  Search,
  Filter,
  FileDown,
  UserCircle,
} from "lucide-react";

const customers = [
  {
    id: 1,
    nama: "Budi Santoso",
    alamat: "Bandung",
    telepon: "0812-3456-7890",
    kendaraan: "Honda Beat",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Rudi Hermawan",
    alamat: "Jakarta",
    telepon: "0821-9876-5432",
    kendaraan: "Yamaha NMAX",
    status: "Aktif",
  },
  {
    id: 3,
    nama: "Siti Nurhaliza",
    alamat: "Surabaya",
    telepon: "0857-2222-1111",
    kendaraan: "Toyota Avanza",
    status: "Nonaktif",
  },
  {
    id: 4,
    nama: "Ahmad Fauzi",
    alamat: "Medan",
    telepon: "0813-5555-7777",
    kendaraan: "Suzuki Ertiga",
    status: "Aktif",
  },
];

export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <select className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600">
          <option>Semua Pelanggan</option>
        </select>

        <button className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
          <FileDown size={16} />
          Import
        </button>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 w-full max-w-md">
            <Search size={18} className="text-gray-400" />
            <input
              className="bg-transparent outline-none text-sm w-full"
              placeholder="Cari nama pelanggan atau kendaraan..."
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
              <th>ID Pelanggan</th>
              <th>Nama Pelanggan</th>
              <th>Alamat</th>
              <th>No Telepon</th>
              <th>Kendaraan</th>
              <th>Status</th>
              <th className="text-right">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-lime-50/40 transition"
              >
                <td className="py-5">
                  <input type="checkbox" />
                </td>

                <td className="font-semibold text-gray-700">
                  PL-{String(item.id).padStart(3, "0")}
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-lime-100 flex items-center justify-center">
                      <UserCircle size={24} className="text-lime-600" />
                    </div>

                    <span className="font-semibold text-gray-800">
                      {item.nama}
                    </span>
                  </div>
                </td>

                <td>{item.alamat}</td>
                <td>{item.telepon}</td>
                <td>{item.kendaraan}</td>

                <td>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      item.status === "Aktif"
                        ? "bg-lime-100 text-lime-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="text-right">
                  <button className="p-2 hover:bg-gray-100 rounded-lg inline-flex">
                    <MoreHorizontal size={20} />
                  </button>
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
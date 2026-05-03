import PageHeader from "../../components/PageHeader";
import { MdInventory } from "react-icons/md";

export default function Spareparts() {
  const spareparts = [
    {
      id: "SPR001",
      name: "Oli Mesin",
      category: "Perawatan",
      stock: 25,
      price: 85000,
      status: "Tersedia",
    },
    {
      id: "SPR002",
      name: "Busi",
      category: "Mesin",
      stock: 40,
      price: 35000,
      status: "Tersedia",
    },
    {
      id: "SPR003",
      name: "Kampas Rem",
      category: "Rem",
      stock: 12,
      price: 120000,
      status: "Menipis",
    },
    {
      id: "SPR004",
      name: "Aki Mobil",
      category: "Kelistrikan",
      stock: 6,
      price: 650000,
      status: "Menipis",
    },
    {
      id: "SPR005",
      name: "Filter Udara",
      category: "Mesin",
      stock: 0,
      price: 75000,
      status: "Habis",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Data Sparepart"
        breadcrumb={["Dashboard", "Sparepart"]}
      />

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-md">
          <p className="text-sm text-gray-500">Total Sparepart</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">5</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <p className="text-sm text-gray-500">Stok Tersedia</p>
          <h3 className="mt-2 text-3xl font-bold text-green-600">2</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <p className="text-sm text-gray-500">Stok Menipis/Habis</p>
          <h3 className="mt-2 text-3xl font-bold text-yellow-500">3</h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="flex items-center justify-between border-b bg-gray-900 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              Daftar Sparepart Bengkel
            </h2>
            <p className="text-sm text-gray-300">
              Data stok dan harga sparepart kendaraan
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
            <MdInventory className="text-xl" />
          </div>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="px-4 py-2">ID Sparepart</th>
                <th className="px-4 py-2">Nama Sparepart</th>
                <th className="px-4 py-2">Kategori</th>
                <th className="px-4 py-2">Stok</th>
                <th className="px-4 py-2">Harga</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {spareparts.map((item) => (
                <tr
                  key={item.id}
                  className="rounded-xl bg-gray-50 shadow-sm transition duration-300 hover:bg-yellow-50 hover:shadow-md"
                >
                  <td className="rounded-l-xl px-4 py-4 font-bold text-gray-900">
                    {item.id}
                  </td>

                  <td className="px-4 py-4 text-gray-700">{item.name}</td>

                  <td className="px-4 py-4 text-gray-600">
                    {item.category}
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-900">
                    {item.stock}
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-900">
                    Rp {Number(item.price).toLocaleString("id-ID")}
                  </td>

                  <td className="rounded-r-xl px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        item.status === "Tersedia"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Menipis"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
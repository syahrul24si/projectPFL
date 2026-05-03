import PageHeader from "../../components/PageHeader";
import { FaTools, FaCar, FaUserCog } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

export default function Dashboard() {
  const summary = [
    {
      title: "Total Service",
      value: 75,
      icon: <FaTools />,
      color: "bg-yellow-400",
    },
    {
      title: "Total Kendaraan",
      value: 120,
      icon: <FaCar />,
      color: "bg-gray-800",
    },
    {
      title: "Total Mekanik",
      value: 5,
      icon: <FaUserCog />,
      color: "bg-blue-500",
    },
    {
      title: "Total Sparepart",
      value: 25,
      icon: <MdInventory />,
      color: "bg-green-500",
    },
  ];

  const spareparts = [
    { id: "SPR001", name: "Oli Mesin", stock: 25, price: 85000 },
    { id: "SPR002", name: "Busi", stock: 40, price: 35000 },
    { id: "SPR003", name: "Kampas Rem", stock: 12, price: 120000 },
    { id: "SPR004", name: "Aki Mobil", stock: 6, price: 650000 },
    { id: "SPR005", name: "Filter Udara", stock: 0, price: 75000 },
  ];

  return (
    <div>
      <PageHeader
        title="Dashboard Bengkel"
        breadcrumb={["Dashboard", "Overview"]}
      />

      {/* 🔥 SUMMARY CARDS */}
      <div className="grid gap-4 p-5 sm:grid-cols-2 md:grid-cols-4">
        {summary.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-white text-2xl ${item.color}`}
            >
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 SPAREPART TABLE */}
      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="flex items-center justify-between border-b bg-gray-900 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              Ringkasan Sparepart
            </h2>
            <p className="text-sm text-gray-300">
              Data stok sparepart terbaru
            </p>
          </div>

          <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-gray-900">
            {spareparts.length} Item
          </span>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nama Sparepart</th>
                <th className="px-4 py-2">Stok</th>
                <th className="px-4 py-2">Harga</th>
              </tr>
            </thead>

            <tbody>
              {spareparts.map((item) => (
                <tr
                  key={item.id}
                  className="rounded-xl bg-gray-50 shadow-sm transition hover:bg-yellow-50 hover:shadow-md"
                >
                  <td className="rounded-l-xl px-4 py-4 font-bold text-gray-900">
                    {item.id}
                  </td>

                  <td className="px-4 py-4 text-gray-700">
                    {item.name}
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-900">
                    {item.stock}
                  </td>

                  <td className="rounded-r-xl px-4 py-4 font-semibold text-gray-900">
                    Rp {item.price.toLocaleString("id-ID")}
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
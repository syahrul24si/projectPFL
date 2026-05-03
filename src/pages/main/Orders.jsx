import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ordersData from "../../data/orders";

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    status: "Menunggu",
    totalPrice: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrders([
      ...orders,
      {
        ...formData,
        totalPrice: Number(formData.totalPrice),
      },
    ]);

    setFormData({
      orderId: "",
      customerName: "",
      status: "Menunggu",
      totalPrice: "",
      orderDate: "",
    });

    setShowForm(false);
  };

  return (
    <div>
      <PageHeader
        title="Service Bengkel"
        breadcrumb={["Dashboard", "Daftar Service"]}
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-gray-900 hover:bg-yellow-500"
        >
          Tambah Service
        </button>
      </PageHeader>

      {showForm && (
        <div className="mb-6 rounded-xl bg-white p-6 shadow-md">
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium">Service ID</label>
              <input
                type="text"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Nama Pelanggan</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Status Service</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
              >
                <option value="Menunggu">Menunggu</option>
                <option value="Diproses">Diproses</option>
                <option value="Selesai">Selesai</option>
                <option value="Dibatalkan">Dibatalkan</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block font-medium">Biaya Service</label>
              <input
                type="number"
                name="totalPrice"
                value={formData.totalPrice}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Tanggal Service</label>
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="rounded-xl bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800"
              >
                Simpan Service
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="flex items-center justify-between border-b bg-gray-900 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              Daftar Service Bengkel
            </h2>
            <p className="text-sm text-gray-300">
              Data service kendaraan pelanggan
            </p>
          </div>

          <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-gray-900">
            {orders.length} Data
          </span>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="px-4 py-2">Service ID</th>
                <th className="px-4 py-2">Nama Pelanggan</th>
                <th className="px-4 py-2">Status Service</th>
                <th className="px-4 py-2">Biaya Service</th>
                <th className="px-4 py-2">Tanggal Service</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.orderId}
                  className="rounded-xl bg-gray-50 shadow-sm transition duration-300 hover:bg-yellow-50 hover:shadow-md"
                >
                  <td className="rounded-l-xl px-4 py-4 font-bold text-gray-900">
                    {order.orderId}
                  </td>

                  <td className="px-4 py-4 text-gray-700">
                    {order.customerName}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        order.status === "Selesai" ||
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Dibatalkan" ||
                              order.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : order.status === "Diproses"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-900">
                    Rp {Number(order.totalPrice).toLocaleString("id-ID")}
                  </td>

                  <td className="rounded-r-xl px-4 py-4 text-gray-500">
                    {order.orderDate}
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
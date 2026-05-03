import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import customersData from "../../data/customers";

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Motor",
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

    setCustomers([...customers, formData]);

    setFormData({
      customerId: "",
      customerName: "",
      email: "",
      phone: "",
      loyalty: "Motor",
    });

    setShowForm(false);
  };

  return (
    <div>
      <PageHeader
        title="Data Kendaraan"
        breadcrumb={["Dashboard", "Data Kendaraan"]}
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-gray-900 hover:bg-yellow-500"
        >
          Tambah Kendaraan
        </button>
      </PageHeader>

      {showForm && (
        <div className="mb-6 rounded-xl bg-white p-6 shadow-md">
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium">ID Kendaraan</label>
              <input
                type="text"
                name="customerId"
                value={formData.customerId}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Nama Pemilik</label>
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
              <label className="mb-1 block font-medium">Email Pemilik</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">No. Telepon</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Jenis Kendaraan</label>
              <select
                name="loyalty"
                value={formData.loyalty}
                onChange={handleChange}
                className="w-full rounded-lg border p-2 focus:border-yellow-400 focus:outline-none"
              >
                <option value="Motor">Motor</option>
                <option value="Mobil">Mobil</option>
                <option value="Truk">Truk</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="rounded-xl bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800"
              >
                Simpan Kendaraan
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="flex items-center justify-between border-b bg-gray-900 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              Daftar Kendaraan Pelanggan
            </h2>
            <p className="text-sm text-gray-300">
              Data kendaraan yang terdaftar di bengkel
            </p>
          </div>

          <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-gray-900">
            {customers.length} Data
          </span>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="px-4 py-2">ID Kendaraan</th>
                <th className="px-4 py-2">Nama Pemilik</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">No. Telepon</th>
                <th className="px-4 py-2">Jenis Kendaraan</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.customerId}
                  className="rounded-xl bg-gray-50 shadow-sm transition duration-300 hover:bg-yellow-50 hover:shadow-md"
                >
                  <td className="rounded-l-xl px-4 py-4 font-bold text-gray-900">
                    {customer.customerId}
                  </td>

                  <td className="px-4 py-4 text-gray-700">
                    {customer.customerName}
                  </td>

                  <td className="px-4 py-4 text-gray-600">
                    {customer.email}
                  </td>

                  <td className="px-4 py-4 text-gray-600">
                    {customer.phone}
                  </td>

                  <td className="rounded-r-xl px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        customer.loyalty === "Mobil"
                          ? "bg-blue-100 text-blue-700"
                          : customer.loyalty === "Truk"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {customer.loyalty}
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
import PageHeader from "../../components/PageHeader";
import { FaUserCog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Mechanics() {
  const mechanics = [
    {
      id: "MK001",
      name: "Rudi Hartono",
      specialist: "Mesin",
      phone: "081234567811",
      status: "Aktif",
    },
    {
      id: "MK002",
      name: "Agus Pratama",
      specialist: "Kelistrikan",
      phone: "081234567812",
      status: "Aktif",
    },
    {
      id: "MK003",
      name: "Doni Saputra",
      specialist: "Kaki-kaki",
      phone: "081234567813",
      status: "Libur",
    },
    {
      id: "MK004",
      name: "Fajar Maulana",
      specialist: "AC Mobil",
      phone: "081234567814",
      status: "Aktif",
    },
    {
      id: "MK005",
      name: "Rizky Ramadhan",
      specialist: "Body Repair",
      phone: "081234567815",
      status: "Sibuk",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Data Mekanik"
        breadcrumb={["Dashboard", "Mekanik"]}
      />

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-md">
          <p className="text-sm text-gray-500">Total Mekanik</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">5</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <p className="text-sm text-gray-500">Mekanik Aktif</p>
          <h3 className="mt-2 text-3xl font-bold text-green-600">3</h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <p className="text-sm text-gray-500">Spesialis Service</p>
          <h3 className="mt-2 text-3xl font-bold text-yellow-500">5</h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="flex items-center justify-between border-b bg-gray-900 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-white">
              Daftar Mekanik Bengkel
            </h2>
            <p className="text-sm text-gray-300">
              Data mekanik dan spesialis pengerjaan service
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
            <FaUserCog className="text-xl" />
          </div>
        </div>

        <div className="overflow-x-auto p-4">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="px-4 py-2">ID Mekanik</th>
                <th className="px-4 py-2">Nama Mekanik</th>
                <th className="px-4 py-2">Spesialis</th>
                <th className="px-4 py-2">No. Telepon</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {mechanics.map((mechanic) => (
                <tr
                  key={mechanic.id}
                  className="rounded-xl bg-gray-50 shadow-sm transition duration-300 hover:bg-yellow-50 hover:shadow-md"
                >
                  <td className="rounded-l-xl px-4 py-4 font-bold text-gray-900">
                    {mechanic.id}
                  </td>

                  <td className="px-4 py-4 text-gray-700">
                    {mechanic.name}
                  </td>

                  <td className="px-4 py-4 text-gray-600">
                    {mechanic.specialist}
                  </td>

                  <td className="px-4 py-4 text-gray-600">
                    {mechanic.phone}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${mechanic.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : mechanic.status === "Sibuk"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {mechanic.status}
                    </span>
                  </td>

                  <td className="rounded-r-xl px-4 py-4">
                    <Link
                      to={`/mechanics/${mechanic.id}`}
                      className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-gray-900"
                    >
                      Detail
                    </Link>
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
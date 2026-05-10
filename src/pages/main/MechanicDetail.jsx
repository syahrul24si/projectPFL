import { Link, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { FaUserCog, FaPhoneAlt, FaTools, FaArrowLeft } from "react-icons/fa";

export default function MechanicDetail() {
  const { id } = useParams();

  const mechanics = [
    {
      id: "MK001",
      name: "Rudi Hartono",
      specialist: "Mesin",
      phone: "081234567811",
      status: "Aktif",
      experience: "5 Tahun",
      address: "Jl. Melati No. 12, Pekanbaru",
    },
    {
      id: "MK002",
      name: "Agus Pratama",
      specialist: "Kelistrikan",
      phone: "081234567812",
      status: "Aktif",
      experience: "4 Tahun",
      address: "Jl. Sudirman No. 20, Pekanbaru",
    },
    {
      id: "MK003",
      name: "Doni Saputra",
      specialist: "Kaki-kaki",
      phone: "081234567813",
      status: "Libur",
      experience: "6 Tahun",
      address: "Jl. Garuda Sakti No. 8, Pekanbaru",
    },
    {
      id: "MK004",
      name: "Fajar Maulana",
      specialist: "AC Mobil",
      phone: "081234567814",
      status: "Aktif",
      experience: "3 Tahun",
      address: "Jl. HR Soebrantas No. 15, Pekanbaru",
    },
    {
      id: "MK005",
      name: "Rizky Ramadhan",
      specialist: "Body Repair",
      phone: "081234567815",
      status: "Sibuk",
      experience: "7 Tahun",
      address: "Jl. Riau No. 30, Pekanbaru",
    },
  ];

  const mechanic = mechanics.find((item) => item.id === id);

  if (!mechanic) {
    return (
      <div>
        <PageHeader
          title="Detail Mekanik"
          breadcrumb={["Dashboard", "Mekanik", "Detail"]}
        />

        <div className="rounded-2xl bg-white p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">
            Data mekanik tidak ditemukan
          </h2>

          <Link
            to="/mechanics"
            className="mt-5 inline-block rounded-lg bg-gray-900 px-5 py-2 text-white hover:bg-yellow-500 hover:text-gray-900"
          >
            Kembali
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Detail Mekanik"
        breadcrumb={["Dashboard", "Mekanik", mechanic.name]}
      />

      <Link
        to="/mechanics"
        className="mb-5 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-gray-900"
      >
        <FaArrowLeft />
        Kembali
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-md">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
            <FaUserCog className="text-4xl" />
          </div>

          <h2 className="text-2xl font-bold">{mechanic.name}</h2>
          <p className="mt-1 text-gray-300">{mechanic.id}</p>

          <span
            className={`mt-5 inline-block rounded-full px-4 py-2 text-sm font-bold ${
              mechanic.status === "Aktif"
                ? "bg-green-100 text-green-700"
                : mechanic.status === "Sibuk"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {mechanic.status}
          </span>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
          <h3 className="mb-5 text-xl font-bold text-gray-900">
            Informasi Mekanik
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-gray-500">
                <FaTools />
                <span>Spesialis</span>
              </div>
              <p className="font-bold text-gray-900">{mechanic.specialist}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-gray-500">
                <FaPhoneAlt />
                <span>No. Telepon</span>
              </div>
              <p className="font-bold text-gray-900">{mechanic.phone}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="mb-2 text-gray-500">Pengalaman</p>
              <p className="font-bold text-gray-900">
                {mechanic.experience}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="mb-2 text-gray-500">Alamat</p>
              <p className="font-bold text-gray-900">{mechanic.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const mechanics = [
  {
    id: 1,
    nama: "Andi Pratama",
    telepon: "0812-3456-7890",
    spesialis: "Mesin",
    pengalaman: "5 Tahun",
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Deni Saputra",
    telepon: "0821-9876-5432",
    spesialis: "Kelistrikan",
    pengalaman: "4 Tahun",
    status: "Aktif",
  },
  {
    id: 3,
    nama: "Rizky Maulana",
    telepon: "0857-2222-1111",
    spesialis: "Body Repair",
    pengalaman: "3 Tahun",
    status: "Cuti",
  },
  {
    id: 4,
    nama: "Fajar Nugroho",
    telepon: "0813-5555-7777",
    spesialis: "General Service",
    pengalaman: "6 Tahun",
    status: "Aktif",
  },
];

export default function MechanicDetail() {
  const { id } = useParams();

  const mechanic = mechanics.find((item) => item.id === Number(id));

  if (!mechanic) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">
          Data mekanik tidak ditemukan
        </h2>

        <Link
          to="/mechanics"
          className="inline-flex items-center gap-2 mt-5 text-lime-600 font-semibold"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <Link
        to="/mechanics"
        className="inline-flex items-center gap-2 mb-6 text-sm text-gray-500 hover:text-lime-600"
      >
        <ArrowLeft size={18} />
        Kembali ke data mekanik
      </Link>

      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-950 mb-3">
          {mechanic.nama}
        </h2>

        <p className="text-sm text-gray-800">ID Mekanik: MK-{String(mechanic.id).padStart(3, "0")}</p>
        <p className="text-sm text-gray-800">Phone: {mechanic.telepon}</p>
        <p className="text-sm text-gray-800">Spesialis: {mechanic.spesialis}</p>
        <p className="text-sm text-gray-800">Pengalaman: {mechanic.pengalaman}</p>
        <p className="text-sm text-gray-800">Status: {mechanic.status}</p>
      </div>
    </div>
  );
}
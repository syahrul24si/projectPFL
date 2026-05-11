import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

export default function SparepartDetail() {
  const { id } = useParams();

  const sparepart = spareparts.find((item) => item.id === Number(id));

  if (!sparepart) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">
          Data sparepart tidak ditemukan
        </h2>

        <Link
          to="/spareparts"
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
        to="/spareparts"
        className="inline-flex items-center gap-2 mb-6 text-sm text-gray-500 hover:text-lime-600"
      >
        <ArrowLeft size={18} />
        Kembali ke data sparepart
      </Link>

      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-950 mb-3">
          {sparepart.nama}
        </h2>

        <p className="text-sm text-gray-800">ID Sparepart: SP-{String(sparepart.id).padStart(3, "0")}</p>
        <p className="text-sm text-gray-800">Kategori: {sparepart.kategori}</p>
        <p className="text-sm text-gray-800">Stok: {sparepart.stok} pcs</p>
        <p className="text-sm text-gray-800">Harga: {sparepart.harga}</p>
        <p className="text-sm text-gray-800">Status: {sparepart.status}</p>
      </div>
    </div>
  );
}
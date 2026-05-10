import { Link, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import {
  MdInventory,
  MdCategory,
  MdAttachMoney,
  MdWarehouse,
} from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

export default function SparepartDetail() {
  const { id } = useParams();

  const spareparts = [
    {
      id: "SPR001",
      name: "Oli Mesin",
      category: "Perawatan",
      stock: 25,
      price: 85000,
      status: "Tersedia",
      supplier: "PT Pelumas Nusantara",
      location: "Rak A1",
    },
    {
      id: "SPR002",
      name: "Busi",
      category: "Mesin",
      stock: 40,
      price: 35000,
      status: "Tersedia",
      supplier: "CV Sumber Motor",
      location: "Rak B2",
    },
    {
      id: "SPR003",
      name: "Kampas Rem",
      category: "Rem",
      stock: 12,
      price: 120000,
      status: "Menipis",
      supplier: "PT Aman Remindo",
      location: "Rak C1",
    },
    {
      id: "SPR004",
      name: "Aki Mobil",
      category: "Kelistrikan",
      stock: 6,
      price: 650000,
      status: "Menipis",
      supplier: "CV Energi Otomotif",
      location: "Rak D3",
    },
    {
      id: "SPR005",
      name: "Filter Udara",
      category: "Mesin",
      stock: 0,
      price: 75000,
      status: "Habis",
      supplier: "PT Filter Jaya",
      location: "Rak B4",
    },
  ];

  const sparepart = spareparts.find((item) => item.id === id);

  if (!sparepart) {
    return (
      <div>
        <PageHeader
          title="Detail Sparepart"
          breadcrumb={["Dashboard", "Sparepart", "Detail"]}
        />

        <div className="rounded-2xl bg-white p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">
            Data sparepart tidak ditemukan
          </h2>

          <Link
            to="/spareparts"
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
        title="Detail Sparepart"
        breadcrumb={["Dashboard", "Sparepart", sparepart.name]}
      />

      <Link
        to="/spareparts"
        className="mb-5 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-gray-900"
      >
        <FaArrowLeft />
        Kembali
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-md">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
            <MdInventory className="text-4xl" />
          </div>

          <h2 className="text-2xl font-bold">{sparepart.name}</h2>
          <p className="mt-1 text-gray-300">{sparepart.id}</p>

          <span
            className={`mt-5 inline-block rounded-full px-4 py-2 text-sm font-bold ${
              sparepart.status === "Tersedia"
                ? "bg-green-100 text-green-700"
                : sparepart.status === "Menipis"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {sparepart.status}
          </span>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
          <h3 className="mb-5 text-xl font-bold text-gray-900">
            Informasi Sparepart
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-gray-500">
                <MdCategory />
                <span>Kategori</span>
              </div>
              <p className="font-bold text-gray-900">{sparepart.category}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-gray-500">
                <MdWarehouse />
                <span>Stok</span>
              </div>
              <p className="font-bold text-gray-900">{sparepart.stock} pcs</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-gray-500">
                <MdAttachMoney />
                <span>Harga</span>
              </div>
              <p className="font-bold text-gray-900">
                Rp {Number(sparepart.price).toLocaleString("id-ID")}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="mb-2 text-gray-500">Supplier</p>
              <p className="font-bold text-gray-900">{sparepart.supplier}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 md:col-span-2">
              <p className="mb-2 text-gray-500">Lokasi Penyimpanan</p>
              <p className="font-bold text-gray-900">{sparepart.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
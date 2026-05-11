import {
  DollarSign,
  ShoppingCart,
  ShieldCheck,
  MoreVertical,
  Calendar,
  Wrench,
} from "lucide-react";

const stats = [
  {
    title: "Pendapatan Baru",
    value: "Rp 8.245.000",
    desc: "0.5% dari minggu lalu",
    icon: DollarSign,
  },
  {
    title: "Total Booking",
    value: "256",
    desc: "1.0% dari minggu lalu",
    icon: ShoppingCart,
  },
  {
    title: "Issue Selesai",
    value: "1.256",
    desc: "1.0% dari minggu lalu",
    icon: ShieldCheck,
  },
];

const orders = [
  {
    no: "01",
    name: "Budi Santoso",
    code: "#SO-2024-0012",
    date: "24 Mei 2024",
    time: "09:20",
    status: "Selesai",
    total: "Rp 650.000",
    mechanic: "Andi Pratama",
  },
  {
    no: "02",
    name: "Rudi Hermawan",
    code: "#SO-2024-0011",
    date: "24 Mei 2024",
    time: "08:45",
    status: "Proses",
    total: "Rp 350.000",
    mechanic: "Deni Saputra",
  },
  {
    no: "03",
    name: "Ahmad Fauzi",
    code: "#SO-2024-0010",
    date: "24 Mei 2024",
    time: "08:10",
    status: "Menunggu",
    total: "Rp 245.000",
    mechanic: "Rizky Maulana",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 shadow-sm flex justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center">
                    <Icon className="text-lime-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>

                <h2 className="text-3xl font-bold text-gray-950">
                  {item.value}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="text-lime-600 font-bold">↗ </span>
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-col justify-between items-end">
                <MoreVertical size={20} className="text-gray-400" />
                <div className="flex items-end gap-2">
                  <span className="w-4 h-10 rounded bg-gray-900"></span>
                  <span className="w-4 h-7 rounded bg-lime-400"></span>
                  <span className="w-4 h-12 rounded bg-gray-900"></span>
                  <span className="w-4 h-9 rounded bg-gray-900"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl p-7 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-950">
                Total Penjualan
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <h2 className="text-3xl font-bold">Rp 56.345.980</h2>
                <span className="bg-lime-500 text-white text-xs px-3 py-1 rounded-full">
                  ↗ 23.5%
                </span>
              </div>
            </div>

            <button className="flex items-center gap-2 border px-4 py-3 rounded-xl text-sm">
              7 Hari Terakhir <Calendar size={16} />
            </button>
          </div>

          <div className="h-64 flex items-end gap-5 border-b border-gray-100 pb-4">
            {[40, 58, 45, 60, 52, 35, 42].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full h-52 flex items-end justify-center">
                  <div
                    className="w-10 rounded-t-xl bg-lime-300"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-3">{18 + index} Mei</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-sm">
          <div className="flex justify-between mb-8">
            <h3 className="text-xl font-bold">Laporan Penjualan</h3>
            <button className="text-sm border px-3 py-2 rounded-xl">
              Bulan Ini
            </button>
          </div>

          <div className="w-48 h-48 mx-auto rounded-full border-[28px] border-lime-400 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
              <Wrench className="text-lime-600" size={34} />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 text-sm text-gray-500">
            <span>● Sparepart</span>
            <span>● Jasa</span>
            <span>● Lainnya</span>
          </div>

          <button className="w-full mt-8 bg-lime-500 text-white py-4 rounded-xl font-semibold">
            Lihat Laporan Lengkap
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl p-7 shadow-sm">
          <div className="flex justify-between mb-6">
            <h3 className="text-xl font-bold">Order Terbaru</h3>
            <MoreVertical className="text-gray-400" />
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-4">No</th>
                <th>Pelanggan</th>
                <th>Tanggal Order</th>
                <th>Status</th>
                <th>Total</th>
                <th>Mekanik</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.no} className="border-b last:border-none">
                  <td className="py-5 text-gray-500">{order.no}</td>
                  <td>
                    <p className="font-bold">{order.name}</p>
                    <p className="text-xs text-gray-400">{order.code}</p>
                  </td>
                  <td>
                    <p className="font-semibold">{order.date}</p>
                    <p className="text-xs text-gray-400">{order.time}</p>
                  </td>
                  <td>
                    <span className="bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-xs font-semibold">
                      {order.status}
                    </span>
                  </td>
                  <td className="font-bold">{order.total}</td>
                  <td>{order.mechanic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-sm">
          <div className="flex justify-between mb-8">
            <h3 className="text-xl font-bold">Ringkasan Transaksi</h3>
            <button className="text-sm border px-3 py-2 rounded-xl">
              7 Hari
            </button>
          </div>

          <div className="h-56 flex items-end gap-5">
            {[45, 60, 35, 40, 62, 50, 44].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-4 rounded-t-lg bg-lime-400"
                  style={{ height: `${height}%` }}
                ></div>
                <p className="text-xs text-gray-400 mt-3">{18 + index}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Total Transaksi</p>
              <h4 className="font-bold text-lg">Rp 23.456.000</h4>
            </div>
            <div className="border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Rata-rata / Hari</p>
              <h4 className="font-bold text-lg">Rp 3.351.000</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
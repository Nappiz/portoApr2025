export default function Dashboard() {
    return (
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Dashboard</h1>
        <p className="text-lg text-gray-700 mb-6">
          Halaman dashboard memberikan ringkasan informasi penting dan akses cepat ke fitur utama. 
          Temukan statistik, laporan, dan notifikasi terbaru di sini.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow transition-transform hover:scale-105 duration-300">
            <h2 className="font-semibold text-xl">Statistik 1</h2>
            <p className="text-gray-600">Detail dan angka terkait statistik 1.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow transition-transform hover:scale-105 duration-300">
            <h2 className="font-semibold text-xl">Statistik 2</h2>
            <p className="text-gray-600">Detail dan angka terkait statistik 2.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow transition-transform hover:scale-105 duration-300">
            <h2 className="font-semibold text-xl">Statistik 3</h2>
            <p className="text-gray-600">Detail dan angka terkait statistik 3.</p>
          </div>
        </div>
      </div>
    );
  }
  
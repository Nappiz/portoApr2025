export default function Dashboard() {
  return (
    <div className="animate-fadeIn px-6 py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 text-left">
          Dashboard
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-left">
          Halaman dashboard memberikan ringkasan informasi penting dan akses cepat ke fitur utama. Temukan statistik, laporan, dan notifikasi terbaru di sini.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
    </div>
  );
}

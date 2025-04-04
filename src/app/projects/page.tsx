export default function Projects() {
  return (
    <div className="animate-fadeIn px-6 py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 text-left">
          My Projects
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-left">
          Di bawah ini adalah beberapa project yang telah saya kerjakan. Setiap project merupakan hasil kreativitas dan dedikasi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-700">
              Deskripsi singkat tentang Project 1, termasuk tujuan dan teknologi yang digunakan.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-700">
              Deskripsi singkat tentang Project 2, termasuk peran dan hasil yang dicapai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

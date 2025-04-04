"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "../../components/Divider";

// Data sertifikat (contoh)
const certificates = [
  {
    id: 1,
    title: "Best Team Bangkit Company Track Capstone Project",
    organization: "Bangkit Academy",
    issuedOn: "January 2025",
    imageSrc: "/images/certificates/certificate-1.jpg", // Ganti sesuai path
    link: "https://contoh-link-sertifikat-1.com",
  },
  {
    id: 2,
    title: "Certificate of Completion Bangkit Academy",
    organization: "Bangkit Academy",
    issuedOn: "January 2025",
    imageSrc: "/images/certificates/certificate-2.jpg", // Ganti sesuai path
    link: "https://contoh-link-sertifikat-2.com",
  },
  {
    id: 3,
    title: "Sertifikat Kepesertaan Studi Independen Bersertifikat Angkatan 7",
    organization: "Kampus Merdeka",
    issuedOn: "December 2024",
    imageSrc: "/images/certificates/certificate-3.jpg", // Ganti sesuai path
    link: "https://contoh-link-sertifikat-3.com",
  },
  // Tambahkan data sertifikat lainnya jika perlu
];

export default function Certification() {
  const [search, setSearch] = useState("");

  // Filter sertifikat berdasarkan search term (judul, organisasi)
  const filteredCertificates = useMemo(() => {
    if (!search) return certificates;
    return certificates.filter(
      (cert) =>
        cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.organization.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="animate-fadeIn px-6 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 text-center">Certifications</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        Berikut adalah beberapa sertifikat yang saya peroleh. Klik pada setiap card untuk melihat detail lebih lanjut.
      </p>

      <Divider />

      {/* Search Input */}
      <div className="mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari sertifikat..."
          className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 shadow-sm"
        />
      </div>

      {/* Grid Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((cert) => (
            <Link
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{cert.title}</h2>
                <p className="text-lg text-gray-600">{cert.organization}</p>
                <p className="text-sm text-gray-500 mt-1">Issued on {cert.issuedOn}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Sertifikat tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}

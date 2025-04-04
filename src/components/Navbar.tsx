'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Divider from './Divider';

const Navbar = () => {
  const pathname = usePathname();
  const activeClass = (href: string) =>
    pathname === href
      ? "bg-blue-600 text-white"
      : "text-gray-700 hover:bg-gray-100 hover:text-blue-500";

  return (
    <div className="fixed top-6 left-6 bottom-6 w-64 bg-white rounded-lg p-4 flex flex-col ml-40 mt-12">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/path-to-your-image.jpg"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full shadow-md"
        />
        <h2 className="mt-2 font-bold text-xl">Nama Anda</h2>
        <p className="text-gray-500">Lokasi Anda</p>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded opacity-80 cursor-default"
            disabled
          >
            Hire me
          </button>
          <button
            className="bg-gray-200 text-gray-800 px-3 py-2 rounded opacity-80 cursor-default"
            disabled
          >
            ID/US
          </button>
        </div>
      </div>

      <Divider />

      {/* Menu Navigasi */}
      <nav className="flex-grow overflow-y-auto mt-2">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className={`flex items-center gap-2 w-full px-4 py-3 rounded transition-colors duration-300 ${activeClass("/")}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2V9z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`flex items-center gap-2 w-full px-4 py-3 rounded transition-colors duration-300 ${activeClass("/about")}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.675 0 5.167.743 7.121 2.004M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/certification"
              className={`flex items-center gap-2 w-full px-4 py-3 rounded transition-colors duration-300 ${activeClass("/certification")}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certification
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`flex items-center gap-2 w-full px-4 py-3 rounded transition-colors duration-300 ${activeClass("/projects")}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-4 9 4" />
              </svg>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 w-full px-4 py-3 rounded transition-colors duration-300 ${activeClass("/dashboard")}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`flex items-center gap-2 w-full px-4 py-3 rounded transition-colors duration-300 ${activeClass("/contact")}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0l-8-8m8 8l-8 8" />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Divider />

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Hak Cipta
      </footer>
    </div>
  );
};

export default Navbar;

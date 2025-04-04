"use client";
import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className="pt-6 px-4 md:ml-72 transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}

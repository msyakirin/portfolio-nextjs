"use client";
import { useRouter } from "next/router";
import PdfViewerComponent from "../atoms/PdfViewerComponent";
import Link from "next/link";

const CvPage: React.FC = () => {
  const pdfFileURL = "CV-M.Syakirin.pdf"; // Ganti dengan URL atau path PDF Anda

  const handleDownload = () => {
    // Navigasi langsung ke file PDF untuk mengunduh
    window.open(pdfFileURL, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-16 max-md:mx-4">
      <div className="flex items-center justify-between w-full max-w-2xl my-4">
        <button onClick={handleDownload} className="px-4 py-1.5 rounded-md dark-light-mode-button hover:bg-yellow-600 hover:text-white hover:border-yellow-600">
          Download CV
        </button>
        <Link href="/" className="px-4 py-1.5 rounded-md dark-light-mode-button hover:bg-yellow-600 hover:text-white hover:border-yellow-600">
          Back
        </Link>
      </div>
      <div>
        <img src="/img/CV-M. Syakirin.png" alt="" className="w-full max-w-2xl" />
      </div>
    </div>
  );
};

export default CvPage;

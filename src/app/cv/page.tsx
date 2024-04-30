import CvPage from "@/pages/CvPage";
import Footer from "@/templates/Footer";
import Navbar from "@/templates/Navbar";
import Link from "next/link";

export default function cv() {
  return (
    <div>
      <Navbar />
      <CvPage />
      <Footer />
    </div>
  );
}

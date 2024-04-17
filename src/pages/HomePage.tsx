import About from "@/templates/About";
import Footer from "@/templates/Footer";
import Home from "@/templates/Home";
import Loading from "@/templates/Loading";
import Navbar from "@/templates/Navbar";
import Resume from "@/templates/Resume";
import Skils from "@/templates/Skils";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Setelah beberapa waktu, nonaktifkan loading
    }, 2000); // Waktu dalam milidetik sebelum loading nonaktif

    return () => clearTimeout(timeout); // Membersihkan timeout saat komponen dilepas
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skils />
          <Resume />
          <Footer />
        </>
      )}
    </div>
  );
}

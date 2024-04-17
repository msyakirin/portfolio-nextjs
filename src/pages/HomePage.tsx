import About from "@/templates/About";
import Footer from "@/templates/Footer";
import Home from "@/templates/Home";
import Navbar from "@/templates/Navbar";
import Resume from "@/templates/Resume";
import Skils from "@/templates/Skils";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Resume />
      <Footer />
    </div>
  );
}

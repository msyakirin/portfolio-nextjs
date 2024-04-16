import About from "@/templates/About";
import Home from "@/templates/Home";
import Navbar from "@/templates/Navbar";
import Resume from "@/templates/Resume";
import Skils from "@/templates/Skils";
export function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Resume />
    </div>
  );
}

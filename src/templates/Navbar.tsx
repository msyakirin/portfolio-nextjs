import DivNav from "@/atoms/DivNav";
import { ButtonFaMoon, ButtonFaSun } from "../atoms/ButtonFontAwesome";

export default function Navbar() {
  return (
    <div className="fixed shadow-md w-full h-14 bg-white z-10">
      <div className="flex h-full items-center mx-10 justify-between max-md:mx-4">
        <div>
          <img src="/img/favicon.ico" alt="icon.png" />
        </div>
        <div className="flex gap-10 max-md:hidden">
          <DivNav className="border-b-2" children="Home" />
          <DivNav className="" children="About" />
          <DivNav className="" children="Skils" />
          <DivNav className="" children="Resume" />
          <DivNav className="" children="Contact" />
        </div>
        <div>
          <ButtonFaMoon className="hidden" />
          <ButtonFaSun className="hidden" />
        </div>
      </div>
    </div>
  );
}

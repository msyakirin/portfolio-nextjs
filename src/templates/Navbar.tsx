import DivNav from "@/atoms/DivNav";
import { ButtonFaMoon, ButtonFaSun } from "../atoms/ButtonFontAwesome";
import CustomImage from "@/atoms/CustomImage";

export default function Navbar() {
  return (
    <div className="fixed shadow-md w-full h-14 bg-white z-10">
      <div className="flex h-full items-center mx-10 justify-between max-md:mx-4">
        <div>
          <CustomImage src="/img/favicon.ico" />
        </div>
        <div className="flex gap-10 max-md:hidden">
          <DivNav className="border-b-2">Home</DivNav>
          <DivNav className="">About</DivNav>
          <DivNav className="">Skils</DivNav>
          <DivNav className="">Resume</DivNav>
          <DivNav className="">Contact</DivNav>
        </div>
        <div>
          <ButtonFaMoon className="hidden" />
          <ButtonFaSun className="hidden" />
        </div>
      </div>
    </div>
  );
}

"use client";
import DivNav from "@/atoms/DivNav";
import { ButtonFaMoon, ButtonFaSun } from "../atoms/ButtonFontAwesome";
import CustomImage from "@/atoms/CustomImage";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for user preference
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode) {
      setDarkMode(isDarkMode === "true");
    } else {
      // Default to light mode if no preference is found
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };
  return (
    <div className="fixed shadow-md w-full h-14 bg-white z-10 dark-light-mode">
      <div className="flex h-full items-center mx-10 justify-between max-md:mx-4">
        <div>
          <CustomImage src="/img/favicon.ico" width={35} height={35} className={""} />
        </div>
        <div className="flex gap-10 max-md:hidden">
          <DivNav className="border-b-2">Home</DivNav>
          <DivNav className="">About</DivNav>
          <DivNav className="">Skils</DivNav>
          <DivNav className="">Resume</DivNav>
          <DivNav className="">Contact</DivNav>
        </div>

        <div onClick={toggleDarkMode} className="h-10 w-10">
          <ButtonFaMoon className={darkMode ? "hidden" : "text-2xl w-full h-full flex justify-center items-center"} />
          <ButtonFaSun className={darkMode ? "text-2xl w-full h-full flex justify-center items-center" : "hidden"} />
        </div>

        <style jsx global>{`
          body {
            background-color: ${darkMode ? "black" : "white"};
            color: ${darkMode ? "white" : "black"};
          }

          .dark-light-mode {
            background-color: ${darkMode ? "black" : "white"};
            color: ${darkMode ? "white" : "black"};
          }

          .cursor-ball.dark-light-mode {
            background-color: ${darkMode ? "white" : "black"};
            color: ${darkMode ? "black" : "white"};
          }
          .cursor-outline.dark-light-mode {
            background-color: transparent;
            outline: 0.1px solid ${darkMode ? "white" : "black"};
            color: ${darkMode ? "black" : "white"};
          }

          .dark {
            background-color: black;
            color: white;
          }

          .light {
            background-color: white;
            color: black;
          }
        `}</style>
      </div>
    </div>
  );
}

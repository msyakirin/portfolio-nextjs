"use client";
import DivNav from "@/atoms/DivNav";
import { ButtonFaMoon, ButtonFaSun } from "../atoms/ButtonFontAwesome";
import CustomImage from "@/atoms/CustomImage";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };
  return (
    <>
      <div className="fixed shadow-md w-full h-14 border-b border-[#535353] z-10 dark-light-mode">
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

          <div className="flex justify-center items-center gap-4">
            <div onClick={toggleDarkMode} className="h-10 w-10">
              <ButtonFaMoon className={darkMode ? "hidden" : "text-2xl w-full h-full flex justify-center items-center"} />
              <ButtonFaSun className={darkMode ? "text-2xl w-full h-full flex justify-center items-center" : "hidden"} />
            </div>
            <div className="hidden max-md:block">
              <button onClick={toggleNavbar} className="items-center justify-center p-2 rounded-md focus:outline-none dark-light-mode-open-menu" aria-expanded={isOpen ? "true" : "false"}>
                {/* Icon for the toggle button */}
                <svg className={`${isOpen ? "hidden" : "block"} h-7 w-7`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${isOpen ? "block" : "hidden"} h-7 w-7`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <style jsx global>{`
            /* start text outline transparent */
            .text-outline-transparent {
              color: transparent;
              font-size: 35px;
              font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
              text-shadow: -1px -1px 0 ${darkMode ? "white" : "#00000080"}, 1px -1px 0 ${darkMode ? "white" : "#00000080"}, -1px 1px 0 ${darkMode ? "white" : "#00000080"}, 1px 1px 0 ${darkMode ? "white" : "#00000080"};
            }
            .text-outline-transparent:hover {
              color: ${darkMode ? "white" : "#00000080"};
              animation: textTransparent 0.1s linear;
            }

            @keyframes textTransparent {
              from {
                color: transparent;
              }
              to {
                color: ${darkMode ? "white" : "#00000080"};
              }
            }

            @supports ((text-stroke: 0.8px ${darkMode ? "white" : "#00000080"}) or (-webkit-text-stroke: 0.8px ${darkMode ? "white" : "#00000080"})) {
              .text-outline-transparent {
                color: transparent;
                -webkit-text-stroke: 1px ${darkMode ? "white" : "#00000080"};
                text-shadow: none;
              }
            }
            /* end text outline transparent */

            body {
              background-color: ${darkMode ? "black" : "white"};
              color: ${darkMode ? "white" : "black"};
            }

            .dark-light-mode {
              background-color: ${darkMode ? "black" : "white"};
              color: ${darkMode ? "white" : "black"};
            }

            // start button
            .dark-light-mode-button {
              border: 2px solid ${darkMode ? "white" : "green"};
            }
            // end button

            // start skils
            .dark-light-mode-skils {
              fill: ${darkMode ? "white" : "black"};
            }
            // end skils

            // start progress bar
            .dark-light-mode-progress-bar {
              background: ${darkMode ? "white" : "green"};
            }
            // end progress bar

            // start footer
            .dark-light-mode-footer {
              background: ${darkMode ? "#2d3748" : "#f7fafc"};
            }
            // end footer

            // start open menu
            .dark-light-mode-open-menu {
              color: ${darkMode ? "white" : "black"};
            }
            // end open menu

            // start cursor
            .cursor-ball.dark-light-mode {
              background-color: ${darkMode ? "white" : "black"};
            }
            .cursor-outline.dark-light-mode {
              background-color: transparent;
              outline: 0.1px solid ${darkMode ? "white" : "black"};
            }
            // end cursor

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
    </>
  );
}

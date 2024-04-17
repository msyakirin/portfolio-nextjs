"use client";
import { ButtonFaAnglesUp, ButtonFaEnvelope, ButtonFaFacebook, ButtonFaInstagram, ButtonFaLinkedin } from "@/atoms/ButtonFontAwesome";
import { useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleButtonClick = () => {
    setShowButton(true);
    scrollToTop();

    // Set a timeout to reset showButton after the scroll animation is finished
    setTimeout(() => {
      setShowButton(false);
    }, 1000); // Adjust the timeout value as needed
  };

  return (
    <div>
      <div className="h-20 max-md:mt-20"></div>
      <footer className="dark-light-mode-footer text-white py-8 relative ">
        <button onClick={handleButtonClick} className="absolute border bg-white rounded-md shadow shadow-green-300 -top-6 left-1/2 transform -translate-x-1/2">
          <ButtonFaAnglesUp className="animate-bounce text-green-500 px-2 py-1 text-2xl " />
        </button>
        <div className="flex justify-center gap-3 mt-10">
          <a href="#footer" className="icon-wrap">
            <div className="flex justify-center items-center w-12 h-12 rounded-md bg-blue-600 hover:bg-blue-700">
              <ButtonFaLinkedin className="text-white text-3xl" />
            </div>
          </a>
          <a href="#footer" className="icon-wrap">
            <div className="flex justify-center items-center w-12 h-12 rounded-md bg-blue-500 hover:bg-blue-600">
              <ButtonFaFacebook className="text-white text-3xl" />
            </div>
          </a>
          <a href="#footer" className="icon-wrap">
            <div className="flex justify-center items-center w-12 h-12 rounded-md bg-pink-600 hover:bg-pink-700">
              <ButtonFaInstagram className="text-white text-3xl" />
            </div>
          </a>
          <a href="#footer" className="icon-wrap">
            <div className="flex justify-center items-center w-12 h-12 rounded-md bg-red-600 hover:bg-red-700">
              <ButtonFaEnvelope className="text-white text-3xl" />
            </div>
          </a>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            M. SYAKIRIN <span className="highlight">&copy;2023</span>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(2.5px);
          }
          50% {
            transform: translateY(-2.5px);
          }
        }

        .animate-bounce {
          animation: bounce 0.5s infinite;
        }
      `}</style>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { ButtonFaAnglesUp } from "./ButtonFontAwesome";

export default function ProgressBar() {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = (scrollPosition / maxScroll) * 100;
      setScrollProgress(progress);

      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <div style={{ position: "fixed", right: "0", bottom: "70px", width: "10px", marginRight: "10px" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {showButton && (
          <button onClick={scrollToTop} className="" style={{ marginBottom: "55px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="">
              <ButtonFaAnglesUp className="text-green-500 rotate-180" />
            </div>
          </button>
        )}
          <div style={{ height: "100%", transition: "width 0.3s ease" }} className="dark-light-mode-progress-bar" />
        <div style={{ position: "relative", width: "100px", height: "1px", background: "dark-light-mode-progress-bar", borderRadius: "5px", transform: "rotate(90deg)" }}>
          <div style={{ width: `${scrollProgress}%`, height: "100%", transition: "width 0.3s ease" }} className="dark-light-mode-progress-bar" />
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { ButtonFaCaretUp } from "./ButtonFontAwesome";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ position: "fixed", right: "0", bottom: "70px", zIndex: 999, width: "10px", marginRight: "10px" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {showButton && (
          <button onClick={scrollToTop} className="opacity-30" style={{ marginBottom: "55px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ButtonFaCaretUp className={"text-xl rounded-full border border-black w-8 max-md:border-none text-green-500 opacity-60"}></ButtonFaCaretUp>
          </button>
        )}
        <div style={{ position: "relative", width: "100px", height: "1px", background: "#f0f0f0", borderRadius: "5px", overflow: "hidden", transform: "rotate(90deg)" }}>
          <div style={{ width: `${scrollProgress}%`, height: "100%", background: "#4caf50", transition: "width 0.3s ease" }} />
        </div>
      </div>
    </div>
  );
}
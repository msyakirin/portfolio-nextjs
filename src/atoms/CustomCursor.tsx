// CustomCursor.tsx
"use client";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorBall = document.querySelector(".cursor-ball");
    const cursorOutline = document.querySelector(".cursor-outline");

    const handleMouseMove = (e: MouseEvent) => {
      cursorBall.style.top = e.pageY + "px";
      cursorBall.style.left = e.pageX + "px";

      cursorOutline.style.top = e.pageY + "px";
      cursorOutline.style.left = e.pageX + "px";
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        cursorOutline.classList.add("cursor-mousedown");
      }
    };

    const handleMouseUp = () => {
      cursorOutline.classList.remove("cursor-mousedown");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor-ball"></div>
      <div className="cursor-outline"></div>
      <style jsx>{`
        .cursor-ball {
          width: 8px;
          height: 8px;
          background-color: #000;
          border-radius: 50%;
          position: absolute;
          z-index: 100;
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .cursor-outline {
          width: 3rem;
          height: 3rem;
          border: 1px solid #000;
          transition: all 0.15s ease;
          border-radius: 50%;
          position: absolute;
          z-index: 100;
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .cursor-mousedown {
          background-color: green;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

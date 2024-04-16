// CustomCursor.tsx
"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const handleMouseMove = (e: MouseEvent) => {
    const cursorBallElement = document.querySelector(".cursor-ball") as HTMLDivElement;
    const cursorOutlineElement = document.querySelector(".cursor-outline") as HTMLDivElement;

    cursorBallElement.style.top = e.pageY + "px";
    cursorBallElement.style.left = e.pageX + "px";

    cursorOutlineElement.style.top = e.pageY + "px";
    cursorOutlineElement.style.left = e.pageX + "px";
  };

  const handleMouseDown = (e: MouseEvent) => {
    const cursorOutlineElement = document.querySelector(".cursor-outline") as HTMLDivElement;

    if (e.button === 0) {
      cursorOutlineElement.classList.add("cursor-mousedown");
    }
  };

  const handleMouseUp = () => {
    const cursorOutlineElement = document.querySelector(".cursor-outline") as HTMLDivElement;
    cursorOutlineElement.classList.remove("cursor-mousedown");
  };

  useEffect(() => {
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
      <div className="cursor-ball max-md:hidden"></div>
      <div className="cursor-outline  max-md:hidden"></div>
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
}


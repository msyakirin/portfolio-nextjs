// CustomCursor.tsx
"use client";
import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const handleMouseMove = (e: MouseEvent) => {
//     const cursorBallElement = document.querySelector(".cursor-ball") as HTMLDivElement;
//     const cursorOutlineElement = document.querySelector(".cursor-outline") as HTMLDivElement;

//     const cursorX = e.pageX;
//     const cursorY = e.pageY; // Tambahkan scrollY untuk mengikuti scroll vertikal

//     // 42px buffer untuk pojok kanan
//     const maxX = window.innerWidth - 42;
//     const newX = Math.min(cursorX, maxX);

//     cursorBallElement.style.top = `${cursorY}px`; // Gunakan template literal untuk menambahkan 'px'
//     cursorBallElement.style.left = `${newX}px`; // Gunakan template literal untuk menambahkan 'px'

//     cursorOutlineElement.style.top = `${cursorY}px`; // Gunakan template literal untuk menambahkan 'px'
//     cursorOutlineElement.style.left = `${newX}px`; // Gunakan template literal untuk menambahkan 'px'
//   };

//   const handleMouseDown = (e: MouseEvent) => {
//     const cursorOutlineElement = document.querySelector(".cursor-outline") as HTMLDivElement;

//     if (e.button === 0) {
//       cursorOutlineElement.classList.add("cursor-mousedown");
//     }
//   };

//   const handleMouseUp = () => {
//     const cursorOutlineElement = document.querySelector(".cursor-outline") as HTMLDivElement;
//     cursorOutlineElement.classList.remove("cursor-mousedown");
//   };

//   useEffect(() => {
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mousedown", handleMouseDown);
//     document.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mousedown", handleMouseDown);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []); // Jangan lupa untuk menyertakan dependencies kosong agar useEffect hanya berjalan sekali

//   return (
//     <div className="">
//       <div className="cursor-ball max-md:hidden"></div>
//       <div className="cursor-outline max-md:hidden"></div>

//       <style jsx>{`
//         .cursor-ball {
//           width: 8px;
//           height: 8px;
//           background-color: #000;
//           border-radius: 50%;
//           position: fixed;
//           z-index: 100;
//           pointer-events: none;
//           transform: translate(-50%, -50%);
//         }

//         .cursor-outline {
//           width: 3rem;
//           height: 3rem;
//           border: 1px solid #000;
//           transition: all 0.15s ease;
//           border-radius: 50%;
//           position: fixed;
//           z-index: 100;
//           pointer-events: none;
//           transform: translate(-50%, -50%);
//         }

//         .cursor-mousedown {
//           background-color: green;
//         }
//       `}</style>
//     </div>
//   );
// }

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setIsScrolling(false);
    const cursorBallElement = document.querySelector(".cursor-ball") as HTMLDivElement;
    const cursorOutlineElement = document.querySelector(".cursor-outline") as HTMLDivElement;

    const cursorX = e.pageX;

    // 42px buffer untuk pojok kanan
    const maxX = window.innerWidth - 42;
    const newX = Math.min(cursorX, maxX);

    cursorBallElement.style.top = e.pageY + "px";
    cursorBallElement.style.left = newX + "px";

    cursorOutlineElement.style.top = e.pageY + "px";
    cursorOutlineElement.style.left = newX + "px";
  };

  const handleScroll = () => {
    setIsScrolling(true);
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
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`cursor-ball ${isScrolling ? "hidden" : ""}`}></div>
      <div className={`cursor-outline ${isScrolling ? "hidden" : ""}`}></div>
      <style jsx>{`
        .cursor-ball {
          position: fixed;
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

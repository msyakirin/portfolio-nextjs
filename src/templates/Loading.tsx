"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={"loadingContainer"}>
      {loading && <div className={"verticalLine"}></div>}
      <style jsx>
        {`
          .loadingContainer {
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
            overflow: hidden;
          }
          .verticalLine {
            height: 50px;
            aspect-ratio: 2;
            border: 10px solid #000;
            box-sizing: border-box;
            background: radial-gradient(farthest-side, #fff 98%, #0000) left/20px 20px, radial-gradient(farthest-side, #fff 98%, #0000) left/20px 20px, radial-gradient(farthest-side, #fff 98%, #0000) center/20px 20px,
              radial-gradient(farthest-side, #fff 98%, #0000) right/20px 20px, #000;
            background-repeat: no-repeat;
            filter: blur(4px) contrast(10);
            animation: l14 1s infinite;
          }
          @keyframes l14 {
            100% {
              background-position: right, left, center, right;
            }
          }
        `}
      </style>
    </div>
  );
}
/* HTML: <div class="loader"></div> */

"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Setelah beberapa waktu, nonaktifkan loading
    }, 2000); // Waktu dalam milidetik sebelum loading nonaktif

    return () => clearTimeout(timeout); // Membersihkan timeout saat komponen dilepas
  }, []);

  return (
    <div className={"loadingContainer"}>
      {loading && <div className={"verticalLine"}></div>}
      <style jsx>
        {`
          .loadingContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
            overflow: hidden;
          }

          .verticalLine {
            width: 2px;
            height: 60%;
            background-color: #333; /* Warna garis vertikal */
            position: absolute;
            bottom: 0;
            left: 50%; /* Posisi di tengah secara horizontal */
            top: 20%; /* Posisi di tengah sekitar 60% dari tinggi */
            transform: translateX(-50%);
            animation: bounceVertical 1s ease-in-out infinite; /* Animasi garis vertikal */
          }

          @keyframes bounceVertical {
            0% {
              height: 50%;
              top: 50%;
            }
            50% {
             height: 0%; /* Puncak animasi, tinggi mencapai 100% */
             top: 0%;
           }
            100% {
              height: 50%; /* Mulai dan akhir dengan tinggi 0 */
              top: 50%;

            }
           
          }
        `}
      </style>
    </div>
  );
}

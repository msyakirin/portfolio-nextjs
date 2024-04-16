"use client";
import Image from "next/image";

export default function CustomImage({ src, width, height, className }: { src: string; width: number; height: number; className: string }) {
  return (
    <div>
      <Image src={src} alt="Image" className={className} width={width} height={height} />
    </div>
  );
}

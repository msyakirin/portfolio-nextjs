"use client";
import HomePage from "@/pages/HomePage";
import Loading from "@/templates/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      <div>
        {loading && <Loading />}
        {!loading && <HomePage />}
      </div>
    </main>
  );
}

"use client";
import HomePage from "@/pages/HomePage";
import Loading from "@/templates/Loading";
import { useEffect, useState } from "react";

const useLoadingStatus = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedStatus = sessionStorage.getItem('loadingStatus');
    if (storedStatus && storedStatus === 'false') {
      setLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('loadingStatus', 'false');
      }, 2000);
  
      return () => clearTimeout(timeout);
    }
  }, []);

  return loading;
};

export default function Home() {
  const loading = useLoadingStatus();

  return (
    <main>
      <div>{loading ? <Loading /> : <HomePage />}</div>
    </main>
  );
}

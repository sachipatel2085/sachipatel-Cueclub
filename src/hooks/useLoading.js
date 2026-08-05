import { useEffect, useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // matches the full timeline

    return () => clearTimeout(timer);
  }, []);

  return loading;
}

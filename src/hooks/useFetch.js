import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const jsonData = await res.json();
        setData(
          jsonData.map((d) => {
            return { ...d, quantity: 0 };
          })
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;

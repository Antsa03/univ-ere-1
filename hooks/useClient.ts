import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useClient = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        setData(await response.json());
      } else {
        setError(new Error(`Error fetching data: ${response.statusText}`));
      }
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = async () => {
    await fetchData();
  };

  return { data, error, isLoading, refetch };
};

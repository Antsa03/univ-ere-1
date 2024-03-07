import { useState } from "react";

export const useFechData = <T>(initialData: T[]) => {
  const [data, setData] = useState(initialData);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return { data, fetchData };
};

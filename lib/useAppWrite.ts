import { useEffect, useState } from "react";

export default function (callback: any) {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await callback();
      setIsLoading(true);
      setData(response);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refreshing = () => fetchData();
  return { isLoading, data, refreshing };
}

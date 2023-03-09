import { useState } from "react";

export const useApi = (apiFunc: any) => {
  const [data, setData] = useState({
    data: [],
    meta: {},
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    return response;
  };

  return {
    request,
    setData,
    data,
    error,
    loading,
  };
};

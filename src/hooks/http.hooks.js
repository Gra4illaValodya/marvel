import { useCallback, useState } from "react";
import axios from "axios";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const request = useCallback(async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setLoading(false);
      return response.data.data.results;
    } catch (error) {
      setErrorMessage(true);
      setLoading(false);
      throw error;
    }
  }, []);

  return { request, loading, errorMessage };
};

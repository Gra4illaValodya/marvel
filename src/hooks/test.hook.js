import axios from "axios";
import { useCallback, useState } from "react";

export const useTest = () => {
  const [load, setLoad] = useState(true);

  const request = useCallback(async (url) => {
    try {
      const response = await axios.get(url);
      setLoad(false);
      return response.data.data.results;
    } catch (error) {
      console.log(error);
    }
  });

  return { request, load };
};

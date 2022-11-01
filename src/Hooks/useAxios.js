import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://opentdb.com/";
function useAxios({ url }) {
  const [response, setResponse] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, [url]);
  return {
    response,
    isloading,
    error,
  };
}

export default useAxios;

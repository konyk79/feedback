import { useState, useCallback } from "react";

const useFetchData = () => {
  const [error, setError] = useState("");
  const skipError = () => {
    setError(false);
  };
  const sendRequest = useCallback(async (config, dataProcess) => {
    try {
      setError("");
      const response = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? config.body : null,
      });
      const result = await response.json();
      dataProcess(result);
    } catch (error) {
      setError(error.message);
    } finally {
    }
  }, []);

  return [error, skipError, sendRequest];
};

export default useFetchData;

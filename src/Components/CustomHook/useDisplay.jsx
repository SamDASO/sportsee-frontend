import { useEffect, useState, useCallback } from "react";

const useDisplay = (fetchDataCallback) => {
  //state
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //behavior

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
        const result = await fetchDataCallback();
        setData(result);
    } catch (err) {
      setError(err.message || 'Error');
    } finally {
        setIsLoading(false);
    }
}, [fetchDataCallback]);


  useEffect(() => {
    
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refresh: fetchData };
};

export default useDisplay;

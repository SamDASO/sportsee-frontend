import { useEffect, useState } from "react";

const useDisplay = (fetchDataCallback) => {
  //state
  const [fetchData, setdata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //behavior

  useEffect(() => {
    const handleState = async () => {
      setIsLoading(true);

      try {
        const response = await fetchDataCallback();
        setIsLoading(false);
        setdata(response);
      } catch (error) {
        setIsLoading(false);
        setError(
          "Les données n'ont pas pu être récupérées - veuillez rechargez la page"
        );
      }
    };
    handleState();
  }, [fetchDataCallback]);

  return { fetchData, isLoading, error };
};

export default useDisplay;

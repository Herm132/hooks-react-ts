import { useEffect, useState } from "react";

type Props = {
  url: string;
};

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  errors: string | null; 
};

export const useFetch = <T>({ url }: Props) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    errors: null,
  });
  useEffect(() => {
  const getFetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: T = await response.json();
      console.log(data)
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setState({
        data: null,
        isLoading: false,
        errors: errorMessage,
      });
    }
  };


    getFetchData(url);
  }, [url]);

  return state; 
};

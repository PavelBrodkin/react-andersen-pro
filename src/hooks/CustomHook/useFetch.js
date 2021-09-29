import { useState, useEffect } from "react";
import { API_URL, fetchPosts } from "./config";

export const useFetch = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    try {
      const posts = await fetchPosts(url);
      setState((prev) => prev.concat(posts));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  return {
    state,
    error,
  };
};

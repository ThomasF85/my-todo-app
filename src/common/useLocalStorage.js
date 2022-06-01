import { useEffect, useState } from "react";

function useLocalStorage(key, defaultState) {
  const [state, setState] = useState(() => {
    try {
      const persistedData = localStorage.getItem(key);
      if (persistedData) {
        return JSON.parse(persistedData);
      }
      return defaultState;
    } catch (error) {
      console.warn("Reading from local storage failed", error);
      return defaultState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn("Writing to local storage failed", error);
    }
  }, [state]);

  return [state, setState];
}

export default useLocalStorage;

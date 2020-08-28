import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const useLoad = (time = 1000) => {
  const isMounted = useRef(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const load = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, time);
    });
  };

  const awaitResult = async () => {
    const result = await load();
    if (isMounted.current) setLoading(result);
  };
  
  const backToInitialState = (time) => {
    setTimeout(() => {
      if (isMounted.current) {
        setLoading(true);
      }
    }, time);
  };

  return [loading, awaitResult, backToInitialState];
};

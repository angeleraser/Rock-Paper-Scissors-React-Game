import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const useLoad = (time = 1000) => {
  const isMounted = useRef(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  const load = (con = true) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(con);
      }, time);
    });
  };

  const awaitResult = async (con = true) => {
    const result = await load(con);
    if (isMounted.current) setLoading(result);
  };
  const backToInitialState = (time) => {
    setTimeout(() => {
      if (isMounted.current) {
        setLoading(false);
      }
    }, time);
  };

  return [loading, awaitResult, backToInitialState];
};

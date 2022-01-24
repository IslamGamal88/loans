import { useReducer, useEffect } from "react";
import { Context } from "../store/types";

const useLocalStorage = (
  key: string,
  initialValue: Context,
  reducer: any
): any => {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
};

export { useLocalStorage };

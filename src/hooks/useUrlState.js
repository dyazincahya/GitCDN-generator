import { useState, useEffect, useCallback } from "react";

export function useUrlState() {
  const [params, setParams] = useState(
    new URLSearchParams(window.location.search),
  );

  useEffect(() => {
    const handlePopState = () => {
      setParams(new URLSearchParams(window.location.search));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const updateUrl = useCallback((newParams) => {
    const current = new URLSearchParams(window.location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "" || (key === "tab" && (value === "all" || value === "semua"))) {
        current.delete(key);
      } else {
        current.set(key, value);
      }
    });

    const searchString = current.toString();
    const newUrl = searchString
      ? `${window.location.pathname}?${searchString}`
      : window.location.pathname;
    window.history.pushState({}, "", newUrl);
    setParams(current);
  }, []);

  return [params, updateUrl];
}

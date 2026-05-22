import { useState } from "react";



export function useFirstVisit() {
  const [hasVisited, setHasVisited] = useState(() => localStorage.getItem('firstVisit') === "true");

  const markFirstVisit = () => {
    localStorage.setItem('firstVisit', "true");
    setHasVisited(true);
  };

  return { hasVisited, markFirstVisit };
}

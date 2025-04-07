import { useEffect, useState } from "react";

const getScroll = () => {
  return (
    (window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
      100 +
    "%"
  );
};

export const useScroll = () => {
  const [progressScroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScroll(getScroll());
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return progressScroll;
};

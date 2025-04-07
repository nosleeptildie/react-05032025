import { useScroll } from "./use-scroll-bar";
import scrollStyle from "./scroll-bar.module.css";

export const ScrollBar = () => {
  const progressScroll = useScroll();

  return <div className={scrollStyle.root} style={{ width: progressScroll }} />;
};

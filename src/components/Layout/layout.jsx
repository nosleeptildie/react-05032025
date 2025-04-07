import { ScrollBar } from "../Scroll-bar/scroll-bar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ScrollBar />
      <header>Обзор ресторанов</header>
      <section>{children}</section>
      <footer>footer</footer>
    </div>
  );
};

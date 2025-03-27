export const Layout = ({ children }) => {
  return (
    <div>
      <header>Обзор ресторанов</header>
      <section>{children}</section>
      <footer>footer</footer>
    </div>
  );
};

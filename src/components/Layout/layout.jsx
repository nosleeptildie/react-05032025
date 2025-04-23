import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { ScrollBar } from "../Scroll-bar/scroll-bar";
import layoutStyle from "./layout.module.css";

export const Layout = ({ title, children }) => {
  return (
    <div className={layoutStyle.layout}>
      <ScrollBar />
      <Header />
      <main>
        <h1>{title}</h1>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

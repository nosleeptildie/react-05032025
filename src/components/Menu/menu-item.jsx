import { use } from "react";
import { AuthContext } from "../Auth-context/index";
import { DishCounter } from "../Dish/dish-counter";
import menuStyle from "./menu-item.module.css";

export const MenuItem = ({ item }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  if (!item.name) {
    return null;
  }

  return (
    <div className={menuStyle.container}>
      <div className={menuStyle.title}>{item.name}</div>
      <div>{isAuthorized && <DishCounter />}</div>
    </div>
  );
};

import { Dish } from "../Dish/dish";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => {
          return (
            <li key={dish.id}>
              <Dish dish={dish} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

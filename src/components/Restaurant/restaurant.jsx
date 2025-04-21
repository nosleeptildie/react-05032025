import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";
import restaurantStyle from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className={restaurantStyle.restaurant}>
      <h2 className={restaurantStyle.heading}>{name}</h2>

      {menu.length ? <Menu menu={menu} /> : "No menu yet"}

      {reviews.length ? <Reviews reviews={reviews} /> : "No reviews yet"}
    </div>
  );
};

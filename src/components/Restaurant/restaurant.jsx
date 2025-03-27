import { Menu } from "../Menu/menu.jsx";
import { Reviews } from "../Reviews/reviews.jsx";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menu={menu} />}
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <br />
    </div>
  );
};

import { createRoot } from "react-dom/client";
import { restaurants } from "./assets/mock.js";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {restaurants.map((restaurant) => (
      <div key={restaurant.id} className="divRed">
        <h2 className="headGreen">{restaurant.name}</h2>
        <h3 className="headBlue">Меню</h3>
        <ul>
          {restaurant.menu.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h3 className="headRed">Отзывы</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

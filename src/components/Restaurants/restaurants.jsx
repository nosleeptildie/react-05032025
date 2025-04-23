import { useState } from "react";
import { RestaurantList } from "../Restaurant-list/restaurant-list";
import { Restaurant } from "../Restaurant/restaurant";

import { restaurants } from "../../assets/mock";

export const Restaurants = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  return (
    <div>
      <RestaurantList
        restaurants={restaurants}
        onSetActiveRestaurant={setActiveRestaurant}
        activeRestaurant={activeRestaurant}
      />
      <Restaurant restaurant={activeRestaurant}></Restaurant>
      <Restaurant restaurant={activeRestaurant}></Restaurant>
      <Restaurant restaurant={activeRestaurant}></Restaurant>
      <Restaurant restaurant={activeRestaurant}></Restaurant>
      <Restaurant restaurant={activeRestaurant}></Restaurant>
    </div>
  );
};

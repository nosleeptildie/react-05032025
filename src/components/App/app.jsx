import { useState } from "react";
import { restaurants } from "../../assets/mock.js";
import { Layout } from "../Layout/Layout.jsx";
import { Restaurant } from "../Restaurant/restaurant.jsx";
import { Tabs } from "../Tabs/tabs.jsx";

export const App = ({ title }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants.length > 0 ? restaurants[0].id : null
  );

  const selectedRestaurant =
    restaurants.find((restaurant) => restaurant.id === selectedRestaurantId) ??
    null;

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    id: id,
    active: id === selectedRestaurantId,
  }));

  return (
    <Layout>
      <h1>{title}</h1>
      {restaurants.length > 0 ? (
        <div className="content">
          <Tabs tabs={tabs} onClick={setSelectedRestaurantId} />
          {Boolean(selectedRestaurant) && (
            <Restaurant
              key={selectedRestaurantId}
              restaurant={selectedRestaurant}
            />
          )}
        </div>
      ) : (
        <div className="empty-data">Нет данных</div>
      )}
    </Layout>
  );
};

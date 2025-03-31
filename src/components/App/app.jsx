import { useState } from "react";
import { restaurants } from "../../assets/mock.js";
import { Layout } from "../Layout/Layout.jsx";
import { Restaurant } from "../Restaurant/restaurant.jsx";
import { Tabs } from "../Tabs/tabs.jsx";

export const App = ({ title }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants.length > 0 ? restaurants[0].id : null
  );
  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    id: id,
    active: id === selectedRestaurantId,
  }));

  const selectedRestaurant =
    restaurants.find((restaurant) => restaurant.id === selectedRestaurantId) ??
    null;

  return (
    <Layout>
      <h1>{title}</h1>
      {restaurants.length > 0 ? (
        <div className="content">
          <Tabs tabs={tabs} onClick={setSelectedRestaurantId} />
          {Boolean(selectedRestaurant) && (
            <Restaurant restaurant={selectedRestaurant} />
          )}
        </div>
      ) : (
        <div className="empty-data">Нет данных</div>
      )}
    </Layout>
  );
};

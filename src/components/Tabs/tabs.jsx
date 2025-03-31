import { Tab } from "./Tab.jsx";

export const Tabs = ({ tabs, onClick }) => {
  return (
    <div className="tabs" style={{ display: "flex" }}>
      {tabs.map((tab) => {
        return (
          <Tab tab={tab} key={tab.id} onClick={() => onClick(tab.id)} />
        );
      })}
    </div>
  );
};

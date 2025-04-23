import tabStyle from "./tab.module.css";

export const TabItem = ({ children, onClick }) => {
  return (
    <li className={tabStyle.list}>
      <button className={tabStyle.button} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

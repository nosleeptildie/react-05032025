import TabStyle from './tab.module.css';

export const TabItem = ({ children, onClick }) => {
  return (
    <li className={TabStyle.list}>
      <button className={TabStyle.button}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};

import styles from "./BotaoPrincipal.module.css";

const BotaoPrincipal = ({ children, onClick, size }) => {
  return (
    <button
      className={`${styles.botaoPrincipal} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BotaoPrincipal;

import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ children, to }) => {
  const localizacao = useLocation();
  return (
    <Link
      className={`${
        localizacao.pathname === to ? styles.linkDestacado : styles.link
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;

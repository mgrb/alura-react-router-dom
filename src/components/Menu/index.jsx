import { useLocation } from "react-router-dom";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import MenuLink from "../Menulink";

const Menu = () => {
  const localizacao = useLocation();

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/about">Sobre min</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;

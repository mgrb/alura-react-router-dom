import styles from "./Rodape.module.css";
import MarcaRegistrada from "@/assets/marca_registrada.svg?react";

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido com ❤ por Alura
    </footer>
  );
};

export default Rodape;

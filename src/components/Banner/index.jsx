import styles from "./Banner.module.css";
import circuloColorido from "@/assets/circulo_colorido.png";
import minhaFoto from "@/assets/minha_foto.png";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}></h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço! Eu sou Antônio Evaldo.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Circulo colorido"
          aria-hidden="true"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Antonio Evaldo Sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;

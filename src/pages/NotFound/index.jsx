import error404 from "@/assets/erro_404.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada!</h1>
        <p className={styles.paragrafo}>É isso mesmo que estas procurando?</p>
        <div className={styles.botaoContainer}>
          <button>Voltar</button>
        </div>
        <img src={error404} alt="Cachorro vestido como humano" />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NotFound;

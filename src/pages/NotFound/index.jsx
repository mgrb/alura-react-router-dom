import error404 from "@/assets/erro_404.png";
import styles from "./NotFound.module.css";
import BotaoPrincipal from "@/components/BotaoPrincial";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navegar = useNavigate();
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada!</h1>
        <p className={styles.paragrafo}>É isso mesmo que estas procurando?</p>
        <div className={styles.botaoContainer}>
          <BotaoPrincipal size="lg" onClick={() => navegar(-1)}>
            Voltar
          </BotaoPrincipal>
        </div>
        <img src={error404} alt="Cachorro vestido como humano" />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NotFound;

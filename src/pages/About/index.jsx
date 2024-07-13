import PostModelo from "@/components/PostModelo";
import fotoCapa from "@/assets/sobre_mim_capa.png";
import styles from "./About.module.css";
import fotoSobreMin from "@/assets/sobre_mim_foto.png";
const About = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá eu sou o Antônio!</h3>
      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMin}
        alt="Foto do Antônio Evaldo sorrindo"
      />
      <p className={styles.paragrafo}>
        Sou desenvolvedor front-end e apaixonado por tecnologia. Atualmente
        estou cursando Análise e Desenvolvimento de Sistemas na Faculdade
        Impacta de Tecnologia.
      </p>
      <p className={styles.paragrafo}>
        Sou um entusiasta de tecnologia e sempre estou em busca de novos
        conhecimentos. Tenho conhecimento em HTML, CSS, JavaScript, React e
        Next.js.
      </p>
      <p className={styles.paragrafo}>
        Gosto de compartilhar conhecimento e ajudar as pessoas a se
        desenvolverem na área de tecnologia. Acredito que a educação é o caminho
        para um mundo melhor.
      </p>
    </PostModelo>
  );
};

export default About;

import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import BotaoPrincipal from "@/components/BotaoPrincial";
const PostCard = ({ id, titulo }) => {
  return (
    <Link to={`/posts/${id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>{titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
};

export default PostCard;

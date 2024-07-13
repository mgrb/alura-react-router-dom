import styles from "./Post.module.css";
const Post = ({ id, titulo }) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/assets/posts/${id}/capa.png`}
        alt="Imagem de capa do post"
      />
      <h2 className={styles.titulo}>{titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
};

export default Post;

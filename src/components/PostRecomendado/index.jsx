import styles from "./PostRecomendado.module.css";
import PostCard from "@/components/PostCard";

export default function PostRecomendado({ postsRecomendados }) {
  return (
    <section>
      <h2 className={styles.tituloOutrosPosts}>
        Outros posts que você pode gostar
      </h2>

      <ul className={styles.postsRecomendados}>
        {postsRecomendados.map((post) => (
          <li key={post.id}>
            <PostCard id={post.id} titulo={post.titulo} />
          </li>
        ))}
      </ul>
    </section>
  );
}

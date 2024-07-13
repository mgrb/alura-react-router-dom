import Post from "@/components/Post";
import posts from "@/json/posts.json";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post {...post}></Post>
        </li>
      ))}
    </ul>
  );
};

export default Home;

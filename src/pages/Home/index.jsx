import PostCard from "@/components/PostCard";
import posts from "@/json/posts.json";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard {...post}></PostCard>
        </li>
      ))}
    </ul>
  );
};

export default Home;

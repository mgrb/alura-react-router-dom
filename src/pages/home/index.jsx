import Banner from "@/components/Banner";
import posts from "@/json/posts.json";
import styles from "./Home.module.css";
import Post from "@/components/Post";
const Home = () => {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post {...post}></Post>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;

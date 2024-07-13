import { useParams } from "react-router-dom";
import posts from "@/json/posts.json";
import PostModelo from "@/components/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <h1>Post não encontrado</h1>;
  }

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
      key={post.id}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;

import { useParams } from "react-router-dom";
import posts from "@/json/posts.json";
import PostModelo from "@/components/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NotFound from "../NotFound";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PaginaPadrao from "@/components/PaginaPadrao";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
        key={post.id}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </PaginaPadrao>
  );
};

export default Post;

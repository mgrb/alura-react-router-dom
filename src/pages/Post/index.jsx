import PaginaPadrao from "@/components/PaginaPadrao";
import PostModelo from "@/components/PostModelo";
import posts from "@/json/posts.json";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import "./Post.css";
import PostRecomendado from "@/components/PostRecomendado";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  // Filtrando os posts relacionados
  const postsRecomendados = posts
    .filter((postRelacionado) => postRelacionado.id !== Number(id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

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
      <PostRecomendado postsRecomendados={postsRecomendados} />
    </PaginaPadrao>
  );
};

export default Post;

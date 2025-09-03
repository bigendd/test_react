import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const PostDetailPage = ({ posts }) => { 
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const localPost = posts.find((p) => String(p.id) === id);

    if (localPost) {
      setPost(localPost);
      setLoading(false);
    } else {
      const fetchPost = async () => {
        try {
          const response = await api.get(`/posts/${id}`);
          setPost(response.data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, posts]);

  if (loading) return <p>Chargement...</p>;
  if (!post) return <p>Post introuvable</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Retour</button>
    </div>
  );
};

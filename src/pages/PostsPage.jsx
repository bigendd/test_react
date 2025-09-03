import { useEffect, useState } from "react";
import { api } from "../services/api";
import { PostCard } from "../components/PostCard";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");

        setTimeout(() => {
          setPosts(response.data);
          setLoading(false);
        }, 3000);

      } catch (err) {
        setError("Erreur lors du chargement des posts.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Chargement des posts...</p>;
  if (error) return <p>{error}</p>;

  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div>
      <h1>Liste des Posts</h1>
      {sortedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

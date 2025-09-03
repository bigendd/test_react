import { PostCard } from "../components/PostCard";

export const PostsPage = ({ posts, loading }) => {
  if (loading) return <p>Chargement des posts...</p>;

  // Tri par ID décroissant
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

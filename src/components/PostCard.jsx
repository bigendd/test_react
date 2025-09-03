import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ post }) => {
  const [showBody, setShowBody] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="post-card">
      <h4>{post.title}</h4>
      {showBody && <p>{post.body}</p>}
      <small>User ID: {post.userId}</small>
      <br />
      <button onClick={() => setShowBody(!showBody)}>
        {showBody ? 'Cacher le contenu' : 'Afficher le contenu'}
      </button>
      <button onClick={() => navigate(`/post/${post.id}`)}>
        Voir détails
      </button>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { createPost } from "../services/api";

export const CreatePostPage = ({ setCrePosts }) => {
  const navigate = useNavigate();

  const handlePostCreated = async (data) => {
    const newPost = await createPost(data);
    setCrePosts((list) => [...list, newPost]); 
    navigate("/"); 
    if (!newPost) {
      alert("erreur lors de la création du poste");
    } else {
      alert("post créé avec succès !");
    }
  };

  return (
    <div>
      <h1>crer un nouveau post</h1>
      <PostForm onPostCreated={handlePostCreated} />
    </div>
  );
};

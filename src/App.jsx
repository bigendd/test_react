import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostsPage } from "./pages/PostsPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { getPosts } from "./services/api";
import { PostDetailPage } from "./pages/PostDetailPage";
import { Navigation } from "./components/Navigation";

function App() {
  const [posts, setPosts] = useState([]); 
  const [crePosts, setCrePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const allPosts = [...crePosts, ...posts];



  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostsPage posts={allPosts} loading={loading} />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/create" element={<CreatePostPage setCrePosts={setCrePosts} />} />
      </Routes>
    </Router>
  );
}

export default App;

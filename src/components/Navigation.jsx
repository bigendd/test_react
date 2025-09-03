import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <Link to="/">Accueil</Link> | <Link to="/create">Créer un post</Link>
  </nav>
);

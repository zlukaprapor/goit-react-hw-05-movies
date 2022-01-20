import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <Link to="/">главная</Link>
    <Link to="/1">1-я</Link>
    <Link to="/2">2-я</Link>
    <Link to="/3">3-я</Link>
  </nav>
);

export default Navigation;

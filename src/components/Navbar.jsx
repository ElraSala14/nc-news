import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>{"   "} 
      <Link to="/Articles">Articles</Link>{"   "}
      <Link to="/Topics">Topics</Link>{"   "}
      
    </nav>
  );
}

export default Navbar;
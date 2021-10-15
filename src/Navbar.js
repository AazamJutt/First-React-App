import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> Blog Manager </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link id = "addBlogBtn" to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
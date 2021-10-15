const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> Blog Manager </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: "rgb(114, 73, 167)",
                    borderRadius: "6px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
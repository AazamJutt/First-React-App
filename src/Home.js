import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const[blogs,setBlogs] = useState(null)
    const[isLoading,setLoading] =useState(true);
    const[error,setError] = useState(null);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
       fetch("http://localhost:8000/blogs")
       .then(res => {
           if(!res.ok){
               throw Error("Server Error");
           }
           return res.json();
       })
       .then(data=>{
           setBlogs(data);
           setLoading(false);
           setError(null);
       })
       .catch((err =>{
           setLoading(false);
           setError(err.message);
       }))
    }, []);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            { blogs && <BlogList blogs = {blogs}  title="All Blogs" handleDelete={handleDelete}/>}
        </div>

     );
}
 
export default Home;
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const BlogList = ({blogs, title}) => {
    const history = useHistory();
    const handleDelete = (id) =>{
        fetch('http://localhost:8000/blogs/'+id ,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <div>
                        <Link to={`/blogs/${blog.id}`} className="d-flex flex-row justify-content-between">
                            <h2>{ blog.title }</h2> 
                            <button id="deleteBtn" onClick={() => handleDelete(blog.id) }>Delete</button>
                        </Link>
                            <p>Written by { blog.author }</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
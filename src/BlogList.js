const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <div className="d-flex flex-row justify-content-between links">
                        <h2>{ blog.title }</h2> 
                        <button id="deleteBtn" onClick={() => handleDelete(blog.id) }>Delete</button>
                    </div>
                    <p>{blog.body}</p>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
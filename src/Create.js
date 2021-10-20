import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isLoading,setLoading] = useState(false);
    const history = useHistory();

    const handlSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        setLoading(true);

        fetch('https://blogs--manager-app.herokuapp.com/api/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setLoading(false);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit = {handlSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Loading...</button>}
            </form>
        </div>
     );
}
 
export default Create;
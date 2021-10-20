import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const{ id } = useParams();
    const { data, error, isLoading } =  useFetch("https://blogs--manager-app.herokuapp.com/api/" + id);
    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            { error && <div> { error }</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Wrtten By: {data.author}</p>
                    <p>{data.body}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
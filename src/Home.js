import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data,isLoading,error} = useFetch("https://blogs--manager-app.herokuapp.com/api/blogs")
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <BlogList blogs = {data}  title="All Blogs"/>}
        </div>

     );
}
 
export default Home;
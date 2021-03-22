
import BlogList from './BlogList'
import useFetch from './useFetch'
const Home = () => {

const {data:blogs, isPending, err:error} = useFetch('http://localhost:8000/blogs')

    // const borrarBlog = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs);
    // }
    //borrarBlog={borrarBlog}

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading </div>} 
            {blogs && <BlogList blogs={blogs} title='Todos los blogs'/>}
        </div>
     );
}
 
export default Home;
import {useState, useEffect} from 'react';
import BlogList from './BlogList'

const Home = () => {

    const borrarBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(()=>{fetch('http://localhost:8000/blogs')
        .then(res=> res.json())
        .then(data => {
            setBlogs(data)
            setIsPending(false)
            setError(false)
        })
        .catch(err => {
            setError(err.message)
            setIsPending(false)})
    },[]);

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading </div>} 
            {blogs && <BlogList blogs={blogs} title='Todos los blogs' borrarBlog={borrarBlog}/>}
        </div>
     );
}
 
export default Home;
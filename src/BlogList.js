import {Link} from 'react-router-dom'

const BlogList = ({blogs, title, borrarBlog}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview container center-align z-depth-3" key={blog.id}>
                <br/>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </Link>
                    <a class="waves-effect waves-light btn red" onClick={()=>borrarBlog(blog.id)}>Borrar</a>
                    <br/>
                    <br/>
                </div> ))}
                
        </div>
     );
}
 
export default BlogList;
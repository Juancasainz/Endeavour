const BlogList = ({blogs, title, borrarBlog}) => {
 // const borrarBlog = (id) => {
    //     const newBlogs = items.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs);
    // }
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview container center-align z-depth-3" key={blog.id}>
                <br/>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <a class="waves-effect waves-light btn red" onClick={()=>borrarBlog(blog.id)}>Borrar esta verga</a>
                    <br/>
                    <br/>
                </div> ))}
                
        </div>
     );
}
 
export default BlogList;
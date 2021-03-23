import { useParams } from "react-router";
import useFetch from './useFetch'

const BlogDetail = () => {

    const { id } = useParams()
    const {data:blog, isPending, err:error} = useFetch('http://localhost:8000/blogs/'+id)

    return ( 
        <div className="blog-detail">
            {isPending && <div>Loading...</div>}
            
            {blog && (
                <article>
<h2>{blog.title}</h2>
<p>Escrito por {blog.author}</p>
<p>{blog.body}</p>
</article>
            )}
        </div>
     );
}
 
export default BlogDetail;
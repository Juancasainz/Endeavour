import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(JSON.stringify(blog));
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            content: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('todo fino');
        }).catch(e=>console.log(e))
        

    }

    return ( 
        <div className="create">
            <h2>Crear nuevo blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>que te paso:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>autor:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;
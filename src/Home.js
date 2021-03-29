import {useState, useEffect} from 'react';
import Pap from './components/Pap'

const Home = () => {

   
    
    return ( 
    <div>
        <Pap/>
    </div>
    
        
        // <div className="home">
        //     {error && <div> {error} </div>}
        //     {isPending && <div> Loading </div>} 
        //     {blogs && <BlogList blogs={blogs} title='Todos los blogs' borrarBlog={borrarBlog}/>}
        // </div>
     );
}
 
export default Home;
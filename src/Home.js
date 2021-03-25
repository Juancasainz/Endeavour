import {useState, useEffect} from 'react';
import Step1 from './components/Step1'
import Pap from './components/Pap'
import Step2 from './components/Step2'

const Home = () => {

   
    const [items, setItems] = useState(null);
    const [combo, setCombos] = useState(null);

    useEffect(()=>{
        Promise.all([
            fetch("data/combo.json").then((res) => res.json()),
            fetch("data/data.json").then((res) => res.json()),
          ]).then(([combo, data]) => {
            setItems(data)
            setCombos(combo)
          }).catch(err =>console.log(err.message) );
    },[]);




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
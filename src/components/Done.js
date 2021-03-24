import {Link} from 'react-router-dom';
const Done = () => {
    return ( 
        <div className="done">
            <p>done</p>
            <Link to='/'><button>Regresar</button></Link>
        </div>
     );
}
 
export default Done;
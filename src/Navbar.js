import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container">
            <span>Esto es el NavBar</span>
            <div className="links right">
                <Link className="btn" to="/">Home </Link> <span>      </span>
                <Link className="btn" to="/create">New Blog</Link>
            </div>
            </div>
            
        </nav>
     );
}
 
export default Navbar;
import { Link } from "react-router-dom";
const Navbar = () =>{

    return(
        <nav className="navbar">
            <h2>TODO List</h2>
            <div className="links">
                 <Link to="/" > Home</Link>
                 <Link to="/create" > New Todo </Link>
            </div>
        </nav>
    );

}
export default Navbar;
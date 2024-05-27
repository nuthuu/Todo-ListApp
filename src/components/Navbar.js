import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo"> Todo List </h1>
                <ul className="navbar-menu">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link"> Home </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="navbar-link"> Create </Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
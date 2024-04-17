import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>Welcome to Sonic Nav</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Menu</Link>
        </div>
        </nav>

    );
}

export default Navbar;

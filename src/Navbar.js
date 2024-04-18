import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar" id="navbar">
            <h1>SONIC-SNACK</h1>
            <a href="/">Shop Now</a>
            <a href="/create">Create Account</a>
        
        </nav>

    );
}

export default Navbar;

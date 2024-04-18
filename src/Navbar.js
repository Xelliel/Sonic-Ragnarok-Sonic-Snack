import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar" id="navbar">
        <ul>
            <h1>SONIC-SNACK</h1>

            <li><a href="/">Shop Now</a></li>
            <li><a href="/create">Create Account</a></li>
        </ul>
        </nav>

    );
}

export default Navbar;

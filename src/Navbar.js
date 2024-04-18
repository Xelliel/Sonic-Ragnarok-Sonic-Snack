import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar" id="navbar">
            <h1>SONIC-SNACK</h1>
            <div class="image">
                <img src="/images/sonic2.jpg"alt="sonic"></img>
            </div>
            <a href="/">Shop Now</a>
            <a href="/create">Create Account</a>
        
        </nav>

    );
}

export default Navbar;

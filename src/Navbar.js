import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar" id="navbar">
            <h1>SONIC-SNACKS</h1>
            <a href="/home">Home</a>
            <a href="/">Shop Now</a>
            <a href="/create">Create Account</a>
            <a href="/Cards">Snacks</a>
            <div className="image">
                <img src="https://pbs.twimg.com/media/CYdWOiJWYAAhJyL.png"
                alt="sonic" width="500px"></img>
            </div>
        </nav>

    );
}

export default Navbar;

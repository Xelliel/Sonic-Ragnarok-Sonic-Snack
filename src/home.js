import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const React = require('react')


function home () {
    return (
        
            <main>
                <h1>Home</h1>
                <div>
                </div>
                <Link to='/snacks'>
                    <button className='btn-primary'>Snacks</button>
                    </Link>
            </main>
       
    )
};

export default home;
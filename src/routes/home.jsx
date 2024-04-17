import { Link } from 'react-router-dom';
const React = require('react')
const Def = require ('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src='https://images.pexels.com/photos/9738991/pexels-photo-9738991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='onion rings on pexels'/> 
                </div>
                <Link to='/snacks'>
                    <button className='btn-primary'>Snacks</button>
                    </Link>
            </main>
        </Def>
    )
}

module.exports = home;
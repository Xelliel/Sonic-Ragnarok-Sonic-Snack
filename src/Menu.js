import { Link } from 'react-router-dom';

function menu () {
    return (
        
            <main>
                <h1>Home</h1>
                <div>
                    <img src='https://images.pexels.com/photos/9738991/pexels-photo-9738991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='onion rings on pexels'/> 
                </div>
                <Link to='/menu'>
                    <button className='btn-primary'>Snacks</button>
                    </Link>
            </main>
       
    )
}

export default menu;
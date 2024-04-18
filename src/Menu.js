import { Link } from 'react-router-dom';

function menu () {
    return (
        
            <main>
                <h1>Menu</h1>
                <div>
                </div>
                <Link to='/menu'>
                    <button className='btn-primary'>Snacks</button>
                    </Link>
            </main>
       
    )
}

export default menu;
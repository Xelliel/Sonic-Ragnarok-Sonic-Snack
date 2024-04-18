import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const React = require('react')


function home () {
    return (
        
            <main>
                <h1>Home</h1>
                <div>
                <img src='https://images.nightcafe.studio/jobs/YHu7nXpuILPAeCJtFrvm/YHu7nXpuILPAeCJtFrvm--1--04wa7_2x.jpg?tr=w-1600,c-at_max'
                    alt='sonic eating'/>
                </div>
                <Link to='/snacks'>
                    <button className='btn-primary'>Snacks</button>
                    </Link>
            </main>
       
    )
};

export default home;
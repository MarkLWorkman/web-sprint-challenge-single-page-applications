import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Would You Like A Pizza?</h2>
            <Link to='/pizza'>
                <button>Build Your Pizza</button>
            </Link>
        </div>
    );
};

export default Home;
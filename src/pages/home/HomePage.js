import './HomePage.css';
import React from 'react';

const HomePage = () => {
    return(
        <div class="homepage">
            <div class="greeting">
                <h1>Home</h1>
            </div>
            <div class="timer">
                <h2>Timer 00:00:00</h2>
            </div>
        </div>
    )
}

export default HomePage;
import './BackgroundGreetings.css';
import React from 'react'
import Particles from 'react-particles-js';

const BackgroundGreetings = () => {

    return(
        <div className="background">
            <Particles
                width={window.innerWidth}
                height={window.innerHeight - 100}
                params={{
                    "particles": {
                        "number": {
                            "value": 35
                        },
                        "size": {
                            "value": 3
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
            />
        </div>
         
    )
}

export default BackgroundGreetings;
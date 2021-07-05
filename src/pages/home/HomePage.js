import './HomePage.css';
import React from 'react';
import Location from '../../components/Location/Location';
import PurposesList from '../../components/PurposesList/PurposesList';
import Greetings from '../../components/Greetings/Greetings';
import Schedule from '../../components/Schedule/Schedule';
import Companies from '../../components/Companies/Companies';

const HomePage = () => {
    
    return(
        <React.Fragment>
            <div className="greetings">
                <Greetings/>
            </div>
            <div className="purposes">
                <span className="purposes__title">OUR GOALS</span>
                <span className="purposes__description">Our goal is to solve the problems of the Faculty of Information Technology.
                      This conference is the starting point for launching a program to solve these problems. 
                      We are pursuing 3 main themes:</span>
                <PurposesList/>
            </div>
            <div className="schedule">
                <div className="schedule_title">
                    <span className="schedule_title__text">SCHEDULE</span>
                </div>
                <Schedule/>
            </div>
            <Companies/>
            <div className="google_map">
                <div className="google_map_title">
                    <span className="google_map_title__text">
                        WE WILL BE HERE
                    </span>
                </div>
               <Location/>
            </div>
            <div className="contact_us">
                <div className="contact_us_title">
                    <span className="contact_us_title__text">CONTACT US</span>
                </div>
                <div className="contact_us_info">
                    <span className="contact_us_info__text">Organizer:</span>
                    <span className="contact_us_info__text">Shevtsiv Nikita</span>
                    <span className="contact_us_info__text">
                        nikita0503ua@gmail.com
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                    </span>
                    <span className="contact_us_info__text">
                        +38 097 091 97 21
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="18" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage;
import './HomePage.css';
import React from 'react';
import Location from '../../components/Location/Location';
import PurposesList from '../../components/PurposesList/PurposesList';

import VARTEQ from '../../content/VARTEQ_logo.png'
import IDAP from '../../content/idap_logo.png'
import FOXMINED from '../../content/foxminded_logo.png'
import Schedule from '../../components/Schedule/Schedule';

const WORDS = ['IMAGINE', 'LEARN', 'CREATE'];


const HomePage = () => {
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [currentWord, setCurrentWord] = React.useState(WORDS[0]);
    const [shownWord, setShownWord] = React.useState('');
    const [timeLeft, setTimeLeft] = React.useState();

    React.useEffect(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 80))
        if(shownWord.length === currentWord.length){
            if(currentWordIndex === WORDS.length - 1){
                setCurrentWordIndex(0)
                setCurrentWord(WORDS[0])
            }else{
                setCurrentWordIndex(currentWordIndex + 1)
                setCurrentWord(WORDS[currentWordIndex + 1])
            }
            await new Promise(resolve => setTimeout(() => resolve(), 1500))
            setShownWord('')
        }else{
            setShownWord(shownWord => shownWord + currentWord[shownWord.length])
        }
    }, [shownWord])

    React.useEffect(async () => {
        setInterval(() => {
            const currentDate = new Date();
            const startDate = new Date('May 5, 2021 12:00:00');
            var delta = (startDate.getTime() - currentDate.getTime()) / 1000;
            if(delta > 0){
                const days = Math.floor(delta / 86400);
                delta -= days * 86400;
                const hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;
                const minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;
                const seconds = delta % 60;
                let timeLeft = "";
                if(days !== 0){
                    timeLeft += days + " DAYS "
                }
                if(hours !== 0){
                    if(hours < 10){
                        timeLeft += `0${Math.round(hours)}:`
                    }else{
                        timeLeft += `${Math.round(hours)}:`
                    }
                }else{
                    timeLeft += '00:'
                }
                if(minutes !== 0){
                    if(minutes < 10){
                        timeLeft += `0${Math.round(minutes)}:`
                    }else{
                        timeLeft += `${Math.round(minutes)}:`
                    }
                }else{
                    timeLeft += '00:'
                }
                if(seconds !== 0){
                    if(seconds <= 10){
                        timeLeft += `0${Math.round(seconds)}`
                    }else{
                        timeLeft +=`${ Math.round(seconds)}`
                    }
                }else{
                    timeLeft +='00:'
                }
                setTimeLeft(timeLeft)
            }else{
                setTimeLeft('NOW!')
            }
            
        }, 1000)
    }, [])


    return(
        <React.Fragment>
            <div className="greetings">
                <div className="words">
                    <span className="words__text words__text_first">LET'S </span>
                    <span class="words__text words__text_second">{' '+shownWord}</span>
                </div>
                <div className="timer">
                    <span className="timer__text">{timeLeft}</span>
                </div>
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
            <div className="sponsors">
                <div className="sponsors_title">
                    <span className="sponsors_title__text">
                        SPONSORS AND GUESTS
                    </span>
                </div>
                <div className="sponsors_companies">
                    <div className="varteq">
                        <span className="varteq__title">U.S.A. Chicago:</span>
                        <div className="varteq_info">
                            <img className="varteq_info__image" src={VARTEQ}/>
                            <span className="varteq_info__description"><p><a href="https://varteq.com"><span class="varteq__link">VARTEQ</span></a> is a custom software development company that solves customer business problems by bringing together global expertise, innovation, and creativity.</p></span>
                        </div>
                    </div>
                    <div className="sponsors_companies_second_row">
                        <div className="idap">
                            <span className="idap__title">Ukraine, Kyiv:</span>
                            <div className="idap_info">
                                <img className="idap_info__image" src={IDAP}/>
                                <span className="idap_info__description"><p><a href="https://idapgroup.com"><span class="idap__link">IDAP</span></a> develops web and mobile applications for startups and midsize businesses in Western Europe and North America. Our company unites about 100 professionals working in two offices in Kyiv and Kryvyi Rih.</p></span>
                            </div>
                        </div>
                        <div className="foxminded">
                            <span className="foxminded__title">Ukraine, Kyiv:</span>
                            <div className="foxminded_info">
                                <span className="foxminded_info__description"><p><a href="https://foxminded.com.ua/ua/"><span class="foxminded__link">Foxminded</span></a> - programming courses with training on the project. Minimum theory, maximum real experience and tasks. Learning programming language, tools, teamwork under the guidance of a mentor.</p></span>
                                <img className="foxminded_info__image" src={FOXMINED}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
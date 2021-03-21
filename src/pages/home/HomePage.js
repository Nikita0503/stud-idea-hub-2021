import './HomePage.css';
import React from 'react';
import Location from '../../components/Location/Location';
import PurposesList from '../../components/PurposesList/PurposesList'
import VARTEQ from '../../content/VARTEQ_logo.png'
import IDAP from '../../content/idap_logo.png'
import FOXMINED from '../../content/foxminded_logo.png'

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
            <div className="sponsors">
                <div className="sponsors_title_container">
                    <span className="sponsors_title_container__text">
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
                <div className="google_map_container_title">
                    <span className="google_map_container_title__text">
                        WE WILL BE HERE
                    </span>
                </div>
               <Location/>
            </div>
        </React.Fragment>
    )
}

export default HomePage;
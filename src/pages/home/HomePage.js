import './HomePage.css';
import React from 'react';
import PurposesList from '../../components/PurposesList/PurposesList'

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
                    if(hours <= 10){
                        timeLeft += `0${Math.round(hours)}:`
                    }else{
                        timeLeft += `${Math.round(hours)}:`
                    }
                }else{
                    timeLeft += '00:'
                }
                if(minutes !== 0){
                    if(minutes < 10){ //fix it
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
                <span className="purposes__title">Our purposes</span>
                <span className="purposes__description">Our goal is to solve the problems of the Faculty of Information Technology.
                      This conference is the starting point for launching a program to solve these problems. 
                      We are pursuing 3 main themes:</span>
                <PurposesList/>
            </div>
            <div className="sponsors">
                <span>
                    123
                </span>
            </div>
        </React.Fragment>
    )
}

export default HomePage;
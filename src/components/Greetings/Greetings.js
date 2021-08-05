import './Greetings.css';
import React from 'react'
import BackgroundGreetings from '../BackgroundGreetings/BackgroundGreetings';

const WORDS = ['IMAGINE', 'LEARN', 'CREATE'];


const Greetings = () => {

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
            const startDate = new Date('September 20, 2021 12:00:00');
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
            <BackgroundGreetings/>
            <div className="words">
                 <span className="words__text words__text_first">LET'S </span>
                 <span class="words__text words__text_second">{' '+shownWord}</span>
             </div>
             <div className="timer">
                 <span className="timer__date">SEPTEMBER 20, 21</span>
                 <span className="timer__text">{timeLeft}</span>
             </div>
        </React.Fragment>
    )
}

export default Greetings;
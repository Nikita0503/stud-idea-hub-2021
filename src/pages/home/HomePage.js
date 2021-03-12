import './HomePage.css';
import React from 'react';


const WORDS = ['IMAGINE', 'LEARN', 'CREATE'];

const HomePage = () => {
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [currentWord, setCurrentWord] = React.useState(WORDS[0]);
    const [shownWord, setShownWord] = React.useState('')

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
        console.log(shownWord)
    }, [shownWord])

    return(
        <div class="homepage">
            <div class="greeting">
                <span class="greeting__text greeting__text_first">LET'S </span>
                <span class="greeting__text greeting__text_second">{' '+shownWord}</span>
            </div>
            <div class="timer">
                <h2>Timer 00:00:00</h2>
            </div>
        </div>
    )
}

export default HomePage;
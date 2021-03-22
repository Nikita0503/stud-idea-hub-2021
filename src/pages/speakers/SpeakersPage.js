import './SpeakersPage.css';
import React from 'react';
import Speaker from '../../components/Speaker/Speaker';

const SPEAKERS = [
    {
        name: 'Margot Robbie',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'PUDGE',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Вывозит катки за 1 хук, руинит на изичах за 1 хук. Крадет твою экспу, агент 0-7-0. Любитель отрыгнуть в войс, рофлит над жирными, хотя сам такой. 1 катка после завода и спать, просто перетерпи его и все. Гангает тебя по кд, даже если в твоей тиме.'
    },
    {
        name: 'Margot Robbie 2',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'PUDGE 2',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Вывозит катки за 1 хук, руинит на изичах за 1 хук. Крадет твою экспу, агент 0-7-0. Любитель отрыгнуть в войс, рофлит над жирными, хотя сам такой. 1 катка после завода и спать, просто перетерпи его и все. Гангает тебя по кд, даже если в твоей тиме.'
    },
    {
        name: 'Margot Robbie 3',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'PUDGE 3',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Вывозит катки за 1 хук, руинит на изичах за 1 хук. Крадет твою экспу, агент 0-7-0. Любитель отрыгнуть в войс, рофлит над жирными, хотя сам такой. 1 катка после завода и спать, просто перетерпи его и все. Гангает тебя по кд, даже если в твоей тиме.'
    },
    {
        name: 'Margot Robbie 4',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'PUDGE 4',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Вывозит катки за 1 хук, руинит на изичах за 1 хук. Крадет твою экспу, агент 0-7-0. Любитель отрыгнуть в войс, рофлит над жирными, хотя сам такой. 1 катка после завода и спать, просто перетерпи его и все. Гангает тебя по кд, даже если в твоей тиме.'
    }
]

const SpeakersPage = () => {
    return(
        <React.Fragment>
            <div className="speakers">
                <div className="speakers_title">
                    <span className="speakers_title__text">
                        SPEAKERS
                    </span>
                </div>
                <div className="speakers_members">
                    {SPEAKERS.map((speaker) => {
                        return(
                            <Speaker 
                                name={speaker.name}
                                avatar={speaker.avatar}
                                company={speaker.company}
                                description={speaker.description}/>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default SpeakersPage;
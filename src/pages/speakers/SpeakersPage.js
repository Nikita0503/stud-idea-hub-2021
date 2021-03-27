import './SpeakersPage.css';
import React from 'react';
import Speaker from '../../components/Speaker/Speaker';

const SPEAKERS = [
    {
        name: 'Artem Karyavka',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Nikita Shevtsiv',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Vladislav Zadoroshii',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Bohdan Kachichilidze',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Sergey Nemchinsky',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Denis Panaskin',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'Yulia Petruk',
        avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg',
        company: 'VARTEQ, USA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        name: 'METRO 2033',
        avatar: 'https://steamuserimages-a.akamaihd.net/ugc/974371471307180867/1D6857A5B278BA1A3E5381B76344FCF206052983/',
        company: 'GABECOUNTRY, DOTA2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
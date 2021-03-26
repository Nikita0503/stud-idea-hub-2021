import './Schedule.css';
import React from 'react';
import ScheduleDay from '../ScheduleDay/ScheduleDay';

import logo from '../../content/logo.png';
import coffeeBreak from '../../content/coffee_break.png'
import roundTable from '../../content/round_table.png';

const POINTS_DAY_1 = [
    {number: 1, name: 'Artem Karyavka', topic: 'Startups / outsource / freelance', time: '12:00', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 2, name: 'Nikita Shevtsiv', topic: 'Native vs crossplatform', time: '12:30', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 3, name: 'Coffee break', topic: 'The opportunity to take a break and chat with each other, speakers, company representatives over a cup of tea and cookies or take a picture with friends in the photo zone', time: '13:00', avatar: coffeeBreak},
    {number: 4, name: 'Vladislav Zadoroshii', topic: 'Importance of Git system', time: '13:30', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 5, name: 'Bohdan Kachichilidze', topic: 'Should IT specialists be ranked by rank?', time: '14:00', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 6, name: 'Round table', topic: 'Everyone can ask questions to speakers during a round table, talk about working in IT, take an interest in studying at the university', time: '14:30', avatar: roundTable}
]

const POINTS_DAY_2 = [
    {number: 1, name: 'Sergey Nemchinsky', topic: 'How to make university education better', time: '12:00', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 2, name: 'Denis Panaskin', topic: 'How big data works', time: '12:30', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 3, name: 'Coffee break', topic: 'The opportunity to take a break and chat with each other, speakers, company representatives over a cup of tea and cookies or take a picture with friends in the photo zone', time: '13:00', avatar: coffeeBreak},
    {number: 4, name: 'Yulia Petruk', topic: 'The importance of the HR function in an IT company', time: '13:30', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 5, name: 'METRO 2033', topic: 'Features of gamedev projects', time: '14:00', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 6, name: 'Round table', topic: 'In this conversation, the most important issues of university education will be touched upon. After that, the FIT rebirth begins.', time: '14:30', avatar: roundTable}
]

const Schedule = () => {
    const [selected, setSelected] = React.useState(false);

    const getSelectedSpeaker = () => {
        return(
            <div className="selected_speaker">
                <img 
                    className="selected_speaker__avatar"
                    src={selected.avatar}/>
                <span className="selected_speaker__name">{selected.name}</span>
                <span className="selected_speaker__theme">{selected.topic}</span>
            </div>
        )
    }

    const getSelectedRoundTable = () => {
        return(
            <div className="selected_round_table">
                <img  className="selected_round_table__avatar" src={selected.avatar}/>
                <span className="selected_round_table__name">{selected.name}</span>
                <span className="selected_round_table__description">{selected.topic}</span>
            </div>
        )
    }

    const getSelected = (number) => {
        if(number === 3 || number === 6 || number === 9 || number === 12){
            return getSelectedRoundTable()
        }
        return getSelectedSpeaker()
    }

    const getLogo = () => {
        return(<div className="selected_logo">
            <img
                src={logo}
                className="selected_logo__image"/>
        </div>)
    }

    return(
    <div className="schedule_days">
        <span className="schedule_days__day schedule_days__day_first">DAY 1</span>
        <ScheduleDay points={POINTS_DAY_1} setSelected={setSelected}/>
        <div className="selected_part">
            {selected ? getSelected(selected.number) : getLogo()}
        </div>
        <span className="schedule_days__day schedule_days__day_second">DAY 2</span>
        <ScheduleDay points={POINTS_DAY_2} setSelected={setSelected}/>
    </div>)
}

export default Schedule;
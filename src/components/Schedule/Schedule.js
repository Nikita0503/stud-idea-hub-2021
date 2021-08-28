import './Schedule.css';
import React from 'react';
import ScheduleDay from '../ScheduleDay/ScheduleDay';

import logo from '../../content/logo.png';
import coffeeBreak from '../../content/coffee_break.png'
import roundTable from '../../content/round_table.png';

import margot from '../../content/margot.jpg'
import papich from '../../content/speakers/yuri_steam.png'
import artem_kariavka from '../../content/speakers/artem_kariavka.jpg';
import sergey_nemchinskiy from '../../content/speakers/sergey_nemchinskiy.jpg'
import bogdan_kikacheishvili from '../../content/speakers/bogdan_kikacheishvili.jpg';
import vladislav_zadorozhnii from '../../content/speakers/vlad_zadorozhnii.png';
import denis_panaskin from '../../content/speakers/denis_panaskin.jpg';
import yulia_petruk from '../../content/speakers/yulia_petruk.jpg';
import Ukraine_map from '../../content/map_ukr.png'

import varteq_logo from '../../content/VARTEQ_logo.png';
import livarava from '../../content/livarava_white.png';
import qatestlab from '../../content/qatestlab_logo_white.png';
import foxminded from '../../content/foxminded_logo_white.png';
import idap from '../../content/idap_logo.png';
import solwey_consulting from '../../content/solwey_consulting_logo_white.png';

const POINTS_DAY_1 = [
    {number: 1, name: 'Artem Kariavka', topic: 'Startups / outsource / freelance', logo: livarava, time: '12:00', avatar: artem_kariavka},
    {number: 2, name: 'Nikita Shevtsiv', topic: 'How to find your first job in IT', logo: varteq_logo, time: '12:30', avatar: papich},
    {number: 3, name: 'Vladislav Zadoroshii', topic: 'Learning process simplification', logo: solwey_consulting, time: '13:30', avatar: vladislav_zadorozhnii},
    {number: 4, name: 'Coffee break', topic: 'The opportunity to take a break and chat with each other, speakers, company representatives over a cup of tea and cookies or take a picture with friends in the photo zone', time: '13:00', avatar: coffeeBreak},
]

const POINTS_DAY_2 = [
    {number: 5, name: 'Kikacheishvili Bogdan', topic: 'Hierarchies of IT companies', small_logo: true, logo: idap, time: '14:00', avatar: bogdan_kikacheishvili},
    {number: 6, name: 'QATESTLAB', topic: 'Game testing features', logo: qatestlab, time: '13:30', avatar: margot},
    {number: 7, name: 'Sergey Nemchinskiy', topic: 'How to fix the flaws of IT departments', small_logo: true, logo: foxminded, time: '12:00', avatar: sergey_nemchinskiy},
    {number: 8, name: 'Round table', topic: 'In this conversation, the most important issues of university education will be touched upon. After that, the FIT rebirth begins...', time: '14:30', avatar: roundTable}
]

const Schedule = () => {

    const [selected, setSelected] = React.useState(false);

    const getSelectedSpeaker = () => {
        return(
            <div className="selected_speaker">
                <img 
                    className="selected_speaker__avatar"
                    src={selected.avatar}/>
                    <div className="selected_speaker_text">
                        <span className="selected_speaker_text__name">{selected.name}</span>
                        <span className="selected_speaker_text__theme">{selected.topic}</span>
                        <img 
                            src={selected.logo}
                            className={`selected_speaker_logo ${selected.small_logo && 'selected_speaker_logo_small'}`}/>
                    </div>
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
        
        if(number === 4 || number === 8){
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
        <div className="selected_part">
            {selected ? getSelected(selected.number) : getLogo()}
        </div>
        <div className="schedule_day_container">
        <ScheduleDay points={POINTS_DAY_1} setSelected={setSelected}/>
        <hr/>
        <ScheduleDay points={POINTS_DAY_2} setSelected={setSelected}/>
        </div>

    </div>)
}

export default Schedule;
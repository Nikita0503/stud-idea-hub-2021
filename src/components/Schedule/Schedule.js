import './Schedule.css';
import React from 'react';
import ScheduleDay from '../ScheduleDay/ScheduleDay';

import logo from '../../content/logo.png';

const Schedule = () => {
    const [selected, setSelected] = React.useState(false);

    const getSelectedSpeaker = () => {
        return(
            <div className="selected_speaker">
                <img 
                    className="selected_speaker__avatar"
                    src={selected.avatar}/>
                <h1 className="selected_speaker__name">{selected.name}</h1>
                <h3 className="selected_speaker__theme">{selected.topic}</h3>
            </div>
        )
    }

    const getSelectedRoundTable = () => {
        return(
            <div className="selected_round_table">
                <h1 className="selected_round_table__name">{selected.name}</h1>
                <h3 className="selected_round_table__description">{selected.topic}</h3>
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
        <span className="schedule_days__day">DAY 1</span>
        <ScheduleDay setSelected={setSelected}/>
        <div className="selected_part">
            {selected ? getSelected(selected.number) : getLogo()}
        </div>
        <span className="schedule_days__day">DAY 2</span>

        <ScheduleDay setSelected={setSelected}/>
    </div>)
}

export default Schedule;
import './Schedule.css';
import React from 'react';
import ScheduleDay from '../ScheduleDay/ScheduleDay';

const Schedule = () => {
    const [selected, setSelected] = React.useState(false);

    const getSelectedSpeaker = () => {
        return(
            <div className="selected_speaker">
                <div className="selected_speaker__avatar"></div>
                <h1>{selected.name}</h1>
                <h3>{selected.topic}</h3>
            </div>
        )
    }

    const getSelectedRoundTable = () => {
        return(
            <div className="selected_round_table">
                <h1>{selected.name}</h1>
                <h3>{selected.topic}</h3>
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
            <div className="selected_logo__image"/>
        </div>)
    }

    return(
    <div className="schedule_days">
        <ScheduleDay setSelected={setSelected}/>
        <div className="selected_part">
            {selected ? getSelected(selected.number) : getLogo()}
        </div>
        <ScheduleDay setSelected={setSelected}/>
    </div>)
}

export default Schedule;
import './ScheduleDay.css';
import React from 'react';
import Point from './Point/Point';

const ScheduleDay = (props) => {
    return(
        <div className="schedule_day">
            {props.points.map((point, index) => {
                return(
                    <Point 
                        setSelected={props.setSelected}
                        speaker={point} 
                        amount={props.points.length} 
                        index={index}/>
                )
            })}
        </div>
    )
}

export default ScheduleDay;
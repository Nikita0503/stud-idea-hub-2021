import './ScheduleDay.css';
import React from 'react';
import Point from './Point/Point';

const POINTS = [
    {number: 1, name: 'name 1', topic: 'topic 1', time: '12:34', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 2, name: 'name 2', topic: 'topic 2', time: '12:34', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 3, name: 'name 3', topic: 'topic 3', time: '12:34', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 4, name: 'name 4', topic: 'topic 4', time: '12:34', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 5, name: 'name 5', topic: 'topic 5', time: '12:34', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'},
    {number: 6, name: 'name 6', topic: 'topic 6', time: '12:34', avatar: 'https://pbs.twimg.com/media/EFLGTs3WkAAIonA.jpg'}
]


const Schedule = (props) => {
    return(
        <div className="schedule_day">
            {POINTS.map((point, index) => {
                return(
                    <Point 
                        setSelected={props.setSelected}
                        speaker={point} 
                        amount={POINTS.length} 
                        index={index}/>
                )
            })}
        </div>
    )
}

export default Schedule;
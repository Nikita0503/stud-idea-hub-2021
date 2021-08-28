import './Point.css';
import React from 'react';


const Point = (props) => {
    return(
        <div className="point">
            <div className="point_shape">
                <div className={`point_shape__line point_shape__line_start ${props.index === 0 && 'point_shape__line_hidden'}`}/>
                <div className="point_description">
                    <img 
                        className={`point_description__avatar ${(props.index + 1 ) % 4 == 0 && 'point_description__avatar_empty'}`}
                        src={props.speaker.avatar}
                        onMouseOver={() => props.setSelected(props.speaker)} 
                        onClick={() => props.setSelected(props.speaker)}/>
                    <span className="point_description__time">{props.speaker.time}</span>
                </div>
                <div className={`point_shape__line point_shape__line_end ${props.index === props.amount - 1 && 'point_shape__line_hidden'}`}/>
            </div>
        </div>
    )
}

export default Point;
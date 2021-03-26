import './Point.css';
import React from 'react';


const Point = (props) => {
    return(
        <div className="point">
            <div className="point_shape">
                <div className={`point_shape__line ${props.index === 0 && 'point_shape__line_hidden'}`}/>
                <div className="point_description">
                    <img 
                        className="point_description__avatar" 
                        src={props.speaker.avatar}
                        onMouseOver={() => props.setSelected(props.speaker)} 
                        onMouseOut={() => props.setSelected(null)}
                        onClick={() => props.setSelected(props.speaker)}/>
                    <span className="point_description__time">{props.speaker.time}</span>
                </div>
                <div className={`point_shape__line ${props.index === props.amount - 1 && 'point_shape__line_hidden'}`}/>
            </div>
        </div>
    )
}

export default Point;
import './Point.css';
import React from 'react';


const Point = (props) => {
    return(
        <div className="point">
            <div className="point_shape">
                <div className={`point_shape__line ${props.index === 0 && 'point_shape__line_hidden'}`}/>
                <div className="point_description">
                    <div 
                        className="point_description__avatar" 
                        onMouseOver={() => props.setSelected(props.speaker)} 
                        onMouseOut={() => props.setSelected(null)}
                        onClick={() => props.setSelected(props.speaker)}>
                        
                    </div>
                    <span>{props.speaker.time}</span>
                </div>
                <div className={`point_shape__line ${props.index === props.amount - 1 && 'point_shape__line_hidden'}`}/>
            </div>
        </div>
    )
}

export default Point;
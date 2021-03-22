import './Speaker.css';
import React from 'react'

const Speaker = (props) => {
    return(
        <div className="speaker">
            <div className="speaker_image">
                <img src={props.avatar} className="speaker_image__avatar" />
            </div> 
            <span className="speaker__name">{props.name}</span>
            <span className="speaker__company">{props.company}</span>
            <span className="speaker__description">{props.description}</span>
        </div>
    )
}

export default Speaker;
import './PurposesList.css';
import React from 'react';

const PURPOSES = [
    {
        image: "https://telegra.ph/file/ea145e37cbe1e95db8c14.png",
        title: "Education",
        description: "Education!"
    }, 
    {
        image: "https://telegra.ph/file/ea145e37cbe1e95db8c14.png",
        title: "Perspectives",
        description: "Perspectives!"
    }, 
    {
        image: "https://telegra.ph/file/ea145e37cbe1e95db8c14.png",
        title: "Evolution",
        description: "Evolution!"
    }
];


const PurposesList = () => {
    return(
        <div className="purposes_list">
            {PURPOSES.map(purpose => {
                return(
                <div className="purpose">
                    <img className="purpose__image" src={purpose.image}/>
                    <span className="purpose__title">{purpose.title}</span>
                    <span className="purpose__description">{purpose.description}</span>
                </div>)
            })}
        </div>
    )
}

export default PurposesList;
import './PurposesList.css';
import React from 'react';

import educationIcon from '../../content/education.svg'
import FutureIcon from '../../content/future.svg'
import GrowthIcon from '../../content/growth.svg'

const PURPOSES = [
    {
        image: educationIcon,
        title: "EDUCATION",
        description: "Updating the educational program. In 2021, the IT market has become even more demanding for novice engineers and it has become more difficult to take a junior position. At the moment, the university cannot provide such a level of knowledge to students. STUD IDEA HUB 2021 will help solve this problem."
    }, 
    {
        image: GrowthIcon,
        title: "GROWTH",
        description: "In IT, not only hard skills are important, but also soft skills. Ability to express your thoughts correctly and concisely, to explain complex things in simple words, finding a common language with colleagues, correctly presenting your product are valuable skills. The university now pays too little attention to this. Seminars, IT conferences, disciplines developing soft skills will solve this problem." 
    },
    {
        image: FutureIcon,
        title: "FUTURE",
        description: "Help in finding first job. The difficulty of finding a job for graduates is one of the most serious problems. A large number of students with good skills are unable to find their first job. We're going to fix this. Assistance in preparing for an interview, orientation on the labor market, preparation for a stack of specific companies."
    },
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
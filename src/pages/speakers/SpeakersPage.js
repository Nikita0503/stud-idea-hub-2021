import './SpeakersPage.css';
import React from 'react';
import Speaker from '../../components/Speaker/Speaker';

import margot from '../../content/margot.jpg'
import papich from '../../content/speakers/yuri_steam.png'
import artem_kariavka from '../../content/speakers/artem_kariavka.jpg';
import sergey_nemchinskiy from '../../content/speakers/sergey_nemchinskiy.jpg'
import bogdan_kikacheishvili from '../../content/speakers/bogdan_kikacheishvili.jpg';
import vladislav_zadorozhnii from '../../content/speakers/vlad_zadorozhnii.png';
import denis_panaskin from '../../content/speakers/denis_panaskin.jpg';
import yulia_petruk from '../../content/speakers/yulia_petruk.jpg';

const SPEAKERS = [
    {
        name: 'Sergey Nemchinsky',
        avatar: sergey_nemchinskiy,
        company: 'FoxmindEd',
        description: 'What is the problem with IT departments in universities? What should be added, what should be reduced, and what can be completely removed?'
    },
    {
        name: 'Artem Karyavka',
        avatar: artem_kariavka,
        company: 'LivaRava',
        description: 'How does an IT business work? What are the main directions in this area? What is freelance, outsourcing, startup?'
    },
    {
        name: 'Nikita Shevtsiv',
        avatar: papich,
        company: 'VARTEQ',
        description: 'How to find your first job in IT? What mistakes can you make in the search process, resume writing, during an interview?'
    },
    {
        name: 'Vladislav Zadoroshii',
        avatar: vladislav_zadorozhnii,
        company: 'Solwey Consulting',
        description: 'Can the IT learning process be simplified? How can I do that? What mistakes do beginners most often make in the learning process?'
    },
    {
        name: 'Bohdan Kachichilidze',
        avatar: bogdan_kikacheishvili,
        company: 'IDAP',
        description: 'What levels of engineers and managers are there in IT companies? How to determine your level? Are these gradations necessary?'
    },
    {
        name: 'QATESTLAB',
        avatar: margot,
        company: 'QATESTLAB',
        description: 'How is the game testing process going? How is this different from conventional projects? How to become a game tester?'
    }
]

const SpeakersPage = () => {
    return(
        <React.Fragment>
            <div className="speakers">
                <div className="speakers_title">
                    <span className="speakers_title__text">
                        SPEAKERS
                    </span>
                </div>
                <div className="speakers_members">
                    {SPEAKERS.map((speaker) => {
                        return(
                            <Speaker 
                                name={speaker.name}
                                avatar={speaker.avatar}
                                company={speaker.company}
                                description={speaker.description}/>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default SpeakersPage;
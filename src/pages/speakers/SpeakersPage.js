import './SpeakersPage.css';
import React from 'react';
import Speaker from '../../components/Speaker/Speaker';

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
                    <Speaker/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SpeakersPage;
import './Companies.css';
import React from 'react'
import VARTEQ from '../../content/VARTEQ_logo.png'
import IDAP from '../../content/idap_logo.png'
import FOXMINED from '../../content/foxminded_logo.png'
import LIVARAVA from '../../content/livarava_logo.png'
import QATESTLAB from '../../content/qatestlab_logo.png'

const Companies = () => {

    return(
        <React.Fragment>
            <div className="sponsors">
                <div className="sponsors_title">
                    <span className="sponsors_title__text">
                        SPONSORS AND GUESTS
                    </span>
                </div>
                <div className="sponsors_companies">
                        <div className="varteq">
                            <span className="varteq__title">U.S.A. Chicago:</span>
                            <div className="varteq_info">
                                <img className="varteq_info__image" src={VARTEQ}/>
                                <span className="varteq_info__description"><p><a href="https://varteq.com"><span class="varteq__link">VARTEQ</span></a> is a custom software development company that solves customer business problems by bringing together global expertise, innovation, and creativity.</p></span>
                            </div>
                        </div>
                    <div className="sponsors_companies_second_row">
                        <div className="idap">
                            <span className="idap__title">Ukraine, Kyiv:</span>
                            <div className="idap_info">
                                <img className="idap_info__image" src={IDAP}/>
                                <span className="idap_info__description"><p><a href="https://idapgroup.com"><span class="idap__link">IDAP</span></a> develops web and mobile applications for startups and midsize businesses in Western Europe and North America. Our company unites about 100 professionals working in two offices in Kyiv and Kryvyi Rih.</p></span>
                            </div>
                        </div>
                        <div className="foxminded">
                            <span className="foxminded__title">Ukraine, Kyiv:</span>
                            <div className="foxminded_info">
                                <span className="foxminded_info__description"><p><a href="https://foxminded.com.ua/ua/"><span class="foxminded__link">Foxminded</span></a> - programming courses with training on the project. Minimum theory, maximum real experience and tasks. Learning programming language, tools, teamwork under the guidance of a mentor.</p></span>
                                <img className="foxminded_info__image" src={FOXMINED}/>
                            </div>
                        </div>
                    </div>
                    <div className="sponsors_companies_third_row">
                        <div className="livarava">
                            <span className="livarava__title">Ukraine, Kryvyi Rih:</span>
                            <div className="livarava_info">
                                <img className="livarava_info__image" src={LIVARAVA}/>
                                <span className="livarava_info__description"><p><a href="https://www.livarava.com/en/homepage"><span class="livarava__link">Livarava</span></a> is the company that builds services that helps store and manage knowledge and then allows to share it with your friends.</p></span>
                            </div>
                        </div>
                        <div className="qatestlab">
                            <span className="qatestlab__title">Ukraine, Kryvyi Rih:</span>
                            <div className="qatestlab_info">
                                <span className="qatestlab_info__description"><p><a href="https://qatestlab.com"><span class="qatestlab__link">QATestLab</span></a> is a global provider of independent software testing and QA services with over 15 years of experience delivering QA support.</p></span>
                                <img className="qatestlab_info__image" src={QATESTLAB}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Companies;
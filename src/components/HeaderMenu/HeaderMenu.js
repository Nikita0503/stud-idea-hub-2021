import './HeaderMenu.css';
import React from 'react';
import {
    NavLink
} from "react-router-dom";

import logo from '../../content/logo.png';

const HeaderMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isTopOfPage, setIsTopOfPage] = React.useState(true);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsTopOfPage(window.scrollY === 0)
        });
    }, [])
    
    return(
        <React.Fragment>
            <div className={`menu-toggler ${isMenuOpen && 'menu-toggler_hidden'} ${!isTopOfPage && 'menu-toggler_black'}`}>
                <div
                    className="menu-toggler__button"
                    onClick={() => setIsMenuOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <div className="logo">
                    <img className="logo__image logo__image_small" src={logo} />
                </div>
            </div>
            <div className={`menu ${!isMenuOpen && 'menu_hidden'}`}>
                <div className="logo">
                    <img className="logo__image" src={logo} />
                </div>
                <div className="menu_buttons" onClick={() => setIsMenuOpen(false)}>
                    <NavLink className="menu_buttons__button" activeClassName="menu_buttons__button menu_buttons__button_selected" to="/home">Home</NavLink>
                    <NavLink className="menu_buttons__button" activeClassName="menu_buttons__button menu_buttons__button_selected" to="/speakers">Speakers</NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderMenu;
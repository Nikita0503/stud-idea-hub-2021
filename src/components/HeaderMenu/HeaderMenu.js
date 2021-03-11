import './HeaderMenu.css';
import {
    NavLink
} from "react-router-dom";

const HeaderMenu = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>logo</h1>
            </div>
            <div className="menu_buttons">
                <NavLink className="menu_buttons__button" activeClassName="menu_buttons__button menu_buttons__button_selected" to="/home">Home</NavLink>
                <NavLink className="menu_buttons__button" activeClassName="menu_buttons__button menu_buttons__button_selected" to="/speakers">Speakers</NavLink>
            </div>
        </div>
    )
}

export default HeaderMenu;
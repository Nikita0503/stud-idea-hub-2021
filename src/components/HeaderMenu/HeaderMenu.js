import './HeaderMenu.css';
import {
    NavLink
} from "react-router-dom";

const HeaderMenu = () => {
    return(
        <div className="header">
            <NavLink className="header__button" activeClassName="header__button header__button_selected" to="/home">Home</NavLink>
            <NavLink className="header__button" activeClassName="header__button header__button_selected" to="/speakers">Speakers</NavLink>
        </div>
    )
}

export default HeaderMenu;
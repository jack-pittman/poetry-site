import './siteHeader.css';

import Menu from './menu/menu.js';
import MenuButton from './menuButton/menuButton.js';


function Header() {
    return (
        <div id="myFuckingSiteHeader">
            <div className="image-container">
                {/* <img src="./media/logos/cspLogo5.png" id="siteLogo" alt="site logo"/> */}
                <img src="./media/logos/cspLogo7.png" id="simpleSiteLogo" alt="site logo"/>
                <p id="mobileHeaderText">CAROLINE PITTMAN</p>
            </div>

            <div className="menu-container">
                <Menu/>
                <MenuButton />

                {/* <p id="menuIcon">|||</p> */}
            </div>
        </div>
    );
}

export default Header;
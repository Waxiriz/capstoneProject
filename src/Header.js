import Nav from './Nav.js';
import './Header.css';

function Header() {
    return (
        <header>
            <img src="/assets/Logo.svg"/>
            <Nav/>
            <img src='/assets/icon_hamburgermenu_.svg' class='burger'/>
        </header>
    );
}

export default Header;
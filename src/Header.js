import Nav from './Nav.js';
import './Header.css';

function Header() {
    return (
        <header>
            <img src="/assets/Logo.svg" alt='logo'/>
            <Nav/>
            <img src='/assets/icon_hamburgermenu_.svg' class='burger' alt=''/>
        </header>
    );
}

export default Header;
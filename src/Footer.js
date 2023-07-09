import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <img src="/assets/restauranfood.jpg" alt='restaurant'/>
            <div>
                <h5>Doormat Navigation</h5>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/online">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h5>Contact</h5>
                <ul>
                    <li>Adress</li>
                    <li>phone number</li>
                    <li>email</li>
                </ul>
            </div>

            <div>
                <h5>Social Media Links</h5>
                <ul>
                    <li>
                        <a href="https://stackoverflow.com/questions/53914013/failed-to-compile-module-not-found-cant-resolve-react-router-dom">Facebook</a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/questions/53914013/failed-to-compile-module-not-found-cant-resolve-react-router-dom">Twitter</a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/questions/53914013/failed-to-compile-module-not-found-cant-resolve-react-router-dom">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
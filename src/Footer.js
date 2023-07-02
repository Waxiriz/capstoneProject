import './Footer.css';

function Footer() {
    return (
        <footer>
            <img src="/assets/restauranfood.jpg"/>
            <div>
                <h5>Doormat Navigation</h5>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">Reservations</a>
                    </li>
                    <li>
                        <a href="">Order Online</a>
                    </li>
                    <li>
                        <a href="">Login</a>
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
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Twitter</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
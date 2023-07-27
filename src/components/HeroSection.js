import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <article className="hero-section">
            <div className="left-column">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ispum dolor sit amet, consectetur....</p>
                <button><Link to="/booking">Reserve a Table</Link></button>
            </div>
            <div className="right-column">
                <img src="/assets/Mario_and_Adrian_A.jpg" alt="restaurant"/>
            </div>
        </article>
    )
}

export default HeroSection;
import './ChicagoSection.css'

function ChicagoSection() {
    return (
        <article className="chicago">
            <div className="left-column">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ispum dolor sit amet, consectetur....</p>
            </div>
            <div className="right-column">
                <img src="/assets/restaurant.jpg" alt="restaurant" className='first-pic'/>
                <img src="/assets/Mario_and_Adrian_b.jpg" alt="Mario and Adrian" className='sec-pic'/>
            </div>
        </article>
    )
}

export default ChicagoSection;
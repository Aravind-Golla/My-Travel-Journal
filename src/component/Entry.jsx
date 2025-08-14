import hyderabadImg from '../images/Hyderabad.jpg';
import markerImg from '../images/marker.png';

function Entry() {
    return (
        <article className='journal-entry'>
            <div className="first-img-container">
            <img className="first-img"src={hyderabadImg} alt="Hyderabad" />
            </div>
            <div>
                <img src={markerImg} alt="Marker" />
                <span>Hyderabad</span>
                 <a href="https://www.google.com/maps/place/Durgam+Cheruvu+Cable+Bridge,+Hyderabad">View on Google Maps</a>
                 <h2>Durgam Cheruvu Cable Bridge</h2>
                 <p>The Durgam Cheruvu Cable Bridge is one of Hyderabad’s iconic landmarks. Opened in 2020, it spans the picturesque Durgam Cheruvu Lake, easing traffic between Jubilee Hills and Madhapur. Its cable-stayed design, colorful night lighting, and lake views make it both a functional route and a tourist attraction. The bridge is also a favorite hangout spot for evening walks, photography, and enjoying the city skyline.</p>
                 
            </div>
        </article>
    );
}
export default Entry;
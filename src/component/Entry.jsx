export default function Entry(props) {
    return (
        <article className="journal-entry">
            {/* Left side: image */}
            <div className="first-img-container">
                <img src={props.img} alt={props.alt} />
            </div>

            {/* Right side: details */}
            <div className="entry--details">
                <h2 className="entry--title">{props.title}</h2>
                <p className="entry--location">
                    <span className="country">{props.country}</span> ·{" "}
                    <a 
                        href={props.maps} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        View on Google Maps
                    </a>
                </p>
                <p className="entry--text">{props.text}</p>
            </div>
        </article>
    );
}

import './LocationHint.css';

const LocationHint = () => {
    return(
        <div className="google_map_hint">
            <span className="google_map_hint__title">
                Location
            </span>
            <span className="google_map_hint__description">
                central building of Kryvyi Rih National University
            </span>
            <a className="google_map_hint__link" target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=КриворізькийНаціональнийУніверситет">See the path on google map</a>
        </div>
    )
}

export default LocationHint;
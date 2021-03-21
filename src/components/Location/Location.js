import './Location.css';
import {GoogleMap,
    Marker,
    useLoadScript} from '@react-google-maps/api';
import mapStyle from './mapStyle';
import marker from '../../content/marker.png';
import LocationHint from '../LocationHint/LocationHint';

const Location = () => {

    const options = {
        styles: mapStyle,
        disableDefaultUI: true
    }

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDu6yEgl58nbNJ_TWh_NnlM5LdC-uP0QrM',
        libraries: ['places']
    })
    if(loadError) return "Error loadling map"
    if(!isLoaded) return "Loading Maps..."
    return(
    <div>
        <GoogleMap
            center={{lat: 47.90587791825118, lng: 33.40050596245398}}
            zoom={17}
            mapContainerClassName="google_map__map"
            options={options}>
            <Marker
                position={{lat: 47.90567791825118, lng: 33.40140596245398}}
                icon={{
                    url: marker,
                }}
            />
            <LocationHint/>
        </GoogleMap>
    </div>)
}

export default Location;
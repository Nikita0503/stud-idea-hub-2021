import './Location.css';
import {GoogleMap,
    Marker,
    useLoadScript} from '@react-google-maps/api';
import mapStyle from './mapStyle';
import marker from '../../content/marker.png';

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
            center={{lat: 47.90567791825118, lng: 33.40140596245398}}
            zoom={17}
            mapContainerClassName="google-map"
            options={options}>
            <Marker
                position={{lat: 47.90567791825118, lng: 33.40140596245398}}
                icon={{
                    url: marker,
                }}
            />
        </GoogleMap>
    </div>)
}

export default Location;
import './usm.css';
import { GoogleMap,withScriptjs,withGoogleMap,Marker } from 'react-google-maps';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
const MyMap = () => {

return (
<GoogleMap defaultZoom={15} defaultCenter={{lat:43.64709607777706,lng:-79.39544712511132}}>

    <Marker position={{lat:43.64709607777706,lng:-79.39544712511132}}>
    </Marker>
</GoogleMap>

     );
}

const WrappedMap=withScriptjs(withGoogleMap(MyMap))

export default function GoogleMapC(){
    return(
        <div className="okaymap" style={{width: '100%', height: '320px'}}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAHOGKMyl_Ta_rVt5DtVSuhk_5qI7SUWPk`}
            loadingElement={<div style={{height:"320px"}}/>}
            containerElement={<div style={{height:"320px"}}/>}
            mapElement={<div style={{height:"100%"}}/>}
           /> 
        </div>

    )
}


import { useEffect, useRef } from 'react'
import L from 'leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css'
/* 
Mutate default marker icon
Github issue: https://github.com/Leaflet/Leaflet/issues/4968 
*/
import markerIcon2X from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2X,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const initMap = () => {
    return L.map('map', {
        layers: [
            L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
                attribution:
                '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }),
        ]
    });
}

const Map = ({ places, onInit }) => {
    const mapRef = useRef(null);
    const featureGroupRef = useRef(null);


    useEffect(() => {
        mapRef.current = initMap();
        mapRef.current.resetPan = () => mapRef.current.fitBounds(featureGroupRef?.current?.getBounds());
        onInit(mapRef.current);

        return () => mapRef.current.remove();
    }, []);

    useEffect(() => {
        featureGroupRef.current = L.featureGroup().addTo(mapRef.current);

        return () => featureGroupRef.current.remove();
    }, []);
    
    useEffect(() => {
        places.forEach(({ text, coordinates }) => {
            L.marker(coordinates, { title: text }).addTo(featureGroupRef.current);
        });
        mapRef.current.fitBounds(featureGroupRef.current.getBounds())
    }, [places])

    return (
        <div id="map"></div> 
    )
}

export default Map;

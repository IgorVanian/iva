import { useEffect, useRef } from 'react'
import L, { map } from 'leaflet'
import './Map.css'

const initMap = () => {
    return L.map('map', {
        center: [49.8419, 24.0315],
        zoom: 16,
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
    }, []);

    useEffect(() => {
        featureGroupRef.current = L.featureGroup().addTo(mapRef.current);
    }, []);
    
    useEffect(() => {
        places.forEach(({ text, coordinates }) => {
            L.marker(coordinates, { title: text }).addTo(featureGroupRef.current);
        });
        mapRef.current.fitBounds(featureGroupRef.current.getBounds())
    }, [])

    return (
        <div id="map"></div> 
    )
}

export default Map;

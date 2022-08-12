import React from 'react';
import { MapContainer, TileLayer, useMap, Popup, Marker,} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import GeojsonLayer from '../GeojsonLayer/GeojsonLayer';
import classes from './MapComponent.module.scss'

const MapComponent = () => {
  const position = [55.702868, 38.530865];
  return (
    <div className={classes.root}>
    	<MapContainer className={classes.map} center={position} zoom={7} scrollWheelZoom={false}>
	      <TileLayer
	        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	      />
	      <GeojsonLayer />
	    </MapContainer>
    </div>
  );
};

export default MapComponent;

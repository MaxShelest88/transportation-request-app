import React, { useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import GeojsonLayer from '../GeojsonLayer/GeojsonLayer';
import classes from './MapComponent.module.scss';
import { useState } from 'react';

const MapComponent = () => {

  const [position, setPositon] = useState(([55.75396, 37.620393]));

  return (
    <div className={classes.root}>
      <MapContainer
        className={classes.map}
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <GeojsonLayer />
      </MapContainer>
    </div>
  );
};

export default MapComponent;

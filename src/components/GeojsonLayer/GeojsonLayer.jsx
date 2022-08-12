import React from 'react';
import L from 'leaflet';
import { GeoJSON, FeatureGroup, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { selectFeatures } from '../../redux/route/selectors';

import iconMarker from '../../assets/marker.svg';

const style = {
  color: '#279ce4',
  weight: 3,
  opacity: 1,
  fillColor: 'red',
};

const icon = new L.Icon({
  iconUrl: iconMarker,
  iconRetinaUrl: iconMarker,
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
});

const GeojsonLayer = () => {
  const features = useSelector(selectFeatures);

  return (
    <FeatureGroup>
      {features.map((f) => {
        console.log();
        const startWaypoint = [...f.properties.waypoints[0].location].reverse();
        const finishWaypoint = [...f.properties.waypoints[1].location].reverse();
        return (
          <GeoJSON key={f.properties.time} data={f} style={style}>
            <Marker icon={icon} position={startWaypoint}>
              <Popup>Точка погрузки</Popup>
            </Marker>
            <Marker icon={icon} position={finishWaypoint}>
              <Popup>Точка Разгрузки</Popup>
            </Marker>
          </GeoJSON>
        );
      })}
    </FeatureGroup>
  );
};

export default GeojsonLayer;

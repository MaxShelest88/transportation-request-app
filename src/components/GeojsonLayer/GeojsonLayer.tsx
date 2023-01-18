import React from 'react';
import L from 'leaflet';
import { GeoJSON, FeatureGroup, Marker, Tooltip } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { selectFeatures } from '../../redux/route/selectors';
import iconMarker from '../../assets/marker.svg';
import { Waypoint } from '../../types/waypoint';

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

const GeojsonLayer: React.FC = () => {
  const features: GeoJSON.Feature[] = useSelector(selectFeatures);
  return (
    <FeatureGroup>
      {features.map((f) => {
        const startWaypoint: Waypoint = [
          ...f.properties?.waypoints[0].location,
        ].reverse() as Waypoint;
        const finishWaypoint: Waypoint = [
          ...f.properties?.waypoints[1].location,
        ].reverse() as Waypoint;
        return (
          <GeoJSON
            key={f.properties?.time}
            data={f}
            style={style}
          >
            <Marker
              icon={icon}
              position={startWaypoint}
            >
              <Tooltip>Точка Погрузки</Tooltip>
            </Marker>
            <Marker
              icon={icon}
              position={finishWaypoint}
            >
              <Tooltip>Точка Разгрузки</Tooltip>\д
            </Marker>
          </GeoJSON>
        );
      })}
    </FeatureGroup>
  );
};

export default GeojsonLayer;

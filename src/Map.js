import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

function SubComponent({ center, zoom }) {
  const map = useMap();
  console.log(map);
  map.setView(center, zoom);
  return null;
}

function Map({ countries, casesType, center, zoom }) {
  console.log(center);
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          minZoom={2}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SubComponent center={center} zoom={zoom} />

        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;

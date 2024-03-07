"use client";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, Popup, Circle } from "react-leaflet";
import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import MarkShadow from "../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
const Map = () => {
  return (
    <div>
      <MapContainer
        style={{
          height: "600px",
          width: "100%",
        }}
        center={[-21.4551161, 47.0933359]}
        zoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkShadow.src,
              shadowSize: [41, 41],
            })
          }
          position={[-21.4551161, 47.0933359]}
        >
          <Circle
            center={[-21.4551161, 47.0933359]}
            radius={50}
            color="red"
            fillColor="#f03"
            fillOpacity={0.5}
          />
          <Popup>
            <b> ENI Fianarantsoa </b>
            <br />
            Venez nous rejoindre
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

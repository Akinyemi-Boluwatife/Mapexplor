import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../Contexts/CitiesContext";
import { useGetTheUrlPosition } from "../hooks/useGetTheUrlPosition";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
// import { useGeolocation } from "../hooks/useGeolocation";

function Map() {
  const [myCitylat, myCitylng] = useGetTheUrlPosition();
  const [mapPosition, setMapPosition] = useState([52, 0.49]);
  const { cities } = useCities();

  const {
    getPosition,
    position: myCurPos,
    isLoading: isLoadingPosition,
  } = useGeolocation();

  useEffect(
    function () {
      if (myCitylat && myCitylng) setMapPosition([myCitylat, myCitylng]);
    },
    [myCitylat, myCitylng]
  );

  useEffect(
    function () {
      if (myCurPos) setMapPosition([myCurPos.lat, myCurPos.lng]);
    },
    [myCurPos]
  );

  return (
    <div className={styles.mapContainer}>
      {!myCurPos && (
        <Button onClick={getPosition} type="position">
          Get current position
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={7}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.cityName}</span>
              <span className={styles.mid}>{city.emoji} </span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      // console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;

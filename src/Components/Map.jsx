import { useGeolocation } from "../hooks/useGeolocation";
import styles from "./Map.module.css";

function Map() {
  const { getPosition, position } = useGeolocation();
  console.log(position);
  return (
    <section className={styles.map}>
      map <button onClick={getPosition}>hey</button>{" "}
      {position ? `${position.lat}, ${position.lng}` : "nannnn"}
    </section>
  );
}

export default Map;

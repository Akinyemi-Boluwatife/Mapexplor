import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import mapImage from "../../MapEXPLOR.png";

function Logo() {
  return (
    <Link to="/">
      <img src={mapImage} className={styles.logo} alt="map" />
    </Link>
  );
}

export default Logo;

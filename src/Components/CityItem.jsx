import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  const { cityName, country, emoji, date, position, id } = city;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityitem}
      >
        <p>
          {emoji} <br /> {country}
        </p>
        <p>
          {cityName} <br /> {formatDate(date)}
        </p>
        <button>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;

import styles from "./City.module.css";
import { useEffect } from "react";
import { useCities } from "../Contexts/CitiesContext";
// import { useGetTheUrlPosition } from "../hooks/useGetTheUrlPosition";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function City() {
  const { getCity, currentCity, isLoading } = useCities();
  const { id } = useParams();
  // const [lat, lng] = useGetTheUrlPosition();

  const { cityName, country, emoji, date, notes } = currentCity;

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className={styles.city}>
        <div className={styles.ctry}>
          {country} <span className={styles.bold}>{emoji}</span>
        </div>
        <div className={styles.ctyn}>City: {cityName}</div>
        <div className={styles.ctyp}>
          <p>Date: {date && formatDate(date)}</p>
          {notes && <p>Notes: {notes}</p>}
        </div>
      </div>
    </>
  );
}

export default City;

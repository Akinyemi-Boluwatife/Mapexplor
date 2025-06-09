import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import { useCities } from "../Contexts/CitiesContext";
import Loader from "./Loader";
function CityList() {
  const { cities, isLoading } = useCities();
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <ul className={styles.citylist}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </>
  );
}

export default CityList;

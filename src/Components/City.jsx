import { useEffect } from "react";
import { useCities } from "../Contexts/CitiesContext";
import { useGetTheUrlPosition } from "../hooks/useGetTheUrlPosition";
import { useParams } from "react-router-dom";

function City() {
  const { getCity, currentCity } = useCities();
  const { id } = useParams();
  const [lat, lng] = useGetTheUrlPosition();
  console.log(currentCity);
  console.log(typeof id);

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );
  return (
    <div>
      get info about the current city {lat} {lng} {id} {currentCity.date}
    </div>
  );
}

export default City;

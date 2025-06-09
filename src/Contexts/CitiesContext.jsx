import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

//base url
const bASE_URL = "http://localhost:9009";

function CitiesProvider({ children }) {
  // get cities/citiesList
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  const [isError, setIsError] = useState("");

  //useEffect to fetch cities
  useEffect(function () {
    async function fectCities() {
      try {
        setIsLoading(true);
        setIsError("");
        const res = await fetch(`${bASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log(data);
      } catch (err) {
        setIsError("There was an error while loading the cities");
      } finally {
        setIsLoading(false);
      }
    }
    fectCities();
  }, []);

  // get details about a city

  async function getCity(id) {
    try {
      setIsLoading(true);
      setIsError("");
      const res = await fetch(`${bASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      setIsError("There was a big problem while fetching the city's data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, isError, getCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

//   to be able to use the context in other files
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the cities provider");
  return context;
}
export { CitiesProvider, useCities };

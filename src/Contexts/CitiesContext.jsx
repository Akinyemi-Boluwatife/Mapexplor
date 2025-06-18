import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const CitiesContext = createContext();

//base url
const bASE_URL = "http://localhost:9009";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  isError: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };

    case "cities/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload.id),
      };

    case "failure":
      return { ...state, isError: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, isError }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});
  // const [isError, setIsError] = useState("");

  //useEffect to fetch cities
  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${bASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
        // console.log(data);
      } catch (err) {
        dispatch({
          type: "failure",
          payload: "There was an error while loading the cities",
        });
      }
    }
    fetchCities();
  }, []);

  // get details about a city
  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${bASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch {
        dispatch({
          type: "city/loaded",
          payload: "There was a big problem while frtching the city data",
        });
      }
    },
    [currentCity.id]
  );

  // DELETE CITY
  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${bASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "cities/deleted", payload: data });
    } catch (err) {
      dispatch({ type: "failure", payload: "Error occured while deleting" });
    }
  }

  // Create new city

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${bASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "cities/created", payload: data });
    } catch (err) {
      dispatch({
        type: "failure",
        payload: "Error occured while adding new city",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        isError,
        getCity,
        deleteCity,
        createCity,
      }}
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

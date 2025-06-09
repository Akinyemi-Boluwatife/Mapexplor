import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";

function CountryList() {
  const cities = [
    {
      cityName: "Lisbon",
      country: "Nigeria",
      emoji: "🇵🇹",
      date: "2027-10-31T15:59:59.138Z",
      notes: "My favorite city so far!",
      position: {
        lat: 38.727881642324164,
        lng: -9.140900099907554,
      },
      id: 73930385,
    },
    {
      cityName: "Madrid",
      country: "Spain",
      emoji: "🇪🇸",
      date: "2027-07-15T08:22:53.976Z",
      notes: "",
      position: {
        lat: 40.46635901755316,
        lng: -3.7133789062500004,
      },
      id: 17806751,
    },
    {
      cityName: "Villalgordo del Marquesado",
      country: "England",
      emoji: "🇪🇸",
      date: "2025-03-25T23:39:57.135Z",
      notes: "mannn",
      position: {
        lat: "39.6733703917656",
        lng: "-2.5048828125000004",
      },
      id: 98443198,
    },
    {
      cityName: "Castelo Branco",
      country: "Portugal",
      emoji: "🇵🇹",
      date: "2025-04-05T17:28:39.720Z",
      notes: "good",
      position: {
        lat: "39.87601941962116",
        lng: "-7.536621093750001",
      },
      id: 98443199,
    },
  ];
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countrylist}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;

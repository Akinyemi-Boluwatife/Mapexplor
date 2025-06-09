import styles from "./CountryItem.module.css";
function CountryItem({ country }) {
  return (
    <li className={styles.card}>
      <p>
        {country.country} <br />
        <span className={styles.bold}> {country.emoji} </span>
      </p>
    </li>
  );
}

export default CountryItem;

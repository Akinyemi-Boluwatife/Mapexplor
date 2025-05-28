import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function AppNav() {
  return (
    <div className={styles.appnav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;

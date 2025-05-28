import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/fee"> Fee </NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

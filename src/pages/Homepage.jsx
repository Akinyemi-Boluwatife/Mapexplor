import styles from "./Homepage.module.css";
import PageNav from "../Components/PageNav";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          As you discover new places,
          <br /> mapexplor records your path.
        </h1>

        <h3>
          Mark your path across the globe with a map that tracks your every
          move. Never lose a memory, and let your friends follow your journey.
        </h3>

        <Link to="/login" className="cta">
          Record now
        </Link>
      </section>
    </main>
  );
}

export default Homepage;

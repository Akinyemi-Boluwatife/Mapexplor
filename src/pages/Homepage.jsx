import styles from "./Homepage.module.css";
import PageNav from "../Components/PageNav";
// import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      {/* <Link to="/login" className="cta">
        Go to login page
      </Link> */}
    </main>
  );
}

export default Homepage;

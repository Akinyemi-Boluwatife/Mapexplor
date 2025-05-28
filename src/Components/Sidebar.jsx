import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <AppNav />

      <Outlet />
    </section>
  );
}

export default Sidebar;

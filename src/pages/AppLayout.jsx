import styles from "./AppLayout.module.css";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
function AppLayout() {
  return (
    <main className={styles.applayout}>
      <Sidebar />
      <Map />
    </main>
  );
}

export default AppLayout;

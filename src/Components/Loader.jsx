import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.cont}>
      <div className={styles.loader}></div>;
    </div>
  );
}

export default Loader;

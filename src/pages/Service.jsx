import styles from "./Service.module.css";
import PageNav from "../Components/PageNav.jsx";
function Service() {
  return (
    <main className={styles.service}>
      <PageNav />

      <section>
        <div className={styles.imgcont}>
          <img src="srv.jpg" />
        </div>
        <div className={styles.details}>
          <h1>About Mapexplor</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quisquam tempora voluptas alias commodi saepe eligendi ex nemo
            beatae corrupti? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et, tempore!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At maxime
            nostrum error enim voluptatem possimus iure eos rerum ratione ipsum!
          </p>
        </div>
      </section>
    </main>
  );
}

export default Service;

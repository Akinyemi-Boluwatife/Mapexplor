import styles from "./Login.module.css";
import PageNav from "../Components/PageNav";
import Button from "../Components/Button";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("boluakinyemi500@gmail.com");
  const [password, setPassword] = useState("boluwatife");

  function handlesubmit(e) {
    e.preventDefault();
  }
  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handlesubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;

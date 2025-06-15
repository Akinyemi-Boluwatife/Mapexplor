import styles from "./Login.module.css";
import PageNav from "../Components/PageNav";
import Button from "../Components/Button";
import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/FakeAuthenticationContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("boluintech@gmail.com");
  const [password, setPassword] = useState("lkjhgfd");
  const Navigate = useNavigate();

  const { isAuthenticated, login } = useAuth();

  function handlesubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        Navigate(`/app`, { replace: true });
      }
    },
    [Navigate, isAuthenticated]
  );

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

import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/FakeAuthenticationContext";
import styles from "./User.module.css";

// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// };

function User() {
  //nav
  const navigate = useNavigate();
  //user and logout
  const { user, logout } = useAuth();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate(`/`);
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

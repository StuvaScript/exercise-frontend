import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoginRegisterButtons from "../components/LoginRegisterButtons";
import LogoutButton from "../components/LogoutButton";
import styles from "./Header.module.css";

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <button>Site logo</button>
      </Link>

      <div className={styles["upper-right-side-header"]}>
        {user && <p className={styles["user-name"]}>Hello {user}</p>}

        {user ? <LogoutButton /> : <LoginRegisterButtons />}
      </div>

      <h1 className={styles.title}>Flexecution</h1>

      <div className={styles.navbar}>
        {user && (
          <>
            <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
          </>
        )}
      </div>
    </div>
  );
}

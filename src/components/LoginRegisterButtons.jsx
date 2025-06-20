import { Link } from "react-router-dom";
import styles from "./LoginRegisterButtons.module.css";

export default function LoginRegisterButtons() {
  return (
    <div className={styles["button-group"]}>
      <Link to="/login">
        <button>Log in</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

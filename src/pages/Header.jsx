import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoginRegisterButtons from "../components/LoginRegisterButtons";
import LogoutButton from "../components/LogoutButton";
import style from "./Header.module.css";

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <div id={style.header}>
      <Link to="/">
        <button className={style.red}>Site logo</button>
      </Link>
      <h1>Flexecution {user && `Hello ${user}`}</h1>

      {user && (
        <Link to="/">
          <button>Home</button>
        </Link>
      )}
      {user && (
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      )}
      {user ? <LogoutButton /> : <LoginRegisterButtons />}
    </div>
  );
}

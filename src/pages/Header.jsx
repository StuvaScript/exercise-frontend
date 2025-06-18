import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoginRegisterButtons from "../components/LoginRegisterButtons";
import LogoutButton from "../components/LogoutButton";

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Link to="/">
        <button>Site logo</button>
      </Link>
      <h1>I am the header. {user && `Hello ${user}`}</h1>

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
    </>
  );
}

import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);
  return (
    <Link to="/">
      <button onClick={logout}>Log out</button>
    </Link>
  );
}

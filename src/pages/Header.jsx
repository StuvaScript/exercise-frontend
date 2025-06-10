import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">
        <button>Site logo</button>
      </Link>

      <h1>I am the header</h1>

      <Link to="/login">
        <button>Log in</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </>
  );
}

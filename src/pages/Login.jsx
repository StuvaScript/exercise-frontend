import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h2>I am the Login page</h2>
      <Link to="/dashboard">
        <button>Login</button>
      </Link>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </>
  );
}

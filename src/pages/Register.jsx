import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <h2>I am the Register page</h2>
      <Link to="/dashboard">
        <button>Register</button>
      </Link>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </>
  );
}

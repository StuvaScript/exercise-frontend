import { Link } from "react-router-dom";
export default function LoginRegisterButtons() {
  return (
    <>
      <Link to="/login">
        <button>Log In</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </>
  );
}

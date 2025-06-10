import { Link, useLocation } from "react-router-dom";

export default function AddEditExercise() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <h2>I am the AddEditExercise page</h2>
      <p>{data === "edit" ? "Edit form" : "Add form"}</p>
      <Link to={"/dashboard"}>
        <button>AddEdit Exercise</button>
      </Link>
      <Link to="/dashboard">
        <button>Cancel</button>
      </Link>
    </>
  );
}

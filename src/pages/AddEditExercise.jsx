import { Link, useLocation } from "react-router-dom";

export default function AddEditExercise() {
  {
    /* //todo **`` Trying to get state from the Dashboard component */
  }
  const location = useLocation();
  console.log("location:", location);
  const data = location.state;
  console.log("data:", data);
  return (
    <>
      <h2>I am the AddEditExercise page: {data}</h2>
      <Link to={"/dashboard"}>
        <button>AddEdit Exercise</button>
      </Link>
      <Link to="/dashboard">
        <button>Cancel</button>
      </Link>
    </>
  );
}

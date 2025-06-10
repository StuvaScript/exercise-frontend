import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h2>I am the Dashboard page</h2>
      <h3>Exercises</h3>
      <Link to="/add-edit-exercise">
        <button>Add Exercise</button>
      </Link>

      {/* //todo **`` Trying to pass state to the AddEditExercise component */}

      <Link to={{ pathname: "/add-edit-exercise", state: "edit" }}>
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </>
  );
}

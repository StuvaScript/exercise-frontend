import { Link } from "react-router-dom";

export default function Exercise({
  name,
  sets,
  reps,
  measurement,
  measurementUnit,
}) {
  return (
    <div>
      {name}, {sets}, {reps}, {measurement}, {measurementUnit}
      <Link to="/add-edit-exercise" state="edit">
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  );
}

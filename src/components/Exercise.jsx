import { Link } from "react-router-dom";

export default function Exercise({
  name,
  sets,
  reps,
  measurement,
  measurementUnit,
  _id,
}) {
  const exerciseData = {
    name,
    sets,
    reps,
    measurement,
    measurementUnit,
    id: _id,
  };

  return (
    <div>
      {name}, {sets}, {reps}, {measurement}, {measurementUnit}
      <Link to="/add-edit-exercise" state={exerciseData}>
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  );
}

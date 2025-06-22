import { Link } from "react-router-dom";
import styles from "./Exercise.module.css";

export default function Exercise({
  name,
  sets,
  reps,
  measurement,
  measurementUnit,
  _id,
  onDelete,
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
      <span>{name}</span>
      <span>{sets}</span>
      <span>{reps}</span>
      <span>{measurement}</span>
      <span>{measurementUnit}</span>
      <span className={styles["row-buttons"]}>
        <Link to="/add-edit-exercise" state={exerciseData}>
          <button>Edit</button>
        </Link>
        <button onClick={() => onDelete(_id)}>Delete</button>
      </span>
    </div>
  );
}

import { Link } from "react-router-dom";
import { deleteRequest, getRequest } from "../HTTPRequests";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import ExerciseContainer from "../components/ExerciseContainer";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [exercises, setExercises] = useState([]);

  const { token, user } = useContext(AuthContext);

  const getExerciseData = useCallback(async () => {
    const url = "/api/v1/exercises";
    try {
      const response = await getRequest(url, token);

      if (response.status === 200) {
        setExercises(response.data.exercises);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getExerciseData();
    }
  }, [token, getExerciseData]);

  const handleDelete = async (id) => {
    const url = `/api/v1/exercises/${id}`;

    try {
      const response = await deleteRequest(url, token);

      if (response.status === 200) {
        getExerciseData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Dashboard</h2>

      <div className={styles["h3-and-add-button"]}>
        <h3>{user}'s Exercises</h3>
        <Link to="/add-edit-exercise">
          <button>Add Exercise</button>
        </Link>
      </div>

      {exercises.length > 0 && (
        <ExerciseContainer handleDelete={handleDelete} exercises={exercises} />
      )}
    </div>
  );
}

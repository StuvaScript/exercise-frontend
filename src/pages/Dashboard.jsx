import { Link } from "react-router-dom";
import { getRequest } from "../HTTPRequests";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Exercise from "../components/Exercise";

export default function Dashboard() {
  const [exercises, setExercises] = useState([]);
  console.log("exercises:", exercises);

  const { token } = useContext(AuthContext);
  const url = "/api/v1/exercises";

  useEffect(() => {
    getExerciseData();

    async function getExerciseData() {
      try {
        const response = await getRequest(url, token);

        if (response.status === 200) {
          setExercises(response.data.exercises);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [token]);

  return (
    <>
      <h2>I am the Dashboard page</h2>
      <h3>Exercises</h3>
      <Link to="/add-edit-exercise">
        <button>Add Exercise</button>
      </Link>

      {exercises.length > 0 &&
        exercises.map((exercise) => (
          <Exercise key={exercise._id} {...exercise} />
        ))}
    </>
  );
}

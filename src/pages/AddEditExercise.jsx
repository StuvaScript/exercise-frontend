import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postRequest } from "../HTTPRequests";
import AuthContext from "../context/AuthContext";

export default function AddEditExercise() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    reps: "",
    sets: "",
    measurement: "",
    measurementUnit: "",
  });

  const [error, setError] = useState({
    value: false,
    msg: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const { token } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError({
      value: false,
      msg: "",
    });

    const url = "/api/v1/exercises";
    const body = {
      name: formInputs.name,
      reps: formInputs.reps,
      sets: formInputs.sets,
      measurement: formInputs.measurement,
      measurementUnit: formInputs.name,
    };

    try {
      const response = await postRequest(url, body, token);

      console.log("response:", response);
      if (response.status === 201) {
        setFormInputs({
          name: "",
          reps: "",
          sets: "",
          measurement: "",
          measurementUnit: "",
        });

        navigate("/dashboard");
      }
    } catch (err) {
      setError({ value: true, msg: `${err.response.data.msg}` });
    }
  };

  return (
    <>
      <h2>I am the AddEditExercise page</h2>
      <p>{data === "edit" ? "Edit form" : "Add form"}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name: </label>
        <input
          name="name"
          id="name"
          value={formInputs.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="sets">sets: </label>
        <input
          name="sets"
          id="sets"
          type="number"
          min={0}
          value={formInputs.sets}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="reps">reps: </label>
        <input
          name="reps"
          id="reps"
          type="number"
          min={0}
          value={formInputs.reps}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="measurement">measurement: </label>
        <input
          name="measurement"
          id="measurement"
          type="number"
          min={0}
          value={formInputs.measurement}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="measurementUnit">measurement Unit: </label>
        <input
          name="measurementUnit"
          id="measurementUnit"
          value={formInputs.measurementUnit}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">
          {data === "edit" ? "Edit exercise" : "Add exercise"}
        </button>

        <Link to="/dashboard">
          <button type="button">Cancel</button>
        </Link>
      </form>
      {error.value && <p>{error.msg}</p>}
    </>
  );
}

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { patchRequest, postRequest } from "../HTTPRequests";
import AuthContext from "../context/AuthContext";
import styles from "./FormStyling.module.css";

export default function AddEditExercise() {
  const location = useLocation();
  const exerciseID = location.state?.id || null;

  const [formInputs, setFormInputs] = useState(() => {
    const state = location.state ?? {};

    const sanitizeValue = (value) =>
      value === null || value === undefined ? "" : value;

    return {
      name: sanitizeValue(state.name),
      reps: sanitizeValue(state.reps),
      sets: sanitizeValue(state.sets),
      measurement: sanitizeValue(state.measurement),
      measurementUnit: sanitizeValue(state.measurementUnit),
    };
  });

  const [error, setError] = useState({
    value: false,
    msg: "",
  });

  const navigate = useNavigate();
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

    const url = exerciseID
      ? `/api/v1/exercises/${exerciseID}`
      : "/api/v1/exercises";

    const body = {
      name: formInputs.name,
      reps: formInputs.reps,
      sets: formInputs.sets,
      measurement: formInputs.measurement,
      measurementUnit: formInputs.measurementUnit,
    };

    try {
      const response = exerciseID
        ? await patchRequest(url, body, token)
        : await postRequest(url, body, token);

      if (response.status === 200 || response.status === 201) {
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
    <div className={styles["form-page"]}>
      <h2>{exerciseID ? "Edit Exercise" : "Add Exercise"}</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles["input-group"]}>
          <div className={styles["label-and-input"]}>
            <label htmlFor="name">
              Name <span className={styles.required}>*</span>
            </label>
            <input
              name="name"
              id="name"
              value={formInputs.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["label-and-input"]}>
            <label htmlFor="sets">Sets </label>
            <input
              name="sets"
              id="sets"
              type="number"
              min={0}
              value={formInputs.sets}
              onChange={handleChange}
            />
          </div>

          <div className={styles["label-and-input"]}>
            <label htmlFor="reps">Reps </label>
            <input
              name="reps"
              id="reps"
              type="number"
              min={0}
              value={formInputs.reps}
              onChange={handleChange}
            />
          </div>

          <div className={styles["label-and-input"]}>
            <label htmlFor="measurement">
              Measurement <span className={styles.required}>*</span>
            </label>
            <input
              name="measurement"
              id="measurement"
              type="number"
              min={0}
              value={formInputs.measurement}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["label-and-input"]}>
            <label htmlFor="measurementUnit">
              Measurement Unit <span className={styles.required}>*</span>
            </label>
            <input
              name="measurementUnit"
              id="measurementUnit"
              value={formInputs.measurementUnit}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.buttons}>
            <button type="submit">
              {exerciseID ? "Edit Exercise" : "Add Exercise"}
            </button>

            <Link to="/dashboard">
              <button type="button">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
      {error.value && <p>{error.msg}</p>}
    </div>
  );
}

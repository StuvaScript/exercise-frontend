import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { postRequest } from "../HTTPRequests";
import styles from "./LoginRegister.module.css";

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    pass: "",
  });

  const [error, setError] = useState({
    value: false,
    msg: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

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

    const url = "/api/v1/auth/login";
    const body = {
      email: formInputs.email,
      password: formInputs.pass,
    };

    try {
      const response = await postRequest(url, body);

      if (response.status === 200) {
        setFormInputs({
          email: "",
          pass: "",
        });

        const {
          user: { name },
          token,
        } = response.data;

        login(name, token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError({ value: true, msg: `${err.response.data.msg}` });
    }
  };

  return (
    <div className={styles["form-page"]}>
      <h2>Log In</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles["input-group"]}>
          <div className={styles["label-and-input"]}>
            <label htmlFor="email">
              Email <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formInputs.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["label-and-input"]}>
            <label htmlFor="pass">
              Password <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              value={formInputs.pass}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <button type="submit">Log In</button>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>
      </form>
      {error.value && <p>{error.msg}</p>}
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ family }) {
  const [formInputs, setFormInputs] = useState({
    email: "",
    pass: "",
  });

  const [error, setError] = useState({
    value: false,
    msg: "",
  });

  const navigate = useNavigate();

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

    try {
      const response = await axios.post(
        "/api/v1/auth/login",
        {
          email: formInputs.email,
          password: formInputs.pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response:", response);

      if (response.status === 200) {
        setFormInputs({
          email: "",
          pass: "",
        });

        navigate("/dashboard");
      }
    } catch (err) {
      setError({ value: true, msg: `${err.response.data.msg}` });
    }
  };

  return (
    <>
      <h2>I am the Login page {family}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formInputs.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="pass">password: </label>
        <input
          type="password"
          name="pass"
          id="pass"
          value={formInputs.pass}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Login</button>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </form>
      {error.value && <p>{error.msg}</p>}
    </>
  );
}

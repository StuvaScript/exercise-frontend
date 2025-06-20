import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { postRequest } from "../HTTPRequests";

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
    <div>
      <h2 className="test">I am the Login page {family}</h2>

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
    </div>
  );
}

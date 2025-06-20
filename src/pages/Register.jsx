import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { postRequest } from "../HTTPRequests";

export default function Register() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    pass1: "",
    pass2: "",
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

    if (formInputs.pass1 !== formInputs.pass2) {
      setError({ value: true, msg: "Passwords don't match" });
    } else {
      const url = "/api/v1/auth/register";
      const body = {
        name: formInputs.name,
        email: formInputs.email,
        password: formInputs.pass1,
      };

      try {
        const response = await postRequest(url, body);

        if (response.status === 201) {
          setFormInputs({
            name: "",
            email: "",
            pass1: "",
            pass2: "",
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
    }
  };

  return (
    <div>
      <h2 className="test">I am the Register page</h2>

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

        <label htmlFor="pass1">password: </label>
        <input
          type="password"
          name="pass1"
          id="pass1"
          value={formInputs.pass1}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="pass2">verify password: </label>
        <input
          type="password"
          name="pass2"
          id="pass2"
          value={formInputs.pass2}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Register</button>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </form>
      {error.value && <p>{error.msg}</p>}
    </div>
  );
}

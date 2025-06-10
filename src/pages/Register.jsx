import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  // todo **`` Set up an error state and if its true, display the error message. (passwords don't match and invalid email)

  // todo **`` Set up a redirect on successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formInputs.pass1 !== formInputs.pass2) {
      console.error("Passwords don't match!!");
    } else {
      try {
        const response = await axios.post(
          "/api/v1/auth/register",
          {
            name: formInputs.name,
            email: formInputs.email,
            password: formInputs.pass1,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("response:", response);

        if (response.status === 201) {
          setFormInputs({
            name: "",
            email: "",
            pass1: "",
            pass2: "",
          });
        }
      } catch (err) {
        console.error(err);
        console.error(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <h2>I am the Register page</h2>

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
    </>
  );
}

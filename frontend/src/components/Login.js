import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const submitForm = e => {
    e.preventDefault();
  };
  const grabValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login!</h1>
      <form onSubmit={submitForm}>
        <label>
          Email
          <input
            type='email'
            name='email'
            required
            placeholder='E-mail'
            onChange={grabValue}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            required
            placeholder='Password'
            onChange={grabValue}
          />
        </label>
        <input type='submit' value='Login' />
        <Link to='/'>
          <input type='submit' value='Cancel' />
        </Link>
      </form>
    </div>
  );
}

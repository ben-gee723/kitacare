import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import axios from "axios";

export default function Login() {
  const { token, setToken } = useState({});
  const { isLogin, setIsLogin } = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const submitForm = e => {
    e.preventDefault();
    axios({
      origin: "*",
      method: "POST",
      withCredentials: true,
      url: "http://localhost:3001/users/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      user: user,
    })
      .then(response => {
        console.log(response.cookies.get(["x-access-token"]));
        let token = response.cookies.get(["x-access-token"]);
        setToken(token);
        if (response.user.success) {
          console.log(response.user);
          setIsLogin(true);
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err));
  };
  const grabValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.fcontainer}>
      <form className={styles.loginContainer} onSubmit={submitForm}>
        <div className='reg'>
          <h1>Login to Account!</h1>
        </div>
        <div className='inputBox'>
          <label className='details'>E-mail</label>
          <br />
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            onChange={grabValue}
          />
        </div>
        <div className='inputBox'>
          <label className='details'>Password</label>
          <br />
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={grabValue}
          />
        </div>
        <br />
        <div className={styles.btnContainer}>
          <Link to='/'>
            <button className='cancel'>Cancel</button>
          </Link>
          <button type='submit' value='Login' className='next'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import axios from "axios";

export default function Login() {
  const {token, setToken} = useState({});
  const {isLogin, setIsLogin} = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitForm = e => {
    e.preventDefault();
    axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:3001/users/login",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      data: user,
    })
      .then(response => {
        console.log(response)
        if (response.data.success) {
          console.log(response.data.userInfo)
          setUser(response.data.userInfo)
          setIsLogin(true)
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.fcontainer}>
      <form onSubmit={submitForm}>
        <div className='reg'>
          <h1>Login!</h1>
        </div>

        <div className='inputBox'>
          <label className='details'>E-mail</label>
          <br />
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            onChange={(e)=>setUser({...user,email:e.target.value})}
          />
        </div>

        <div className='inputBox'>
          <label className='details'>Password</label>
          <br />
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={(e)=>setUser({...user,password:e.target.value})}
          />
        </div>

        <br />

        <Link to='/'>
          <button className='cancel'>Cancel</button>
        </Link>
        <button type='submit' value='Login' className='next'>
          Login
        </button>
      </form>
    </div>
  );
}

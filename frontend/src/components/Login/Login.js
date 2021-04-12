/** @format */

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import axios from "axios";
import { MyContext } from "../../Container";

export default function Login(props) {
  const { setIsLogin, setUser, user } = useContext(MyContext);
  console.log(props);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (props.location.state) {
      console.log(props.location.state);
      setFormData({
        email: props.location.state.email,
        password: props.location.state.password,
      });
    }
    // if (user.role) {
    //   user.role === "Manager"
    //     ? props.history.push({ pathname: "/manager" })
    //     : props.history.push({ pathname: "/tpage" });
    // }
  }, [user]);

  const submitForm = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/users/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setUser(response.data.userInfo.user);
          setIsLogin(true);
          console.log(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className='inputBox'>
          <label className='details'>Password</label>
          <br />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Login.module.scss';

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
    <div className={styles.fcontainer}>
      <form className={styles.loginContainer} onSubmit={submitForm}>
        <div className="reg">
            <h1>Login to Account!</h1>
        </div> 

        <div className='inputBox'>
          <label className='details'>E-mail</label><br/>
          <input type='email' name='email' placeholder='E-mail' onChange={grabValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Password</label><br/>
          <input type='password' name='password' placeholder='Password' onChange={grabValue}/>
        </div>

        <br/>
        <div className={styles.btnContainer}>
          <Link to='/'><button className="cancel">Cancel</button></Link>
          <button type='submit' value='Login' className='next'>Login</button>
        </div>
      </form>
    </div>
  );
}

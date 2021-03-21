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
    <div className='fcontainer'>
      <form onSubmit={submitForm}>
        <div className="reg">
            <h1>Login to your account!</h1>
        </div> 

        <div className='input-box'>
          <label className='details'>E-mail</label><br/>
          <input type='email' name='email' placeholder='E-mail' onChange={grabValue}/>
        </div>

        <div className='input-box'>
          <label className='details'>Password</label><br/>
          <input type='password' name='password' placeholder='Password' onChange={grabValue}/>
        </div>

        <br/>

        <Link to='/'><button className="cancel">Cancel</button></Link>
        <button type='submit' value='Login' className='next'>Login</button>
      </form>
    </div>
  );
}

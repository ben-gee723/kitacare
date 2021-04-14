import { NavLink } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "./Navbar.module.scss";
import { useContext} from "react";
import { MyContext } from "../../Container"


export default function Navbar() {
  
  const {isLogin, setIsLogin, setUser } = useContext(MyContext);
  const history = useHistory();

  const logoutHandle = () =>{
    console.log('123');
    localStorage.removeItem('kg')
    localStorage.removeItem('user')
    setIsLogin(false)
    setUser(null);
    history.push('/login');
  }

  return (
    <div className={styles.nav}>
      <div className={styles.lg}>
        <NavLink to="/">
          <img className={styles.logo} src={logo} alt="lg" />
        </NavLink>
        <div className={styles.kita}>Kitacare</div>
      </div>
      {isLogin ? (
        <div className={styles.navbtn}>
        <Link to='/login'>
          <button className="submit">My Profile</button>
        </Link>
        <div className={styles.navbtn}>
          <button onClick={logoutHandle} className="login">Logout</button>
        </div>
        </div>
        
      ) : (
        <div className={styles.navbtn}>
          <Link to="/register">
            <button className="submit">Register</button>
          </Link>
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        </div>
      )}
      
    </div>
  );
}

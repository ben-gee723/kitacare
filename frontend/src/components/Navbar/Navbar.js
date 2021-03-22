import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <div className={styles.nav}>
          <div className={styles.lg}>
              <NavLink to='/'>
                <img src={logo} alt='lg' />
              </NavLink>
              <div className={styles.kita}>
                Kitacare
            </div>
          </div>
            
            <div className={styles.navbtn}>
                <Link to='/register'>
                  <button className="submit">Register</button>
                </Link>
                <Link to='/login'>
                  <button className="login">Login</button>
                </Link>
            </div>
        </div>              
    )
}

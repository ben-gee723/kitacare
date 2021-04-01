import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "./navbar.module.scss";
import { useState } from "react";

export default function Navbar() {
  const [token, setToken] = useState("");

  return (
    <div className={styles.nav}>
      <div className={styles.lg}>
        <NavLink to="/">
          <img className={styles.logo} src={logo} alt="lg" />
        </NavLink>
        <div className={styles.kita}>Kitacare</div>
      </div>
      {token ? (
        <div className={styles.navbtn}>
          <Link to="/tpage">
            <button className="submit">My Profile</button>
          </Link>

          <button className="login">Logout</button>
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

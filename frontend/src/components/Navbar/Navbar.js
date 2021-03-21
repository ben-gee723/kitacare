import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Navbar() {
    return (
        <div className='nav'>
          <div className='lg'>
              <NavLink to='/'>
                <img src={logo} alt='lg' />
              </NavLink>
              <div className='kita'>
                Kitacare
            </div>
          </div>
            
            <div className='navbtn'>
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

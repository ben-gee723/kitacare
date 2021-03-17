import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Navbar() {
    return (
        <div>
            <div className='lg'>
                <NavLink to='/'>
                  <img src={logo} alt='lg' />
                </NavLink>
              </div>
        </div>
    )
}

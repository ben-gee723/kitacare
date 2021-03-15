import { Route, Link, Switch, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Register from "./components/Register";
import KgRegister from "./components/KgRegister";
import TeacherRegister from "./components/TeacherRegister";
import ManagerRegister from "./components/ManagerRegister";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className='App'>
      <ul>
        {/* Link * --> add ternary operator with isLogin */}
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/register'>
          <li>Register</li>
        </Link>
        <Link to='/kgregister'>
          <li>RegisterKita</li>
        </Link>
        <Link to='/tregister'>
          <li>RegisterTeacher</li>
        </Link>
        <Link to='/mregister'>
          <li>ManagerRegister</li>
        </Link>
        <Link to='/login'>
          <li>Login</li>
        </Link>
        <Link to='/logout'>
          <li>Logout</li>
        </Link>
      </ul>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/kgregister' component={KgRegister} />
        <Route path='/tregister' component={TeacherRegister} />
        <Route path='/mregister' component={ManagerRegister} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

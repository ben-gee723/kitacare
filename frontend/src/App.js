import { Route, Link, Switch, withRouter, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Register from "./components/Register";
import KgRegister from "./components/KgRegister";
import TeacherRegister from "./components/TeacherRegister";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
    <div className='App'>
      <h1>React App</h1>
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
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer/>
    </HashRouter>
  );
}

export default App;

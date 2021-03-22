import { Route, Link, Switch, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Register from "./components/RegisterForms/Register";
import KgRegister from "./components/RegisterForms/KgRegister";
import TeacherRegister from "./components/RegisterForms/TeacherRegister";
import ManagerRegister from "./components/RegisterForms/ManagerRegister";
import Login from "./components/Login/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar/Navbar";
import "./globalCSS/app.scss";
<<<<<<< HEAD
import Calendar from "./components/Calendar/Calendar";
=======
import Footer from "./components/Footer/index"
>>>>>>> develop

function App() {
  return (
    <div className='App'>

      <Navbar />
<<<<<<< HEAD
      <Link to='/register'>
        <li>Register</li>
      </Link>
      <Link to='/calendar'>
        <li>Calendar</li>
      </Link>
=======
>>>>>>> develop
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register' component={Register} />
        <Route path='/kgregister' component={KgRegister} />
        <Route path='/tregister' component={TeacherRegister} />
        <Route path='/mregister' component={ManagerRegister} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path="/calendar" component={Calendar} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
      
      
    </div>
  );
}

export default withRouter(App);

import { Route, Link, Switch, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Register from "./components/RegisterForms/Register";
import KgRegister2 from "./components/RegisterForms/KgRegister2";
import TeacherRegister from "./components/TeacherRegister";
import ManagerRegister2 from "./components/RegisterForms/ManagerRegister2";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar/Navbar";
import "./globalCSS/app.scss";

function App() {
  return (
    <div className='App'>

      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/kgregister' component={KgRegister2} />
        <Route path='/tregister' component={TeacherRegister} />
        <Route path='/mregister' component={ManagerRegister2} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route component={NotFound} />
      </Switch>
      
      
    </div>
  );
}

export default withRouter(App);

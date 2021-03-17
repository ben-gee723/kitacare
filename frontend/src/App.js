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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/kgregister' component={KgRegister} />
        <Route path='/tregister' component={TeacherRegister} />
        <Route path='/mregister' component={ManagerRegister} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route component={NotFound} />
      </Switch>
      
      <Footer/>
    </div>
  );
}

export default withRouter(App);

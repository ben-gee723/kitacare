/** @format */

import React from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Basics
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/index";
import "./globalCSS/app.scss";

// Login & Error
import Login from "./components/Login/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";

// Registration
import Register from "./components/RegisterForms/Register";
import KgRegister from "./components/RegisterForms/KgRegister";
import TeacherRegister from "./components/RegisterForms/TeacherRegister";
import ManagerRegister from "./components/RegisterForms/ManagerRegister";
import ChildRegister from "./components/RegisterForms/ChildRegister";

// Dashboard
import EditProfile from "./components/Mpage/EditProfile"; 
import Tpage from "./components/Tpage/Tpage";
import Mpage from "./components/Mpage/Mpage";
import Teachers from "./components/Mpage/Teachers";
import Calendar from "./components/Calendar/Calendar";
import Container from "./Container";
//for product:
//import Container from "./Container_product";

import Attendance from "./components/Tpage/Attendance/Attendance";
import AllGroups from "./components/GroupsPages/AllGroups";
import SingleGroupEdit from "./components/GroupsPages/SingleGroupEdit";
import SingleGroup from "./components/GroupsPages/SingleGroup";
import AllChildren from "./components/Children/AllChildren";
import AddGroup from "./components/GroupsPages/AddGroup";
import ChildEdit from "./components/Children/ChildEdit";

function App() {
  return (
    <Container>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/register' component={Register} />
          <Route path='/kgregister' component={KgRegister} />
          <Route path='/mregister' component={ManagerRegister} />
          <Route path='/tregister' component={TeacherRegister} />
          <Route path='/cregister' component={ChildRegister} />
<<<<<<< HEAD
=======
          <Route path="/editchild" component={ChildEdit} />
          <Route path='/cregister_health' component={ChildHealth} />
>>>>>>> 09133dde571ea2163be6690b7af8e4d4aa33719e
          <Route path='/login' component={Login} />
          <Route path='/mpage' component={Mpage} />
          <Route path='/teachers' component={Teachers} />
          <Route path='/tpage' component={Tpage} />
          <Route path='/attendance' component={Attendance} />
          <Route path='/logout' component={Logout} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/groups' component={AllGroups} />
          <Route path='/editgroup' component={SingleGroupEdit} />
          <Route path='/group' component={SingleGroup} />
          <Route path='/children' component={AllChildren} />
          <Route path='/addgroup' component={AddGroup} />
          <Route path='/editprofile' component={EditProfile} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Container>
  );
}

export default withRouter(App);

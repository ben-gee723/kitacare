import Home from "./components/Home/Home";
import React from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
// Basics
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/index"
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
import ChildRegister from "./components/RegisterForms/ChildRegister/information";
import ChildHealth from "./components/RegisterForms/ChildRegister/health";

// Dashboard
import Tpage from "./components/Tpage/Tpage";
import Mpage from "./components/Mpage/Mpage";
import createTeacher from "./components/Mpage/createTeacher";
import Teachers from "./components/Mpage/Teachers";
import Calendar from "./components/Calendar/Calendar";
import Manager from "./components/ManagerPages/Manager";
import Container from "./Container";
import Attendance from "./components/Tpage/Attendance";
import AllGroups from "./components/GroupsPages/AllGroups";
import SingleGroupEdit from "./components/GroupsPages/SingleGroupEdit";
import SingleGroup from "./components/GroupsPages/SingleGroup";

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
          <Route path='/cregister_health' component={ChildHealth} />
          <Route path='/manager' component={Manager} />
          <Route path='/login' component={Login} />
          <Route path='/mpage' component={Mpage} />
          <Route path='/cteacher' component={createTeacher} />
          <Route path='/teachers' component={Teachers} />
          <Route path='/tpage' component={Tpage} />
          <Route path='/attendance' component={Attendance} />
          <Route path='/logout' component={Logout} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/groups' component={AllGroups} />
          <Route path='/editgroup' component={SingleGroupEdit} />
          <Route path='/group' component={SingleGroup} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Container>
  );
}

export default withRouter(App);

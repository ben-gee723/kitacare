import { Route, Link, Switch, withRouter } from "react-router-dom";
// Basics
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/index"
import "./globalCSS/app.scss";

// Registration
import Register from "./components/RegisterForms/Register";
import KgRegister from "./components/RegisterForms/KgRegister";
import TeacherRegister from "./components/RegisterForms/TeacherRegister";
import ManagerRegister from "./components/RegisterForms/ManagerRegister";
import ChildRegister from "./components/RegisterForms/ChildRegisterForm";

// Login & Error
import Login from "./components/Login/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";

function App() {

  return (
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
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route component={NotFound} />
      </Switch>
      <Footer />


    </div>
  );
}

export default withRouter(App);

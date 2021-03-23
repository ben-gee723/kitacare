import { Route, Link, Switch, withRouter } from "react-router-dom";
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
import Footer from "./components/Footer/index"
import Calendar from "./components/Calendar/Calendar";

function App() {

  return (
    <div className='App'>

      <Navbar />
      <Link to="/calendar">Calendar</Link>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register' component={Register} />
        <Route path='/kgregister' component={KgRegister}/>
        <Route path='/mregister' component={ManagerRegister}/>
        <Route path='/tregister' component={TeacherRegister}/>
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

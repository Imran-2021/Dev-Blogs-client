import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import SIgnIn from "./Components/LoginPage/SignIn";
import SignUp from "./Components/LoginPage/SignUp";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
     <Router>
       <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/sign-in">
            <SIgnIn />
          </Route>
          <Route  path="/sign-up">
            <SignUp/>
          </Route>
          <Route  path="/admin">
            <Admin/>
          </Route>
          <Route  path="/blogs">
            <Blogs/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;

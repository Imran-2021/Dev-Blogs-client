import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/LoginPage/PrivateRoute";
import SignIn from "./Components/LoginPage/Used/SignIn";
import Navbar from "./Components/Navbar/Navbar";
import NoMatch from "./Components/NoMatch/NoMatch";
export const userContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <>
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      {/* <img src={loggedInUser.photo} alt="img"/> */}
     <Router>
       <Navbar/>
        <Switch>

          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/sign-in">
            <SignIn />
          </Route>
          <Route  path="/admin">
            <Admin/>
          </Route>
          <Route  path="/blogs">
            <Blogs/>
          </Route>
          <PrivateRoute  path="/blogsDetails/:nm">
            <BlogDetails/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact  path="*">
            <NoMatch/>
          </Route>

        </Switch>
    </Router>
    </userContext.Provider>
    </>
  );
}

export default App;

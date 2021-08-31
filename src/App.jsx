import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Customers from "./component/customers";
import Movies from "./component/movies";
import NavBar from "./component/navBar";
import NotFound from "./component/notFound";
import Rentails from "./component/rentails";
import LoginForm from "./component/loginForm";
import MovieForm from "./component/movieForm";
import { ToastContainer } from "react-toastify"; //show toast here
import RegisterForm from "./component/registerForm";
import jwtDecode from "jwt-decode";
import UserAccount from "./component/userAccount";
import Logout from "./component/logout";
import auth from "./services/authService";
import ProtectedRoutes from "./component/common/protectedRoutes";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <React.Fragment>
      <NavBar user={user} />
      <main className="container mt-5">
        {/* toast component */}
        <ToastContainer />
        <Switch>
          <Route
            exact
            path="/movies"
            render={(props) => <Movies {...props} user={user} />}
          ></Route>
          {/* <Route path="/movies/:id" render={({props})=><MovieForm {...props }></MovieForm>}></Route> */}
          {/* <Route path="/movies/:id" component={MovieForm}></Route> */}
          {/* develop protected routes to protect access by guest user */}
          <ProtectedRoutes
            path="/movies/:id"
            component={MovieForm}
            render="/login"
          />
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentails" component={Rentails}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <ProtectedRoutes
            path="/account"
            component={UserAccount}
            render="/login"
          ></ProtectedRoutes>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Route
            exact
            path="/"
            render={(props) => <Movies {...props} user={user} />}
          ></Route>
          <Redirect to="/notfound"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

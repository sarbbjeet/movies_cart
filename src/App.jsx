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
import UserAccount from "./component/userAccount";
import Logout from "./component/logout";
import auth from "./services/authService";
import ProtectedRoutes from "./component/common/protectedRoutes";
import FindAccount from "./component/common/forgotten_password/findAccount";
import ResetPassword from "./component/common/forgotten_password/resetPassword";
import SecurityCode from "./component/common/forgotten_password/securityCode";
import ChoosePassword from "./component/common/forgotten_password/choosePassword";
import PasswordChanged from "./component/common/forgotten_password/passwordChanged";
import StateProtectedRoutes from "./component/common/stateProtectedRoutes";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <div style={{ backgroundColor: "rgba(220,220,200,0.2)", height: "100vh" }}>
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
          <Route path="/find-account" component={FindAccount}></Route>
          <StateProtectedRoutes
            path="/reset-password"
            render="/login"
            component={ResetPassword}
          />
          <StateProtectedRoutes
            path="/security-code"
            render="/login"
            component={SecurityCode}
          />
          <StateProtectedRoutes
            path="/choose-password"
            render="/login"
            component={ChoosePassword}
          />

          <StateProtectedRoutes
            path="/password-changed"
            render="/login"
            component={PasswordChanged}
          />

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
    </div>
  );
}

export default App;

import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Customers from './component/customers'; 
import Movies from './component/movies';
import NavBar from './component/navBar';
import NotFound from './component/notFound';
import Rentails from './component/rentails';
import LoginForm from './component/loginForm';

function App() {
    return(
        <React.Fragment>
            <NavBar />
            <main className="container mt-5">
            <Switch>
                <Route path = "/movies" render = {({props})=><Movies {...props}></Movies>}></Route> 
                <Route path="/movies/:id" component={Movies}></Route>
                {/* <Route path="/movies" component={Movies}></Route> */}
                <Route path="/login" component={LoginForm}></Route>
                <Route path="/customers" component={Customers}></Route>
                <Route path="/rentails" component={Rentails}></Route>
                <Route path = "/notfound" component={NotFound}></Route> 
                <Route exact  path = "/" component = {Movies}></Route> 
                <Redirect to ='/notfound'></Redirect> 
            </Switch>
            </main>
        </React.Fragment>
    )
}

export default App;
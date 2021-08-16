import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Movies from './component/movies';
import NavBar from './component/navBar';
import NotFound from './component/notFound';

function App() {
    return(
        <React.Fragment>
            <NavBar />
            <main className="container mt-5">
            <Switch>
                <Route path="/movies/:id" component={Movies}></Route>
                <Route path="/movies" component={Movies}></Route>
                <Route path="/login" component=""></Route>
                <Route path="/customers" component=""></Route>
                <Route path="/rentails" component=""></Route>
                <Route path = "/notfound" component={NotFound}></Route> 
                <Route exact  path = "/" component = {Movies}></Route> 
                <Redirect to ='/notfound'></Redirect> 
            </Switch>
            </main>
        </React.Fragment>
    )
}

export default App;
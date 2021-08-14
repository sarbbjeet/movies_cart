import React from 'react';
import './App.css';
import Movies from './component/movies';


function App() {
    return(
        <React.Fragment>
            <main className="container mt-5">
              <Movies />
            </main>
        </React.Fragment>
    )
}

export default App;
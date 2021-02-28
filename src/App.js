import './App.scss';

import React from "react";

import NotFound from "./component/NotFound/NotFountd";
import {Route} from "react-router-dom";
import Home from "./component/Home/Home";


const App = () => {
    return (
        <div className="app-wrapper">
            <div className="container">
                <Route path='/' exact render={() => <Home/>}/>
                <Route path='/notfound' render={() => <NotFound/>}/>
            </div>
        </div>
    )
}

export default App;

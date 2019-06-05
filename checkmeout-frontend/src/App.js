import React from 'react';
import {BrowserRouter, Route, Link } from "react-router-dom";
import UpLoad from './UpLoad/Upload';
import Landing from './Landing/Landing';


export default class App extends React.Component{
    render() {
        const LANDING_ROUTE = '/';
        return(
            <main className="app">
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li><Link to={LANDING_ROUTE}>Landing</Link></li>
                            <li><Link to="/upload">UpLoad</Link></li>
                        </ul>
                    </nav>
                    <Route exact path={LANDING_ROUTE} component={Landing}></Route>
                    <Route exact path="/upload" component={UpLoad}></Route>
                </BrowserRouter>
            </main>
        )
    }
}






import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Header from './components/Header';
import Loginbox from './components/Loginbox';
class App extends Component {

    render() {
        return (

            <div className='.App'>
                <ul>
                    <li><a href='/'>Loginbox</a></li>
                    <li><a href='/Home'>Home</a></li>

                </ul>
                <div>
                    <Switch>
                        <Route path="/Home" component={Home} />
                        <Route exact path="/" component={Loginbox} />

                    </Switch>

                </div>
            </div>


        );
    }
}

export default App;

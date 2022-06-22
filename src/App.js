import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import './components/Login.css'
import Dashboard from './components/Dashboard';
import Loginbox from './components/Loginbox';
import Rocket from './components/Rocket';
class App extends Component {

    render() {
        return (
            <div>

                <div className='App'>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/rocket" component={Rocket} />
                        <Route path="/" component={Loginbox} />
                    </Switch>
                </div>
            </div>


        );
    }
}

export default App;

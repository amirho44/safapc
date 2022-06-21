import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import './components/Login.css'
import Dashboard from './Dashboard';
import Loginbox from './components/Loginbox';
import Rockets from './Rockets';
class App extends Component {

    render() {
        return (

            <div>
                <div className='App'>

                    <Switch>
                        <Route path="/Dashboard" component={Dashboard} />
                        <Route path="/Rocket" component={Rockets} />
                        <Route path="/" component={Loginbox} />
                    </Switch>

                </div>
            </div>
        );
    }
}

export default App;

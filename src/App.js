

import React, { Component } from 'react';
import './App.css'
import Loginbox from './components/Loginbox';
class App extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div className="App">
                <Loginbox />
            </div>
        );
    }
}

export default App;
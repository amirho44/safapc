

import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Loginbox from './components/Loginbox';
class App extends Component {

    constructor() {
        super();
    }
    render() {
        return (

            <div className="App">
                <Header />
                <Loginbox />
            </div>
        );
    }
}

export default App;
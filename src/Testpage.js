import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class Testpage extends Component {

    render() {
        return (
            <div>
                <Header />
                <Sidebar />
            </div>

        );
    }
}

export default Testpage;
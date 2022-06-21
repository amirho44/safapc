import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Rcontent from './components/Rcontent';
import './App.css'


class Rockets extends Component {

    render() {
        return (

            <div>
                <Sidebar />
                <Header />
                <Rcontent />
            </div>

        );
    }
}

export default Rockets;
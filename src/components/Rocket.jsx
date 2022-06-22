import React, { Component } from 'react';
import '../App.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Rcontent from './Rcontent';


class Rocket extends Component {

    render() {
        return (

            <div>
                <Header />
                <Sidebar />
                <Rcontent />
            </div>

        );
    }
}

export default Rocket;
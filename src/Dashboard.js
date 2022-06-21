import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


class Dashboard extends Component {

    render() {
        return (


            <div>
                <Header />
                <Sidebar />
                <Content />
            </div>
        );
    }
}

export default Dashboard;
import React, { Component } from 'react';
import '../App.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';


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
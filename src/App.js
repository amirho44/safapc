

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css'
import './components/Login.css'
import Dashboard from './Dashboard';
import Loginbox from './components/Loginbox';
class App extends Component {

    render() {
        return (


            <div>
                <div className='App'>
                    <Route exact path="/" component={Loginbox} />
                    <Route path="/Dashboard" component={Dashboard} />
                </div>
            </div>
        );
    }
}

export default App;




// <div className='App'>
// <Header />
// <Loginbox />

// </div>



// <ul>
// <li><a href='/'>login</a></li>
// <li><a href='/Dashboard'>dashboard</a></li>


// </ul>



// <div>
// <ul>
//     <li>
//         <a href='/'>login</a>
//     </li>
//     <li>
//         <a href='/Dashbard'>Dashboard</a>
//     </li>
// </ul>
// </div>
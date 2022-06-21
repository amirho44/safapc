import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return (

            <div className='sidebar'>
                <div className='sideitems'>

                    <div><Link to="/Dashboard">داشبورد</Link></div>
                    <div>
                        <Link to="/Rocket">موشک ها</Link>
                    </div>
                    <div>پرتاب ها</div>

                </div>
            </div>


        );
    }
}

export default Sidebar;
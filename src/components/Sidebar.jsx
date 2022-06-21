import React, { Component } from 'react';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sideitems'>

                    <div>داشبورد</div>
                    <div>موشک ها</div>
                    <div>پرتاب ها</div>

                </div>
            </div>
        );
    }
}

export default Sidebar;
import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>

                    <span>نام خود را بنویسید</span>
                    <span>خروج</span>


                </nav>

                <div className='rocket'>
                    <span>داشبورد</span>
                    <span>-</span>
                    <span>برنامه پرتاب موشک </span>


                </div>

            </div>
        );
    }
}

export default Header;
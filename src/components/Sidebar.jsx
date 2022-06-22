import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return (

            //use link

            // <div className='sidebar'>
            //     <div className='sideitems'>

            //         <div><Link to="/Dashboard">داشبورد</Link></div>
            //         <div>
            //             <Link to="/Rocket">موشک ها</Link>
            //         </div>
            //         <div>پرتاب ها</div>

            //     </div>
            // </div>

            //use a tag for links
            <div className='sidebar'>
                <div className='sideitems'>

                    <div><a href="/Dashboard">داشبورد</a></div>
                    <div>
                        <a href="/Rocket">موشک ها</a>
                    </div>
                    <div>پرتاب ها</div>

                </div>
            </div>

        );
    }
}

export default Sidebar;
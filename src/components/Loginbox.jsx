import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
class Loginbox extends Component {


    render() {
        return (
            <div className='box'>
                <form>
                    <label>نام کاربری</label>
                    <input

                        placeholder="نام کاربری"
                        type='text'
                        name='username'
                    />
                    <label >رمز عبور</label>
                    <input
                        placeholder="رمز عبور"
                        type='password'
                        name='password'
                    />

                    <button><Link to="/Dashboard">ورود</Link></button>





                </form>
            </div>

        );
    }
}

export default Loginbox;
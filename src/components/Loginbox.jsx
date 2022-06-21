import React, { Component } from 'react';
import './box.css'


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
                    <label>رمز عبور</label>
                    <input
                        placeholder="رمز عبور"
                        type='password'
                        name='password'
                    />
                    <button>ورود</button>

                </form>
            </div>

        );
    }
}

export default Loginbox;
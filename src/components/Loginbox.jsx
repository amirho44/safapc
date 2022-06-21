import React, { Component } from 'react';
import './box.css'


class Loginbox extends Component {
    render() {
        return (
            <div className='box'>
                <form>
                    <input

                        placeholder="نام کاربری"
                        type='text'
                        name='username'
                    />
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
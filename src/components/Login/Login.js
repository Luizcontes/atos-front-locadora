import React from 'react'
import './login.css'


export default function Login({ authenticate, setUser, setPass, user, password }) {

    return (
        <>
            <div className='login-container'>

                <div className='login-logo'>
                    <img src="img/logo.png" alt='logo'></img>
                </div>

                <div className='login-data'>
                    <form>
                        <label className="login-data-label" htmlFor="email-input">User</label>
                        <input className="login-data-input" value={user} type="text" name="email" id="email-input " placeholder="example@example.com" onChange={setUser}/>

                        <label className="login-data-label" htmlFor="password-input">Password</label>
                        <input className="login-data-input" value={password} type="password" name="password" id="password-input" placeholder='*********' onChange={setPass}/>

                        <div className="button-div">
                            <input type="submit"  value="Login" className='button-submit' onClick={authenticate}/>
                        </div>                   
                    </form>
                </div>

            </div>
        </>
    )
}

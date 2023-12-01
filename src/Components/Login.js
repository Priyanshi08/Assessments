import React, { useContext } from 'react'
import { ThemeContext } from '../Context/themeContext'

const Login = () => {
    const {theme,handleOnClick} = useContext(ThemeContext)
    return (
        <div>
            <h1 className='text-center'>
                Login{theme}
            </h1>
            {/* <button className='btn btn-dark btn-lg d-grid gap-1 col-2 mx-auto'>Dark

            </button> */}
            <center>
                <form className={`btn ${theme === 'dark' ? 'btn-light' :'btn-dark'}`} onClick={handleOnClick}>
                {theme === "dark" ? "light" :"dark"}
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Login/userId</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                {/* <button className={btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}}  onClick={handleOnClick}>{theme === "dark" ? "light" :"dark"}</button> */}
                <button className='btn btn-dark btn-lg d-grid gap-1 col-4 mx-auto'>submit</button>
            </form>
            </center>
        </div>
    )
}

export default Login
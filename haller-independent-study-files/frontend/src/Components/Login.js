import React from 'react';
import '../App.css';
import "../RecipeApp.css";
import {Link} from "react-router-dom";


const Login = props => (
    <div className="login-page">
    <div className="login-form">
        <form className={"login-form-form"} onSubmit={props.getLogin} style={{marginBottom:"2rem"}}>
        <input placeholder="username" className="form__input" type="text" name="username"/>
        <input placeholder="password" className="form__input" type="password" name="password" style={{width: '300px'}} />
        {/* <div className={"login-form-bottom"}>
        <p>Don't have an account? Sign up</p> */}
        <button className="form__button my-button">
                <Link 
                    to="/" >Login
                </Link>
        </button>
        {/* </div> */}
    </form>
    </div>
    <div className="login-header">
        <h2 className="hero-text-1">React Recipe Search</h2>
        <p className="hero-text-2">Created by Leslie Haller</p>
    </div>
    </div>
);

export default Login;
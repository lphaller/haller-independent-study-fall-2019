import React from 'react';
import '../App.css';
import "../RecipeApp.css";
import {Link} from "react-router-dom";


const Login = props => (
    <div className="login-page">
    <div className="login-form">
        <form className={"login-form-form"} onSubmit={props.getLogin} style={{marginBottom:"2rem"}}>
        <input placeholder="first name" className="form__input" type="text" name="first-name"/>
        <input placeholder="last name" className="form__input" type="text" name="last-name"/>
        <input placeholder="email" className="form__input" type="text" name="email"/>
        <input placeholder="username" className="form__input" type="text" name="username"/>
        <input placeholder="password" className="form__input" type="password" name="password" style={{width: '300px'}} />
        <button className="form__button my-button">
                <Link 
                    to="/" >Login
                </Link>
        </button>
        <p><a>Don't have an account? Sign up</a></p>
    </form>
    </div>
    <div className="login-header">
        <h2 className="hero-text-1">React Recipe Search</h2>
        <p className="hero-text-2">Created by Leslie Haller</p>
    </div>
    </div>
);

export default Login;
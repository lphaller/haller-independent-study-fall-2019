import React from 'react';
// import Footer from "./Footer";
import {Link} from "react-router-dom";
import "../RecipeApp.css";
import Menu from "./Menu";

const Home = (props) => (
    <div className="box">
        <Menu />
    <div className="about">
        <div className="hero hero-about">
            <h2 className="hero-text-2">ABOUT</h2>
        </div>
        <div className="about content">
            <h3>ABOUT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="my-button"><Link 
                    to="/recipeSearch" >LEARN MORE
                </Link></button>
        </div>
        {/* <Footer /> */}
    </div>
    </div>
);

export default Home;
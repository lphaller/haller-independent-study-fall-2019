import React from 'react';
import "../RecipeApp.css";
import SubscribeForm from "./SubscribeForm";

const Footer = (props) => (
    <div className="footer">
        <div className="subscribe content">
            <h3>SUBSCRIBE</h3>
            <p>Stay up to date on all the new features and recipes being added!</p>
            <SubscribeForm />
        </div>
        <div className="footer-content">
            <h6>&copy;Leslie Haller. All rights reserved.</h6>
        </div>
    </div>
);

export default Footer;
import React from 'react';
import {Link} from "react-router-dom";
import './SideDrawer.css';

const SideDrawer = props => (
    <nav className="side_drawer">
        <ul>
            <li><Link to="/recipeSearch">Search Recipes</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    </nav>
);

export default SideDrawer;
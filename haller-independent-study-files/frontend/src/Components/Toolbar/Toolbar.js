import React from 'react';
import {Link} from "react-router-dom";
import './Toolbar.css';
import DrawerTogggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
    <div>
        <header className="toolbar">
          <nav className="toolbar_navigation">
            <div>
              <DrawerTogggleButton />
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                  <li><Link to="/recipeSearch">Search Recipes</Link></li>
                  <li><Link to="/">Home</Link></li>
                </ul>
            </div>
          </nav>
        </header>
    </div>
);

export default Toolbar;
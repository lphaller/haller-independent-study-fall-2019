import "../RecipeApp.css";
import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{backgroundColor: "#2C2C2C"}}>
        <Menu pointing secondary>
          <Menu.Item
            as={Link} to='/' 
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to='/RecipeSearch'
            name='Recipe Search'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to='/about'
            name='about'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
            as={Link} to='/Login'
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

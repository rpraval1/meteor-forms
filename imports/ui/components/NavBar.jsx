import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: ''
    }
  }

  handleItemClick(e, { name }) {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          Example Form
        </Menu.Item>

        <Menu.Item href={Meteor.absoluteUrl('managedata')} name='managedata' active={activeItem === 'managedata'} onClick={this.handleItemClick.bind(this)}>
          Manage Data
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;

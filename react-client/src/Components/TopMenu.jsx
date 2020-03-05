import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const menuItems = [
  {name: "About", link: "/about"},
  {name: "Resume", link: "/resume"},
  {name: "Blog", link: "/blog"}
];

class TopMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: menuItems[0].name,
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, widget) {
    this.setState({ activeItem: widget.name });
  }

  render() {

    return (
      <Menu>
        {menuItems.map((item) => (
          <Menu.Item
            as={NavLink}
            to={item.link}
            name={item.name}
            active={this.state.activeItem === item.name}
            onClick={this.handleItemClick}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}

export default withRouter(TopMenu);

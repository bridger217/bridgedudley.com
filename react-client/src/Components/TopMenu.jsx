import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Image, Menu } from 'semantic-ui-react'
//TODO: make paths absolute
import logo from '../../static/images/bridge-logo-trans.png'

const menuItems = [
  {name: "About", link: "/about"},
  {name: "Resume", link: "/resume"},
  {name: "Blog", link: "/blog"}
];

class TopMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleItemClick(e, menuItem) {
    this.setState({ activeItem: menuItem.name });
  }

  handleLogoClick(e) {
    this.setState({ activeItem: menuItems[0].name });
  }

  render() {

    return (
      <div>
        <div class="bridge-logo">
          <Image as={NavLink} to="/"
                 src={logo} size='medium' onClick={this.handleLogoClick}/>
        </div>
        <div class="menu-padder">
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
        </div>
      </div>
    )
  }
}

export default withRouter(TopMenu);

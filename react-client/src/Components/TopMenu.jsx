import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Button, Icon, Image, Menu } from 'semantic-ui-react'
//TODO: make paths absolute
import logo from '../../static/images/bridge-logo-trans.png'

const menuItems = [
  {name: "About", link: "/about"},
  {name: "Resume", link: "/resume"},
  {name: "Blog", link: "/blog"},
];

const contactItems = [
  {color: "black", icon: "github", link: "https://github.com/bridger217"},
  {color: "linkedin", icon: "linkedin", link: "https://linkedin.com/in/bridgedudley"},
  {color: "red", icon: "mail", link: "mailto:bridgedudley@gmail.com"}
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
      <Menu stackable fixed="top" class="bridge-menu" style={{backgroundColor: "#948a8a61"}}>
        <Menu.Item>
          <Image as={NavLink} to="/"
                 src={logo} size='small' onClick={this.handleLogoClick}/>
        </Menu.Item>
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
          <Menu.Menu position="right">
            {contactItems.map((item) => (
              <Menu.Item
                style={{top: '0.8em'}}
                as="a"
                href={item.link}
                target="_blank"
              >
                <Button circular color={item.color} icon={item.icon} />
              </Menu.Item>
            ))}
          </Menu.Menu>
        </Menu>
    )
  }
}

export default withRouter(TopMenu);

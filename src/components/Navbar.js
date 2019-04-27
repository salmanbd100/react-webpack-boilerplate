import React, { Component } from "react";
import { Menu, Dropdown, Badge, Icon } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const profileDropdown = (
  <div className="profile-dropdown">
    <div className="profile-info">
      <h3 className="profile-name">Salman Rahman</h3>
      <p className="profile-email">salman.bd100@gmail.com</p>
    </div>
    <div className="setting">Profile & Preferences</div>
    <div className="bottom">
      <div className="sign-out">Sign Out</div>
    </div>
  </div>
);

const NavProfile = () => (
  <div className="nav-profile">
    <Dropdown overlay={profileDropdown} trigger={["click"]}>
      <img
        className="profile-img"
        src="https://picsum.photos/200/300/?random"
        alt=""
      />
    </Dropdown>
  </div>
);

const Notification = () => (
  <Dropdown overlay={menu} trigger={["click"]}>
    <div className="icon-menu">
      <Badge dot>
        <Icon type="notification" />
      </Badge>
    </div>
  </Dropdown>
);

class Navbar extends Component {
  render() {
    return (
      <div className="main-navbar">
        <div className="top-navbar">
          <div className="right-nav">
            <div className="icon-menu">
              <Icon type="setting" />
            </div>

            <Notification />
            <NavProfile />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

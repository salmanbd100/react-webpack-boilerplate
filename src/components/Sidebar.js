import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  render() {
    return (
      <div className="main-sidebar">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src="assets/images/logo.png" alt="Relief Tracker" />
          </Link>
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>Who</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/">who1</Link>
            </Menu.Item>
            <Menu.Item key="15">
              <Link to="/">who2</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/">who3</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <span>What</span>
              </span>
            }
          >
            <Menu.Item key="10">
              <Link to="/">What</Link>
            </Menu.Item>
            <Menu.Item key="12">what1</Menu.Item>
            <Menu.Item key="13">what2</Menu.Item>
          </SubMenu>
          <Menu.Item key="6">When</Menu.Item>
          <Menu.Item key="7">Where</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Sidebar;

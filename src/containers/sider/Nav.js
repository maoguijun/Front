import React from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { IndexLink, Link } from "react-router";
import { Menu, Icon, message, Badge } from "antd";
import { pathJump } from "../../utils/";
import { logout, getLogNum } from "../../store/user";
import Immutable from "immutable";
import "./Nav.scss";
const SubMenu = Menu.SubMenu;

class Side extends React.PureComponent {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const props = this.props;
    const {
      intl: { formatMessage },
      location: { pathname },
      user,
      userInfo,
      collapsed
    } = props;
    console.log("user", user, userInfo, props);
    const nav = [
      {
        key: "client_po",
        name: formatMessage({ id: "client_po" }),
        icon: "file",
        show: true
      },

      {
        key: "system_settings",
        name: formatMessage({ id: "system_settings" }),
        icon: "appstore-o",
        show: true,
        type: "sub",
        child: [
          {
            key: "bill_to",
            name: formatMessage({ id: "bill_to" }),
            show: true
          }
        ]
      }
    ];

    const getSubKey = pathname => {
      ////console.log('pathname',pathname)
      let key = pathname.replace(/(^\/)+|\/.*/g, "");
      let sub = [],
        subkey;
      nav.forEach(item => {
        if (item.show && item.type === "sub") {
          sub.push(item);
        }
      });
      sub.forEach(item => {
        let iskey = false;
        item.child.forEach(child => {
          if (child.key === key) {
            iskey = true;
          }
        });
        iskey && (subkey = item.key);
      });
      return subkey;
    };

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname.replace(/(^\/)+|\/.*/g, "")]}
        defaultSelectedKeys={["bill_to"]}
        //defaultOpenKeys={collapsed===false?[getSubKey(pathname)]:[]}
        onClick={e => {
          if (e.key === "login") {
            props.dispatch(logout()).then(result => {
              if (result.error) {
                message.error(result.error.message);
              } else {
                props.pathJump("/" + e.key);
              }
            });
          } else if (e.key === "username") {
            if (user) {
              props.pathJump("personal_information");
            }
          } else {
            props.pathJump("/" + e.key);
          }
        }}
      >
        {nav.map(item => {
          return item.type === "sub" ? (
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span className="nav-text">{item.name}</span>
                </span>
              }
              style={{ display: item.show ? "block" : "none" }}
            >
              {item.child &&
                item.child.map(v => (
                  <Menu.Item
                    key={v.key}
                    style={{ display: v.show ? "block" : "none" }}
                  >
                    {v.name}
                  </Menu.Item>
                ))}
            </SubMenu>
          ) : (
            <Menu.Item
              key={item.key}
              style={{ display: item.show ? "block" : "none" }}
            >
              <Icon type={item.icon} />
              <span className="nav-text">{item.name}</span>
            </Menu.Item>
          );
        })}
        <Menu className="divider" />
        <Menu.Item key="username">
          <div>
            <span>
              <Icon type="user" />
              {userInfo && (
                <span className="nav-text">{userInfo.get("id")}</span>
              )}
            </span>
          </div>
        </Menu.Item>
        <Menu.Item key="login">
          <span>
            <Icon type="poweroff" />
            <span className="logout">Sign out</span>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  location: state.get("routing").locationBeforeTransitions,
  user: state.get("user"),
  userInfo: state.getIn(["userInfo", "userLoginInfo"])
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  pathJump: path => dispatch(pathJump(path))
});
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Side));

import React from 'react'
import Nav from '../../containers/sider/Nav'
import User from '../../containers/sider/User'
import './CoreLayout.scss'
import { Layout, Icon } from 'antd'
const { Content, Sider } = Layout
class CoreLayout extends React.Component {
  state = {
    //collapsed: eval(sessionStorage.getItem('collapsed')||false),
     collapsed:false,
    mode: 'inline'
  };


  onCollapse = (collapsed) => {
    //sessionStorage.setItem("collapsed",collapsed)
    this.setState({
      collapsed,
      mode:collapsed  ? 'vertical' : 'inline'
    });
  };


  render () {
    return (
      <Layout className='layout-main'>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          width={180}
          className="sider-main"
          >
          <div className="logo" >
            <p className="word">YOUPLUS</p>
          </div>
          {/*<User />*/}
          <Nav mode={this.state.mode} collapsed = {this.state.collapsed} />
        </Sider>
        <Layout style={{overflowX:'hidden'}}>
          <Content className='content' style={this.state.collapsed?{marginLeft:'90px'}:{marginLeft:'190px'}}>
            <div className='content-wrap'>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>

    )
  }
}



CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout

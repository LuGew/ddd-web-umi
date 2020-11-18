import React, { Component } from 'react';
import styles from './framework.css';
import { formatMessage } from 'umi-plugin-locale';
import { Icon, Layout, Menu } from 'antd';
import Link from 'umi/link';

const { Header, Sider, Content, Footer } = Layout;
const menus = [
  { route: '/hero', icon: 'user', name: formatMessage({ id: 'hero' }) },
  { route: '/item', icon: 'video-camera', name: formatMessage({ id: 'item' }) },
  { route: '/skill', icon: 'upload', name: formatMessage({ id: 'skill' }) },
];
export default class Framework extends Component<any, any> {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const location = this.props.location;
    const pathname = location.pathname;
    return (
      <Layout className={styles.layout}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
            {
              menus.map(menu => (
                <Menu.Item key={menu.route}>
                  <Icon type={menu.icon} />

                  <Link to={menu.route} className={styles.link}>
                    {menu.name}
                  </Link>

                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            className={styles.content}
          >
            <div>
              {/*{formatMessage({ id: 'content' })}*/}
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

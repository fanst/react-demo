import React, { Component } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import './tab.css';
import SideMenu from './sidemenu.jsx';
import Router from './router.jsx';
import tabService from '../../netService/tabService';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

//外层框架
export default class tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            userInfo: {
                usrId: 0,
                userName: "",
                headImg: '',
                auth: [10000, 10010, 10020, 10030, 10040]
            }
        }
    };

    //打开/收缩左侧菜单
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    //点击跳转
    chooseTab(s) {
        console.log(s.item);
        console.log(s.key);
        console.log(s.selectedKeys);
    };

    //组件挂载（构造 DOM 元素然后塞入页面）之前调用
    componentWillMount() {
        //todo 获取数据
        tabService.getUserInfo().then(function(result){
            if(result.data.state){
                console.log(result.data.userName);
            }
            else{
                console.log('获取数据失败');
            }
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <SideMenu auth={this.state.userInfo.auth} chooseTab={this.chooseTab} />
                </Sider>
                <Layout style={{ flexDirection: 'column' }}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger custom-trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={() => this.toggle()}
                        />
                    </Header>
                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        <Router />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Antd-Demo ©2018 Created by xujie
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import {allSideMenuData} from './allsidemenu.js';
import _ from 'underscore';
const SubMenu = Menu.SubMenu;

//单项菜单模板
const renderMenuItem =
    ({ id, name, icon, link }) =>
        <Menu.Item key={id || link}>
            <Link to={link || id}>
                {icon && <Icon type={icon} />}
                <span className="nav-text">{name}</span>
            </Link>
        </Menu.Item>;

//多项菜单模板
const renderSubMenu =
    ({ id, name, icon, link, items }) =>
        <Menu.SubMenu
            key={id || link}
            title={
                <span>
                    {icon && <Icon type={icon} />}
                    <span className="nav-text">{name}</span>
                </span>
            }
        >
            {items && items.map(item => renderMenuItem(item))}
        </Menu.SubMenu>;

//左侧菜单
export default class sideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAuth: [],
            openKey:''
        };
    };
    
    //获取当前权限对应的菜单项
    getSideMenuFromAuth(auth){
        if(auth.length==0){
            return;
        }
        else
        {
            var data=[];
            _.each(allSideMenuData,function(item){
                if(auth.indexOf(item.id)>-1)
                data.push(item);
            });
            this.setState({userAuth:data});
        }
    };

    //组件挂载（构造 DOM 元素然后塞入页面）之前调用
    componentWillMount(){
        this.getSideMenuFromAuth(this.props.auth);
    }

    //组件挂载（构造 DOM 元素然后塞入页面）之后调用
    componentDidMount(){

    }

    //组件从页面删除的时候调用
    componentWillUnmount(){

    }

    //左侧菜单打开列表更改
    onOpenChange(openKeys){
        this.setState({
            openKey:openKeys[openKeys.length-1]
        });
    };

    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={(s) => this.props.chooseTab(s)} 
            openKeys={[this.state.openKey]}
            onOpenChange={(s)=>this.onOpenChange(s)}>
                {
                    this.state.userAuth && this.state.userAuth.map(
                        (auth=>auth.items && auth.items.length>0 ? renderSubMenu(auth) : renderMenuItem(auth))
                )}
            </Menu>
        )
    }


}
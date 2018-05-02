import React, { Component } from 'react';
import { List, Avatar, Icon,Pagination } from 'antd';

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default class menu extends Component {
    constructor(){
        super();
        this.state={
            listData:[],
            totalCount:0,
            indexPage:1
        }
    };

    //数据初始化
    componentWillMount(){
        const tempData = [];
        for (let i = 0; i < 5; i++) {
            tempData.push({
                href: 'http://ant.design',
                title: `菜式 ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                img:'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
                description: '江浙名菜',
                content: '江浙菜系不可或缺的一道菜，从食材到做工都十分讲究。',
            });
        }
        this.setState({
            listData:tempData,
            totalCount:23,
            indexPage:1
        });
    };

    getPageData(page){
        const tempData = [];
        var dataLength=(page-1)*5+5;
        if(dataLength>this.state.totalCount){
            dataLength=this.state.totalCount;
        }
        for (let i = (page-1)*5; i < dataLength; i++) {
            tempData.push({
                href: 'http://ant.design',
                title: `菜式 ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                img:'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
                description: '江浙名菜',
                content: '江浙菜系不可或缺的一道菜，从食材到做工都十分讲究。',
            });
        }
        this.setState({
            listData:tempData,
            totalCount:23,
            indexPage:page
        });
    };

    render() {
        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange:(page)=>this.getPageData(page),
                        pageSize: 5,
                        showQuickJumper:true,
                        total:this.state.totalCount,
                        current:this.state.indexPage
                    }}
                    dataSource={this.state.listData}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                            extra={<img width={272} alt="logo" src={item.img} />}
                        >
                            <List.Item.Meta
                                //列表元素的图标
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
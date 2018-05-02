/*
 * @Author: xujie 
 * @Date: 2018-04-30 18:24:59 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-05-01 11:30:00
 */

import React, { Component } from 'react';
import { Row, Col, Card, Carousel } from 'antd';

class banner extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col md={24}>
                        <Card title="基本用法" bordered={false}>
                            <Carousel autoplay={true}>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default banner;
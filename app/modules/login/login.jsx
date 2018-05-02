/*
 * @Author: xujie 
 * @Date: 2018-05-01 13:23:44 
 * @Last Modified by:   xujie 
 * @Last Modified time: 2018-05-01 13:23:44 
 */


import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import loginService from '../../netService/loginService';
const FormItem = Form.Item;

class login extends Component {

    handleSubmit(e){
        e.preventDefault();
        var _this=this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                loginService.login(values).then(function(result){
                    if(result.data.state){
                        location.replace("#/tab");
                        console.log("登陆成功");
                    }
                    else{
                        //设置一组输入控件的值与 Error
                        _this.props.form.setFields({password:{value:values.password,errors:[new Error(result.data.msg)]}});
                        console.log("登陆失败");
                    }
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>订餐系统</span>
                    </div>
                    <Form onSubmit={(event)=>this.handleSubmit(event)} style={{ maxWidth: '300px' }}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名！' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码！' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
};


module.exports=Form.create()(login);
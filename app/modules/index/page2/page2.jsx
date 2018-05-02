import React, { Component } from 'react';
import _ from 'underscore';
import { Button, Input } from 'antd';

export default class page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            todos: []
        }
    };

    changeText(e) {
        var newData = _.clone(this.state);
        newData.message = e.target.value;
        this.setState(newData);
    };

    addOne() {
        var dataList = _.clone(this.state);
        if(dataList.message!=''){
            dataList.todos.push(dataList.message);
            this.setState(dataList);
        }
    };

    render() {
        return (
            <div>
                <Input placeholder='text here' onChange={(event)=>this.changeText(event)}></Input>
                <Button onClick={()=>this.addOne()}>Add One</Button>
                <div style={{display:this.props.match.params.id==0?'none':'block'}}>ng-show/ng-hide</div>
                {this.props.match.params.id==90 ? <Button>ng-if</Button> : null}
                <ul>
                    {this.state.todos.map((todo, index) => {
                        {
                            return (
                                <li key={index}>{todo}</li>//Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
                            )
                        }
                    })}
                </ul>
                <p>page21</p>
                <div>{this.props.match.params.id}</div>
            </div>
        );
    }
}
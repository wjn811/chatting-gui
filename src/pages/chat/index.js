import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Button } from 'antd';

import Contacts from './components/Contacts'
import ChatWindow from './components/ChatWindow'

const { TextArea } = Input;

class Chat extends Component{

    constructor(args){
        super(args);
        this.state = {
            messages: [
                {
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    nick: 'eric',
                    content: 'Hello world',
                    senderId: 123,
                },
                {
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    nick: 'eric',
                    content: 'Hello world',
                    senderId: 345,
                },
                {
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    nick: 'eric',
                    content: 'Hello world',
                    senderId: 123,
                },
                {
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    nick: 'eric',
                    content: 'Hello world',
                    senderId: 345,
                },
                {
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    nick: 'eric',
                    content: 'Hello world',
                    senderId: 123,
                },
            ]
        };
    }

    send = (msg) => {
        this.setState({
            messages: [...this.state.messages, msg]
        });
    }

    render(){
        return <div>
            <Row gutter={16}>
                <Col span={3} >
                    <Contacts />
                </Col>
                <Col span={1} />
                <Col span={16}>
                    <ChatWindow messages={this.state.messages} />
                    <TextArea rows={10} />
                    <Button type="primary" size='large'>
                        发送
                    </Button>
                </Col>
                <Col span={4} />
            </Row>
        </div>;
    }
}

export default Chat
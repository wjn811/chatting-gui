import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Avatar} from 'antd';

import styles from './ChatWindow.less';

const me = 123;
export default class ChatWindow extends Component{
    render(){
        const {messages} = this.props;
        return <div className={styles.window_box}>
            {
                messages.map((msg) => {
                    if(msg.senderId == me){
                        return <div className={styles.receiver}>
                        <div className={styles.receiver_content_wrapper}>
                            <div className={styles.content}> {msg.content}</div>
                        </div>
                        <div className={styles.right_triangle}></div>
                        <div className={styles.receiver_avatar}>
                            <Avatar src={msg.avatar} />
                        </div>
                    </div> 
                    }else{
                        return <div className={styles.sender}>
                            <div className={styles.sender_avatar}>
                                <Avatar src={msg.avatar} />
                            </div>
                            <div className={styles.left_triangle}></div>
                            <div className={styles.sender_content_wrapper}>
                                <div className={styles.content}> {msg.content}</div>
                            </div>
                        </div>;
                    }
                })
            }
        </div>
    }
}
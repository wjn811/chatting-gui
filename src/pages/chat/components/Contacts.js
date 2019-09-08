import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Avatar} from 'antd';

import styles from './Contacts.less';

export default class Contacts extends Component{
    render(){
        const list = [
            {"gender":"female","name":{"title":"mrs","first":"neila","last":"eric"},"email":"neila.monteiro@example.com","nat":"BR"},
            {"gender":"female","name":{"title":"mrs","first":"neila","last":"bob"},"email":"neila.monteiro@example.com","nat":"BR"},
            {"gender":"female","name":{"title":"mrs","first":"neila","last":"lisa"},"email":"neila.monteiro@example.com","nat":"BR"},
            {"gender":"female","name":{"title":"mrs","first":"neila","last":"cris"},"email":"neila.monteiro@example.com","nat":"BR"},
        ];

        return <List
        className={styles.list}
        loading={false}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
          >
            <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="last words"
              />
          </List.Item>
        )}
      />
    }
}
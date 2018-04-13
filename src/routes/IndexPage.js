import React from 'react';
import { connect } from 'dva';
import {Layout, Button, Input, List, Checkbox} from 'antd';
import styles from './IndexPage.css';
import 'antd/lib/button/style';
import 'antd/lib/input/style';
import 'antd/lib/layout/style';
import 'antd/lib/list/style';
import 'antd/lib/checkbox/style';
const { Content } = Layout;
class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.dispatch = props.dispatch
    this.state = {
      item: ''
    }
  }
  render() {
    const props = this.props
    return (
      <Layout className={styles.layout}>
        <h1>TodoList
          <small>( Dva + AntD )</small>
        </h1>
        <Content>
          <Input type="text" placeholder="請輸入待辦事項" 
          value={this.state.item} 
          onChange={(e) => { this.setState({ item: e.target.value }); }}
          />
          <Button type="primary" icon="plus"
          onClick={() => {
            props.dispatch({ type: 'todoList/add', item: { name: this.state.item, status: false } });
            this.setState({ item: '' });
          }}
          >新增</Button>
          <List
            className={styles.list}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item>
                <Checkbox
                  className={(item.status ? styles.check : ' l')}
                  checked={item.status}
                  onChange={(e) => {
                    props.dispatch({ type: 'todoList/check', index, value: e.target.checked });
                  }}
                >{item.name}</Checkbox>
                <Button
                  className={styles.btndel}
                  type="danger" size="small" shape="circle" icon="cross"
                  onClick={() => {
                    props.dispatch({ type: 'todoList/delete', index });
                  }}
                />
              </List.Item>
          )} />
        </Content>
        <div className={styles.imgBox}>
          <img src="https://camo.githubusercontent.com/7c73f8cfbb808b9a451dac7d9ff5cbc2b4883419/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067" alt=""/>
          <p>Made By <a href="https://github.com/liyushilezhi">是李宇啊丶</a></p>
          <p>Inspire By <a href="https://github.com/explooosion/React-dva-TodoList">Robby</a></p>
        </div>
      </Layout>
    );
  }
}
function todoList(state) {
  return {
    list: state.todoList.list,
  };
}
export default connect(todoList)(IndexPage);
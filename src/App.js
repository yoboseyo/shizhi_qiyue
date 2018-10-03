import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;

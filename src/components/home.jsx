import React, { Component } from 'react';
import { Card, Icon, Row, Col } from 'antd';
import { ListDiv } from './style';

const { Meta } = Card;

class Home extends Component {
  render() {
    return (
      <ListDiv>
        <h1>Explore Movies</h1>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              style={{ width: '100%' }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{ width: '100%' }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{ width: '100%' }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </ListDiv>
    )
  }
};

export default Home;

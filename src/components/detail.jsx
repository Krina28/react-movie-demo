import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { ListDiv } from './style';
import StarRatings from 'react-star-ratings';

const ImageDiv = styled.div`
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 3
        }
    }

    render() {
        return (
            <ListDiv>
                <Row>
                    <Col span={18} offset={3}>
                        <ImageDiv style={{ backgroundImage: "url('https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png')" }} />
                        <Row style={{ margin: '10px 0px' }}>
                            <div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor={"rgb(255,165,0)"}
                                    starDimension={'25px'}
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <Col span={2}>Thriller</Col>
                            <Col span={2}>{new Date().getFullYear()}</Col>
                        </Row>
                        <Row>
                            <div>
                                Emma Stone
                                Robert Downey
                                Tom Cruise
                                Jennifer Lawrence
                        </div>
                        </Row>
                    </Col>
                </Row>
            </ListDiv>
        )
    }
};

export default Detail;

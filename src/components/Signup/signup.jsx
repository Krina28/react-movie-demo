import React, { Component } from "react";
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { ListDiv } from '../style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Api from "Utils/apiHandler.js";

const api = new Api();

const LogoImage = styled.img`
    border-radius: 50%;
    margin: 10px auto;
    display: block;
    border: 2px solid lightgray;
`

const LoginForm = styled(Form)`
    align-items: center;
`

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedup: false
            //initialize state variables
        }
    }

    _handleSignup = (e) => {
        e.preventDefault();
        let data = {
            name: 'test'
        }

        api.post('/your-api-url', data)
            .then(response => {
                if (response.status === 200) {
                    //execution after response
                    this.setState({ isSignedup: true })
                }
            }).catch((err) => {
                //handle error
            })
    }

    render() {
        return (
            <ListDiv>
                <LogoImage src={'./src/assets/images/logo.png'} />
                <LoginForm onSubmit={this._handleSignup}>
                    <Row>
                        <Col span={8} offset={8}>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={8}>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password" placeholder="Password"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={8}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Signup</Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/login">Login</Link>
                            </Form.Item>
                        </Col>
                    </Row>
                </LoginForm>
            </ListDiv >
        );
    }
};

export default Signup;

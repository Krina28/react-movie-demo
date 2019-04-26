import React, { Component } from "react";
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { ListDiv } from '../style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoImage = styled.img`
    border-radius: 50%;
    margin: 10px auto;
    display: block;
    border: 2px solid lightgray;
`

const LoginForm = styled(Form)`
    align-items: center;
`

class Login extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    _handleLogin(e) {
        e.preventDefault();
        console.log('>>>>>>')
    }

    render() {
        return (
            <ListDiv>
                <LogoImage src={'./src/assets/images/logo.png'} />
                <LoginForm onSubmit={this._handleLogin}>
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
                                <Button type="primary" htmlType="submit">Login</Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/signup">Create new Account</Link>
                            </Form.Item>
                        </Col>
                    </Row>
                </LoginForm>
            </ListDiv >
        );
    }
};


export default Login;

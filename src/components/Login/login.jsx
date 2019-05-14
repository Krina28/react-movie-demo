import React, { Component } from "react";
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { ListDiv } from '../style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Api from "Utils/apiHandler.js";
import ACTIONS from "../../redux/actions";
import { connect } from "react-redux";

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
            //initialize state variables
        }
    }

    _submitLogin = () => {
        //form data to send
        let data = {
            name: 'test'
        }
        //api - call
        api.post('/your-api-url', data)
            .then(response => {
                if (response.status === 200) {
                    //execution after response
                    //dispatching function with data to store in redux
                    this.props.login(data);
                    this.setState({ isLogin: true })
                }
            }).catch((err) => {
                //handle error
            })
    }

    _handleLogin = (e) => {
        e.preventDefault();
        this._submitLogin(); //submit api call
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

const mapStateToProps = state => ({
    data: state
});

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(ACTIONS.login(data)),
    logout: id => dispatch(ACTIONS.logout(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((Login));

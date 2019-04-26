import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 10px 10px;
`

const AppLogo = styled.a`
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
`

const RightMenu = styled.div`
  float: right;
  padding: 10px 0px;

  & a{
    margin: 0 10px;
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/"><AppLogo class="logo">CompanyLogo</AppLogo></Link>
        <RightMenu>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </RightMenu>
      </HeaderDiv>
    )
  }
};

export default Header;

import React, { Component } from "react";
import styled from 'styled-components';

const FooterDiv = styled.div`
  text-align: center;
  padding: 10px;
`

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        @{new Date().getFullYear()} Copyright
      </FooterDiv>
    )
  }
};

export default Footer;

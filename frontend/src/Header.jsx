import React from "react";
import styled from "styled-components";

const Head = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  text-align: center;
  padding-top: 30px;
  font-weight: bold;
  font-size: 30px;
  font-family: monospace;
`;

const Header = () => {
  return <Head>Color Loves Pitch</Head>;
};

export default Header;

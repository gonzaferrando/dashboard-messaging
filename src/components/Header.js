import React from "react";
import styled from "styled-components";
import testingId from "../constant/testingId";

const StyledHeader = styled.header`
  border-bottom: solid 1px #000;
  margin-left: 8px;
  margin-bottom: 10px;
  padding: 5px 0px 5px 0px;
`;

const Header = (props) => (
  <StyledHeader data-testid={testingId.layout.header}>
    {props.children}
  </StyledHeader>
);
export default React.memo(Header);

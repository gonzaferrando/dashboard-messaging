import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  && {
    background-color: #88fca3;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 4px 20px;
    margin: 0 3px;
    &:hover {
      background-color: #88fca3;
    }

    & .MuiButton-label-2 {
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

const ButtonWrapper = (props) => {
  const { text, onClick } = props;
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

ButtonWrapper.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonWrapper;

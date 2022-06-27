import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ButtonProps } from "./Button.types";
import "./Button.css";

const StyledButton = styled.button<ButtonProps>`
  font: inherit;
  min-height: 52px;
  min-width: ${props => props.size === "big" && "140px"};
  max-width: ${props => props.size === "big" && "450px"};
  width: ${props => props.size === "whole" ? "100%" : props.size === "small" ? "140px" : "250px"};
  font-size: ${props => props.size === "small" ? "0.8rem" : "0.9rem"};
  font-weight: bold;
  padding: 1rem 2rem;
  border: ${(props) =>
    props.inverse ? "none" : 
    props.danger ? "1px solid #fe5655" : 
    props.outline ? "1px solid #327cff" : 
    props.disabled ? "#ccc" :
    "1px solid #0A9AFF"
  };
  border-radius: 6px;
  background: ${(props) => (
    props.inverse ? "#1F2240" : 
    props.danger ? "#fe5655" : 
    props.outline ? "transparent" : 
    props.disabled ? "#ccc" :
    "#0A9AFF"
  )};
  color: ${(props) => (props.outline ? "#1f2240" : props.disabled ? "#979797" : "white")};
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
  text-decoration: none;
  display: inline-block;
  margin: 0 0.3rem;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => props.inverse ? "#131427" : props.outline ? "#EEE" : "#0A9AFF"};
    border-color: #0a9aff;
  }
  &:active {
    background: ${(props) => (props.inverse ? "#131427" : props.outline ? "#EEE" : "#0A9AFF")};
  }
  &:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const StyledImage = styled.img`
  margin: 0 0.5rem;
`;

const Button = (props:ButtonProps): JSX.Element => {
  console.log(props);

  if (props.href) {
    return <a href={props.href}>{props.children}</a>;
  }

  if (props.to) {
    return <Link to={props.to}>{props.children}</Link>;
  }

  return (
    <StyledButton type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.icon && <StyledImage src={props.icon} alt="paper-clip" width="21" height="21" />}
      {props.children}
    </StyledButton>
  );
};

export default Button;

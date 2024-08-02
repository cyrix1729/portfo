import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 40%;
  border: 1px black solid;
  background-color: red;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
  top: -25%;

  margin: 0 30px;

  &:hover {
    background-color: #2ecc71;
  }
`;

const CircularButton = ({ image, onClick }) => {
  return <Button image={image} onClick={onClick} />;
};

export default CircularButton;
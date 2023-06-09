import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 250px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 0.2px 2.9825618267059326px 7.456404209136963px 0px #0000001a;
  position: relative;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    transition: all ease 0.5s;
  }
`;

const Title = styled.h2``;
const Desc = styled.span`
  text-align: justify;
`;
const Service = ({ item }) => {
  return (
    <Container>
      <Title> {item.title}</Title>
      <Desc>{item.desc}</Desc>
    </Container>
  );
};

export default Service;

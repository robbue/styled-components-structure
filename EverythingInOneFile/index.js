import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  background: white;
`;

const Header = styled.h1`
  font-size: 32px;
  color: black;
`;

const Button = styled.button`
  background: blue;
  color: white;
`;

export default function ModalBox () {
  return (
    <Wrapper>
      <Header>Welcome</Header>
      <Button>Button</Button>
    </Wrapper>
  );
}

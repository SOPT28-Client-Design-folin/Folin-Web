import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 60vh;
  width: 85%;
  background-color: whitesmoke;
`;
const List = styled.ul`
  display: flex;
  width: 100%;
`;
const Story = () => {
  return <Wrapper>This is the story</Wrapper>;
};

export default Story;

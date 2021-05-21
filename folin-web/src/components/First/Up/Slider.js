import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 60vh;
  width: 100%;
  background-color: green;
`;
const List = styled.ul`
  display: flex;
  width: 100%;
`;

const Slider = () => {
  return (
    <Wrapper>
      <List>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </List>
      <div>button 3개</div>
    </Wrapper>
  );
};

export default Slider;

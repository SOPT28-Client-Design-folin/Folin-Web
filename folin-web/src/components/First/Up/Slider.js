import React from "react";
import styled from "styled-components";
import LeftArrow from "../../../assets/icons/leftArrowBtn.svg";
import RightArrow from "../../../assets/icons/rightArrow.svg";

const Wrapper = styled.div`
  height: 60vh;
  width: 85%;
  background-color: green;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90%;
  width: 100%;
`;

const Item = styled.li``;
const IconContainer = styled.img``;
const ImageContainer = styled.img``;

const Slider = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <IconContainer src={LeftArrow} alt='leftArrow' />
        </Item>
        <Item>
          <ImageContainer src='http://placekitten.com/300/300' alt='cat' />
        </Item>
        <Item>3</Item>
        <Item>
          <IconContainer src={RightArrow} alt='RightArrow' />
        </Item>
      </List>
      <div>button 3개</div>
    </Wrapper>
  );
};

export default Slider;

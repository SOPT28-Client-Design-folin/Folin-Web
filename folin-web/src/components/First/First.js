import React from "react";
import Up from "../First/Up";
import Down from "../First/Down";
import Styled from "styled-components";
import Slider from "../First/Up/Slider";
import Story from "../First/Up/Story";
import Keyword from "../First/Up/Keyword";

const TopWrapper = Styled.div`
    position: relative;
    top: 20vh;
    width: 80vw;
    display: flex;
    z-index: -1;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Nanum Myeongjo";
    font-weight: 500;
`;

const First = () => {
  return (
    <>
      <TopWrapper>
        <Slider />
        <Story />
        <Keyword />
      </TopWrapper>
    </>
  );
};

export default First;

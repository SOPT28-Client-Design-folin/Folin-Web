import React from "react";
import styled from "styled-components";
import ThemeStoryCard from "./Down/ThemeStoryCard";

const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;

  .themeStory {
    &__title {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 52px;
      letter-spacing: -0.07em;
      color: #00554a;
      z-index: 0;
    }

    &__subtitle {
      font-family: "Noto Serif KR";
      font-style: normal;
      font-weight: normal;
      font-size: 38px;
      line-height: 55px;
      color: #2d2a26;
      position: absolute;
      top: 87px;
      width: 25%;
      letter-spacing: -0.055em;
    }

    &__itemContainer {
      width: 75%;
      margin-left: 25%;
      margin-top: 50px;
      position: relative;
      overflow: hidden;
    }

    &__items {
      width: 5544px;
      height: 1000px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    button {
      position: absolute;
      padding: 28px;
      top: 300px;
      border: 0px;
      background-color: transparent;
      text-align: center;
      margin-top: 0px;
      cursor: pointer;

      :before {
        content: "";
        transform: rotate(45deg);
        display: inline-block;
        position: absolute;
        top: 50%;
        width: 26px;
        height: 26px;
        margin-top: -13px;
      }
    }

    &__prevButton {
      left: -6px;

      ::before {
        border: 1px solid;
        border-color: transparent transparent #e0e0e0 #e0e0e0;
        left: 50%;
        margin-left: -4px;
      }
    }

    &__nextButton {
      left: 50px;

      ::before {
        border: 1px solid;
        border-color: #6d6b68 #6d6b68 transparent transparent;
        right: 50%;
        margin-right: -4px;
      }
    }
  }
`;

const Down = ({ props }) => {
  return (
    <Wrapper>
      <div class="themeStory">
        <h2 class="themeStory__title">테마가 있는 스토리</h2>
        <h3 class="themeStory__subtitle">일하는 방식을 실험하는 브랜드, 모베리웍스</h3>
        <div class="themeStory__itemContainer">
          <ul class="themeStory__items">
            {props && props.map((item) => <ThemeStoryCard key={item.id} props={item} />)}
          </ul>
        </div>
        <button class="themeStory__prevButton"></button>
        <button class="themeStory__nextButton"></button>
      </div>
    </Wrapper>
  );
};

export default Down;

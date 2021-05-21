import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 80vh;
  width: 85%;
  .title {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 36px;
    color: ${(props) => props.theme.textGreen};
  }
  .grid__container {
    margin-top: 5rem;
    display: grid;
    width: 100%;
    height: 60vh;
    grid-template-columns: repeat(4, 1fr);
    &--item {
      &--image {
        padding: 1rem;
      }
      &--content {
        padding: 1rem;
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &--title {
          font-family: "Noto Sans KR";
          font-weight: 600;
          font-size: 13px;
          color: ${(props) => props.theme.textGreen};
        }
        &--text {
          font-family: "Noto Serif KR";
          font-weight: 400;
          font-size: 16px;
        }
        &--author {
          font-family: "Noto Sans KR";
          font-weight: 500;
          font-size: 10px;
        }
      }
    }
  }
`;
const Story = () => {
  return (
    <Wrapper>
      <div className='title'>오늘의 베스트 스토리</div>
      <div className='grid__container'>
        <div className='grid__container--item'>
          <img
            className='grid__container--item--image'
            src={"https://placeimg.com/220/240/people"}
            alt='dummy'
          />
          <div className='grid__container--item--content'>
            <div className='grid__container--item--content--title'>
              비지니스 워크{" "}
            </div>
            <div className='grid__container--item--content--text'>
              앞으로 사무실은 사라지는 걸까?
              <br />
              구글과 스타벅스는. . .
            </div>
            <div className='grid__container--item--content--author'>임정민</div>
          </div>
        </div>
        <div className='grid__container--item'>
          <img
            className='grid__container--item--image'
            src={"https://placeimg.com/220/240/any"}
            alt='dummy'
          />
          <div className='grid__container--item--content'>
            <div className='grid__container--item--content--title'>
              비지니스 워크{" "}
            </div>
            <div className='grid__container--item--content--text'>
              앞으로 사무실은 사라지는 걸까?
              <br />
              구글과 스타벅스는. . .
            </div>
            <div className='grid__container--item--content--author'>임정민</div>
          </div>
        </div>
        <div className='grid__container--item'>
          <img
            className='grid__container--item--image'
            src={"https://placeimg.com/220/240/tech"}
            alt='dummy'
          />
          <div className='grid__container--item--content'>
            <div className='grid__container--item--content--title'>
              비지니스 워크{" "}
            </div>
            <div className='grid__container--item--content--text'>
              앞으로 사무실은 사라지는 걸까?
              <br />
              구글과 스타벅스는. . .
            </div>
            <div className='grid__container--item--content--author'>임정민</div>
          </div>
        </div>
        <div className='grid__container--item'>
          <img
            className='grid__container--item--image'
            src={"https://placeimg.com/220/240/nature"}
            alt='dummy'
          />
          <div className='grid__container--item--content'>
            <div className='grid__container--item--content--title'>
              비지니스 워크{" "}
            </div>
            <div className='grid__container--item--content--text'>
              앞으로 사무실은 사라지는 걸까?
              <br />
              구글과 스타벅스는. . .
            </div>
            <div className='grid__container--item--content--author'>임정민</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Story;

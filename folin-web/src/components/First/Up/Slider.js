import React from "react";
import Styled from "styled-components";
import LeftArrow from "../../../assets/icons/leftArrowBtn.svg";
import RightArrow from "../../../assets/icons/rightArrow.svg";

const Wrapper = Styled.div`
  height: 60vh;
  margin-top: 0;
  padding-top: 0;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .button__right {
    all: unset;
    margin-left: 1.5rem;
    margin-bottom: 7rem;
  }
  .button__left {
    all: unset;
    margin-right: 1.5rem;
    margin-bottom: 7rem;
  }
`;
const ContentWrapper = Styled.div`
  height: 100%;
  width: 100%;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &__content{
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &--title{
        font-family: "Noto Sans KR";
        font-weight: 700;
        font-size: 15px;
        padding-bottom: 1.5rem;
        color: ${(props) => props.theme.textGreen};
      }
      &--toptext{
        font-family: "Noto Sans KR";
        font-weight: 700;
        font-size: 30px;
        text-align: center;
      }
      &--middletext{
        padding: 1.5rem 0;
        width: 95%;
        font-family: "Noto Sans KR";
        font-weight: 400;
        font-size: 13px;
        text-align: center;
      }
      &--bottomtext{
        padding-top: 1rem;
        width: 95%;
        font-family: "Noto Sans KR";
        font-weight: 700;
        font-size: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        &--color{
          color: ${(props) => props.theme.textGreen};
        }
      }
    }
  }
`;

const Slider = () => {
  return (
    <Wrapper>
      <button className='button__left'>
        <img src={LeftArrow} alt='leftArrow' />
      </button>
      <ContentWrapper>
        <div className='top'>
          <div className='top__image'>
            <img
              className='top__image--image'
              src='https://placeimg.com/500/350/tech'
              alt='cat'
            />
          </div>
          <div className='top__content'>
            <div className='top__content--title'>
              지금 읽어 두면 좋은 콘텐츠
            </div>
            <div className='top__content--toptext'>
              애니콜 디자이너가 <br />
              나이키 ·MS로 뻗어나간 비결
            </div>
            <div className='top__content--middletext'>
              글로벌 기업을 무대로 활약해 온 유영규 디자이너는
              <br /> '한국 디자인계의 빛나는 성취'라고 불립니다. 아이리버,
              나이키 시계 '베이퍼', 마이크로소프트 홀로렌즈가 모두 그의
              작품입니다. 유영규 디자이너의 디자인에는 어떤 가치가 담겨
              있을까요?
            </div>
            <div className='top__content--bottomtext'>
              <p className='top__content--bottomtext--color'>
                라이프스타일 커리어
              </p>
              | 유영규 박지호
            </div>
          </div>
        </div>
      </ContentWrapper>
      <button className='button__right'>
        <img src={RightArrow} alt='RightArrow' />
      </button>
    </Wrapper>
  );
};

export default Slider;

// <ButtonWrapper>
//   <button className='btn'></button>
//   <button className='btn'></button>
//   <button className='btn'></button>
// </ButtonWrapper>

// const ButtonWrapper = Styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-right: 3rem;
//   padding-top: 1rem;
//   .btn {
//     margin: 0.5rem;
//     width: 1rem;
//     height: 1rem;
//     border: none;
//     border-radius: 50%;
//   }
// `;

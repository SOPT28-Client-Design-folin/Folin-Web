import React, { useState, useRef, useEffect } from "react";
import Styled from "styled-components";
import LeftArrow from "../../../../assets/icons/leftArrowBtn.svg";
import RightArrow from "../../../../assets/icons/rightArrow.svg";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";

const Wrapper = Styled.div`
  margin-top: 0;
  padding-top: 0;
  overflow: hidden;
  height: 70vh;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .button__right {
    all: unset;
    margin-left: 1.5rem;
    margin-bottom: 7rem;
    &__img:hover{
      cursor: pointer
    }
  }
  .button__left {
    all: unset;
    margin-right: 1.5rem;
    margin-bottom: 7rem;
    &__img:hover{
      cursor: pointer
    }
  }
`;

const ContentWrapper = Styled.div`
  width: 100%;
  display: flex; 
`;

const TOTAL_SLIDES = 2;
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Wrapper>
      <button className='button__left'>
        <img
          className='button__left__img'
          onClick={prevSlide}
          src={LeftArrow}
          alt='leftArrow'
        />
      </button>
      <ContentWrapper ref={slideRef}>
        <FirstContent />
      </ContentWrapper>
      <button className='button__right'>
        <img
          className='button__right__img'
          onClick={nextSlide}
          src={RightArrow}
          alt='RightArrow'
        />
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

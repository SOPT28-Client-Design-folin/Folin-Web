import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 30vh;
  width: 85%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .title {
    font-family: "NanumMyeongjo";
    font-weight: 700;
    font-size: 25px;
  }
  .subtitle {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 15px;
    color: ${(props) => props.theme.textGray2};
    padding-bottom: 4rem;
  }
  .list {
    width: 100%;
    height: 55%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    &__item {
      border: 1.5px solid #cacaca;
      font-family: "Noto Sans KR";
      font-weight: 500;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Keyword = () => {
  return (
    <Wrapper>
      <div className='title'>FOLIN KEYWORD</div>
      <div className='subtitle'>여러분의 맞춤형 콘텐츠를 찾아보세요</div>
      <div className='list'>
        <div className='list__item'>비지니스</div>
        <div className='list__item'>공간</div>
        <div className='list__item'>라이프스타일</div>
        <div className='list__item'>테크</div>
        <div className='list__item'>스타트업</div>
        <div className='list__item'>워크</div>
        <div className='list__item'>커리어</div>
        <div className='list__item'>조직문화</div>
      </div>
    </Wrapper>
  );
};

export default Keyword;

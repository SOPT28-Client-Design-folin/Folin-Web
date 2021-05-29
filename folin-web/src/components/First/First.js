import React from 'react';
import Styled from 'styled-components';
import Keyword from '../First/Up/Keyword';
import Story from '../First/Up/Story';
import Down from './Down';
import Slider from './Up/Slider/Slider';

const data = [
  {
    id: 1,
    rank: 1,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 2,
    rank: 2,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 3,
    rank: 3,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 4,
    rank: 4,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 5,
    rank: 5,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 6,
    rank: 6,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 7,
    rank: 7,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 8,
    rank: 8,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 9,
    rank: 9,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
  {
    id: 10,
    rank: 10,
    img: 'https://via.placeholder.com/200',
    categories: ['비즈니스', '라이프 스타일'],
    title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
    publisher: '모빌스 그룹',
    status: '무료',
  },
];

const TopWrapper = Styled.div`
    position: relative;
    top: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: "Noto Serif KR";
    font-weight: 500;
`;

const First = () => {
  return (
    <>
      <TopWrapper>
        <Slider />
        <Story />
        <Keyword />
        <Down props={data} />
      </TopWrapper>
    </>
  );
};

export default First;

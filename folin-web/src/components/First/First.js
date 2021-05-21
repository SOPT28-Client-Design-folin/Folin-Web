import React from "react";
import styled from "styled-components";
import Down from "./Down";

const Wrapper = styled.div`
  position: absolute;
  top: 158px;
  left: 0px;
  width: 100%;
`;

const First = () => {
  const data = [
    {
      id: 1,
      rank: 1,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 2,
      rank: 2,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 3,
      rank: 3,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 4,
      rank: 4,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 5,
      rank: 5,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 6,
      rank: 6,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 7,
      rank: 7,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 8,
      rank: 8,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 9,
      rank: 9,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
    {
      id: 10,
      rank: 10,
      img: "https://via.placeholder.com/200",
      categories: ["비즈니스", "라이프 스타일"],
      title: "'힙한'브랜드 모베러웍스 만든 세번의 실패",
      publisher: "모빌스 그룹",
      status: "무료",
    },
  ];
  return (
    <Wrapper>
      <Down props={data} />
    </Wrapper>
  );
};

export default First;

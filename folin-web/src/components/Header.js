import React from "react";
import { withRouter } from "react-router-dom";
import SearchBtn from "../assets/icons/searchBtn.svg";
import styled from "styled-components";

const UpHeader = styled.header`
  position: fixed;
  top: -10vh;
  left: 0;
  width: 100%;
  height: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorEmerald};
  color: ${(props) => props.theme.textWhite};
  z-index: 1;
  font-size: 16px;
`;

const DownHeader = styled.header`
  position: fixed;
  background-color: ${(props) => props.theme.textWhite};
  top: 8vh;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: ${(props) => props.theme.textBlack};
`;

const List = styled.ul`
  width: 70vw;
  display: flex;
  padding-top: 7rem;
  align-items: center;
`;

const Item = styled.li`
  display: table-cell;
  vertical-align: middle;
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: ${(props) => (props.current ? "16px" : "12px")};
  padding-right: 16px;
  color: ${(props) => props.theme.textWhite};
`;

const DList = styled.ul`
  width: 64vw;
  display: flex;
  font-size: 28px;
`;

const DItem = styled.li`
  font-family: "Nanum Myeongjo";
  font-weight: 700;
  text-align: center;
  font-size: ${(props) => (props.current ? "3rem" : "2rem")};
  padding-top: ${(props) => (props.current ? "0" : "0.5rem")};
  margin-right: 8rem;
  color: ${(props) => props.theme.textBlack};
  height: 3rem;
  display: table-cell;
  vertical-align: middle;
`;

const SearchUser = styled.p`
  font-size: 1.4rem;
  border-bottom: solid 1px;
  margin-right: 0.5rem;
`;

const SearchImg = styled.img`
  width: 1.5rem;
  padding-bottom: 0.5rem;
`;
const Header = () => {
  return (
    <>
      <UpHeader>
        <List>
          <Item current={true}>폴인멤버십</Item>
          <Item current={false}>
            오직 폴인에서만! 1천 여개 콘텐츠를 무제한으로!
          </Item>
        </List>
      </UpHeader>
      <DownHeader>
        <DList>
          <DItem current={true}>fol:in</DItem>
          <DItem current={false}>Story</DItem>
          <DItem current={false}>Seminar</DItem>
          <DItem current={false}>Study</DItem>
        </DList>
        <SearchUser>류진님</SearchUser>
        <SearchImg src={SearchBtn} alt='' />
      </DownHeader>
    </>
  );
};

export default withRouter(Header);

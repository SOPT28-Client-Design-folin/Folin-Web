import React from "react";
import styled from "styled-components";
import BookmarkUnclickedBtnIcon from "../../../assets/icons/bookmarkUnclickedBtn.svg";
import HeartUnclickedBtnIcon from "../../../assets/icons/heartUnclickedBtn.svg";

const Wrapper = styled.li`
  height: 407px;
  padding-bottom: 40px;
  margin-right: 24px;
  margin-bottom: 20px;
  position: relative;
  width: 284px;

  .card {
    cursor: pointer;
    &__image img {
      width: 100%;
      height: auto;
    }

    &__cardInfo {
      text-align: justify;
      text-justify: inter-word;
      margin-top: 16px;
      min-height: 107px;
    }

    &__categories {
      font-family: "Noto Sans KR";
      font-weight: 600;
      font-size: 13px;
      color: #1e9285;
      margin-left: 1px;
      margin-bottom: 10px;
      line-height: 18px;
      letter-spacing: -0.11em;
      display: inline-block;

      li {
        float: left;
        position: relative;
      }

      li + li {
        margin-left: 10px;

        ::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -6px;
          margin-top: -1px;
          display: inline-block;
          width: 2px;
          height: 2px;
          background-color: #008375;
        }
      }
    }

    &__title {
      font-family: "Noto Serif KR";
      font-weight: 400;
      font-size: 21px;
      color: #2d2a26;
      max-height: 56px;
      line-height: 26px;
      letter-spacing: -0.05em;
    }

    &__publisher {
      font-family: "Noto Sans KR";
      font-weight: 600;
      font-size: 12px;
      color: #878787;
      margin-top: 17px;
      margin-bottom: 30px;
      letter-spacing: -0.11em;
      line-height: 16px;
    }
  }
  .bottom {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    &__status {
      font-family: "Noto Sans KR";
      font-weight: 600;
      font-size: 12px;
      letter-spacing: -0.11em;
      line-height: 16px;
      color: #9a9a9a;
      float: left;
    }

    &__icons {
      float: right;
    }

    &__heart {
      display: inline-block;
      margin-right: 9px;
      img {
        width: 21px;
        height: auto;
      }
    }

    &__bookmark {
      display: inline-block;
      margin-right: 5px;
      img {
        width: 20px;
        height: auto;
      }
    }
  }
`;

const ThemeStoryCard = ({ props }) => {
  return (
    <Wrapper>
      <a className="card" href={props.link}>
        <div className="card__image">
          <img src={props.img} alt="" />
        </div>
        <div className="card__cardInfo">
          <ul className="card__categories">
            {props.categories &&
              props.categories.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ul>
          <div className="card__title">{props.title}</div>
          <div className="card__publisher">{props.publisher}</div>
        </div>
      </a>
      <div className="bottom">
        <div className="bottom__status">{props.status}</div>
        <div className="bottom__icons">
          <div className="bottom__heart">
            <img src={HeartUnclickedBtnIcon} alt="" />
          </div>
          <div className="bottom__bookmark">
            <img src={BookmarkUnclickedBtnIcon} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ThemeStoryCard;

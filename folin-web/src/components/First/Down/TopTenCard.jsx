import styled from "styled-components";

const Wrapper = styled.li`
  width: 501px;
  height: 77px;
  display: flex;
  align-items: center;

  .rank {
    position: absolute;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 43px;
    letter-spacing: -0.07em;
    color: ${(props) => ([1, 2, 3].includes(props.rank) ? "#ed6653" : "#777777")};
  }

  .topTenCard {
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin-left: 36px;

    &__image {
      width: 144px;
      height: 77px;
      margin: 0;
      margin-right: 14px;
      img {
        border-radius: 9px;
        width: 100%;
        height: 100%;
      }
    }

    &__info {
      text-align: justify;
      text-justify: inter-word;
    }

    &__title {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 28px;
      letter-spacing: -0.03em;
      color: #4a4a4a;
    }

    &__subInfo {
      display: inline-block;
    }

    &__categories {
      float: left;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.11em;
      color: #88bdb7;

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

    &__publisher {
      float: left;
      position: relative;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.11em;
      color: #b0b0b0;
      margin-left: 16px;

      ::before {
        content: "";
        position: absolute;
        top: 20%;
        left: -7px;
        border-left: 2px solid #959595;
        height: 14px;
      }
    }
  }
`;

export default function TopTenCard({ props }) {
  return (
    <Wrapper rank={props.rank}>
      <p className="rank">{props.rank}</p>
      <a className="topTenCard" href={props.link}>
        <div className="topTenCard__image">
          <img src={props.img} alt="" />
        </div>
        <div className="topTenCard__info">
          <div className="topTenCard__title">{props.title}</div>
          <div className="topTenCard__subInfo">
            <ul className="topTenCard__categories">
              {props.categories &&
                props.categories.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
            </ul>
            <div className="topTenCard__publisher">{props.publisher}</div>
          </div>
        </div>
      </a>
    </Wrapper>
  );
}

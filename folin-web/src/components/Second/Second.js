import React,{useState} from 'react';
import styled from "styled-components";
import Data from '../../data.js';
import Rectangle from "../../assets/component/Rectangle 49.png";
import DownArrowBtn from "../../assets/icons/downArrowBtn.svg";

const SecondWrap = styled.div`
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 18px;


  .seminars{
    position: absolute;
    width: 100%;
    top: 816px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__total{
      width: 110rem;
      height: 48px;
      border-radius:10px 10px 0px 0px;
      font-style:normal;
      line-height:159.69%;
    }

    &__left{
      display: inline-block;
      width: 50%;
      height: 70%;
      text-align:center;
      background:#00554A;
      border-radius: 10px 10px 0px 0px;
      color:white!important;
      line-height: 159.69%;
      letter-spacing: 0.015em;
    }

    &__right{
      display: inline-block;
      width: 50%;
      height: 70%;
      text-align:center;
      background: white;
      color:black;
      border-radius: 0px 10px 0px 0px;
      border-block-end: 1px solid #9D9D9D;
    }


    &__title{
      text-align:left;
      width:80rem;
      display: inline-block;
      font-size: 21px;
      line-height: 117%;


    }
    &__sub_title{
      text-align:left;
      width:80rem;
      display: inline-block;
      font-size: 18px;
      line-height: 117%;



    }

    &__category {

      padding-top:30px;
      padding-bottom:30px;

      &--btn {
        border: 1px solid #bdbdbd;
        box-sizing: border-box;
        border-radius: 26px;
        height: 3.2rem;
        font-size: 1.5rem;
        color: #bdbdbd;
        margin: 0 0.3rem;
        display: inline-block;
        cursor:pointer;
      }

      &--btn--point {
        border: 1px solid black;
        box-sizing: border-box;
        border-radius: 26px;
        height: 3.2rem;
        font-size: 1.5rem;
        color: black;
        margin: 0 0.3rem;
        display: inline-block;
        cursor:pointer;
      }


    }

    &__btn{
      padding-left:870px;
    }

    &__cards {
      width: 1224px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      
    }

  }
  .row{
    width:110rem!important;
    padding-left:60px;
  }
  .seminar__cards{
    display: inline-block;
    width: 270px;
  }
  .seminar__contents{
    min-height: 260px;
  }
  .seminar__card{
      margin: 25px;
    }

  }
  .row{
    width:110rem!important;
    padding-left:60px;
  }
  .seminar__cards{
    display: inline-block;
    width: 270px;
  }
  .seminar__contents{
    min-height: 260px;
  }
  .seminar__card{
      margin: 20px;
      width: 239px;
      height: 368px;
  }

  .seminars__speard--btn{
    padding-top:50px;
    padding-bottom:80px;
    font-size:17px;
    line-height: 25px;
    letter-spacing: -0.07em;
    color: #878787;
    cursor:pointer;
  }
  .card{
    font-family: Noto Serif KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    width:75%;
    line-height: 117%;
    letter-spacing: -0.025em;
    color: #2D2A26;
    padding-top:20px;
    min-height: 57px;

    &__author{
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.07em;
      color: #595959;
    }
    &__general{
      padding-top: 14px;
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.07em;
      color: #595959;
      min-height: 16.8px;
    }
    &__membership{
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.07em;
      color: #00554A;
      padding-top:5px;
      padding-bottom : 16px;
      min-height: 16.8px;
    }
    &__type{
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      padding: 12px 90px;
      cursor:pointer;
      letter-spacing: -0.03em;
      color: #2D2A26;
      background: #FFFFFF;
      border: 1px solid #2D2A26;
      box-sizing: border-box;
      border-radius: 45px;
      margin-bottom:66px;
    }
  }
`;

const Second = () => {
  let [books,setBooks] = useState(Data);
    return (
    <SecondWrap>
      <section className="seminars">
        <div className="seminars__total">
          <div className="seminars__left">폴인 세미나</div>
          <div className="seminars__right">링커클럽</div>
        </div>
        <div className="seminars__category">
          <h2 className="seminars__title">폴인세미나,</h2>
          <br/><h2 className="seminars__sub_title">프렌드를 읽는 가장 생생한 모임</h2>
          <div className="seminars__btn">
            <button className="seminars__category--btn--point">전체</button>
            <button className="seminars__category--btn">신청가능모임</button>
            <button className="seminars__category--btn">모임완료</button>
          </div>
        </div>
        <div class="row">
            {
              books.map( (a,i)=> {
                return <Card books = {books[i]} i={i} />

              })
            }
        </div>
        <div className="seminars__speard--btn">
          펼치기
          <img src={DownArrowBtn}/>
        </div>
      </section>
    </SecondWrap>

    );
};

function Card(props){
  return(

      <div className="seminar__cards">
        <img src={Rectangle}/>
        <div className="seminar__contents">
          <h5 className="card">{props.books.title}</h5>
          <div className="card__author">{props.books.author} {props.books.publisher}</div>
          <p className="card__general">{props.books.general_price}</p>
          <p className="card__membership">{props.books.membership_price}</p>
          <button className="card__type">{props.books.type}</button>
        </div>
      </div>
  )
}

export default Second;



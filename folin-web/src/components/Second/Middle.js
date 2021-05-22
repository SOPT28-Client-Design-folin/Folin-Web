import React,{useState} from 'react';
import styled from "styled-components";
import ComponentOne from "../../assets/component/ComponentOne.png";
import ComponentTwo from "../../assets/component/ComponentTwo.png";
import ComponentThree from "../../assets/component/ComponentThree.png";
import ComponentFour from "../../assets/component/ComponentFour.png";
import ComponentFive from "../../assets/component/ComponentFive.png";
import ComponentSix from "../../assets/component/ComponentSix.png";
import ComponentSeven from "../../assets/component/ComponentSeven.png";
import ComponentEight from "../../assets/component/ComponentEight.png";
import DownArrowBtn from "../../assets/icons/downArrowBtn.svg";

const SecondWrap = styled.div`
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 18px;
  position: relative;
  top: 35vh;
  height: 30%;


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



      &--btn {
        border: 1px solid #bdbdbd;
        box-sizing: border-box;
        border-radius: 26px;
        height: 3.2rem;
        font-size: 1.5rem;
        color: #bdbdbd;
        margin: 0 0.3rem;
        display: inline-block;
        
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
  .seminar__card{
  
      margin: 25px;
  }

  .seminars__speard--btn{
    padding-top:50px;
    padding-bottom:80px;
    font-size:17px;
    line-height: 25px;
    letter-spacing: -0.07em;
    color: #878787;
  }


`;

const Middle = () => {

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
        <div className="row">
          <div className="seminars__cards">
            <div className="seminar__card" >
              <img src={ComponentOne}/>
            </div>
            <div className="seminar__card" >
              <img src={ComponentTwo}/>
            </div>
            <div className="seminar__card" >
              <img src={ComponentThree}/>
            </div>
            <div className="seminar__card" >
              <img src={ComponentFour}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="seminars__cards">
              <div className="seminar__card" >
                <img src={ComponentFive}/>
              </div>
              <div className="seminar__card" >
                <img src={ComponentSix}/>
              </div>
              <div className="seminar__card" >
                <img src={ComponentSeven}/>
              </div>
              <div className="seminar__card" >
                <img src={ComponentEight}/>
              </div>
            </div>
        </div>
        <div className="seminars__speard--btn">
          펼치기
          <img src={DownArrowBtn}/>
        </div>
      </section>
    </SecondWrap>

    );
};




export default Middle;



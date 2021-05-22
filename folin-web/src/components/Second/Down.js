import React from 'react';
import Styled from 'styled-components';
import dummyImg from '../../assets/icons/dummyImg3.png';
import icLeftArrow from '../../assets/icons/leftArrowBtn.svg';
import icRightArrow from '../../assets/icons/rightArrow.svg';

const DownWrap = Styled.div`

    width: 120.0rem;
    height: 41.4rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    margin-left: -60.0rem;
    padding-bottom: 12.0rem;
    bottom: 0;

    .left {
        width: 35.9rem;
        height: 41.4rem;

        &__subTitle {
            font-family: Noto Sans KR;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
        }

        &__mainTitle {
            font-family: MapoGoldenPier;
            font-size: 30px;
            line-height: 117%;
            letter-spacing: -0.025em;
    
            margin-top: 1.8rem;
            width: 24.9rem;
            height: 7.0rem;
            word-break: keep-all;
            word-wrap: break-word;
        }
    }

    .center {
        &__image {
            width: 27.6rem;
            height: 41.4rem;
        }
    }

    .right {
        width: 35.9rem;

        &__description {
            display: flex;
            align-items: center;
            margin-bottom: 1.7rem;

            &--category {
                font-family: Noto Sans KR;
                font-style: normal;
                font-weight: bold;
                font-size: 10px;
                line-height: 14px;
                letter-spacing: -0.11em;
                text-align: left;
                width: 4.8rem;
            }

            &--content {
                font-family: Noto Sans KR;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 19px;
                letter-spacing: -0.03em;
            }
        }

        &__price {
            display: flex;
            margin-top: 23.7rem;
            align-items: center;

            &--description {
                font-family: Noto Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 11px;
                line-height: 15px;
                letter-spacing: -0.03em;
                margin-right: 6px;
            }

            &--number {
                font-family: Noto Serif KR;
                font-style: normal;
                font-weight: normal;
                font-size: 25px;
                line-height: 30px;
                letter-spacing: -0.1em;
                margin-right: 3px;
            }

            &--won {
                font-family: Noto Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: -0.03em;
            }
        }

        &__action {

            margin-top: 1.4rem;
            display: flex;
            align-items: center;
    
            &--button {
                background: none;
                width: 18.0rem;
                height: 4.8rem;
                border: 1px solid black;
                border-radius: 2.4rem;
                font-family: Noto Sans KR;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 0%;
                letter-spacing: -0.025em;
                margin-right: 1.0rem;
            }

            &--arrow {
                margin-left: 2.0rem;
            }
        }
    }

    @media (max-width: 1000px) {
        width: 87.9rem;
        margin-left: -44.0rem;
        margin-top: 110.0rem;
        padding-bottom: 12.0rem;

        .left {
            width: 25.0rem;
        }

        .right {
            width: 25.0rem;
        }
    }

`;

const SecondDown = () => {
    return (
        <DownWrap>
            <div className="left">
                <p className="left__subTitle">함께 모여 나누는 인사이트</p>
                <p className="left__mainTitle">폴인세미나 5월 라인업 미리보기</p>
            </div>
            <div className="center">
                <img className="center__image" src={dummyImg}></img>
            </div>
            <div className="right">
                <div className="right__description">
                    <p className="right__description--category">모임일</p>
                    <p className="right__description--content">2021년 05월 13일(목) 외 1회</p>
                </div>
                <div className="right__description">
                    <p className="right__description--category">모임장소</p>
                    <p className="right__description--content">미정</p>
                </div>
                <div className="right__description">
                    <p className="right__description--category">모임인원</p>
                    <p className="right__description--content">1000명</p>
                </div>
                <div className="right__price">
                    <p className="right__price--description">멤버십 회원가</p>
                    <p className="right__price--number">0</p>
                    <p className="right__price--won">원</p>
                </div>
                <div className="right__action">
                    <button className="right__action--button" type="submit">알림신청</button>
                    <img className="right__action--arrow" src={icLeftArrow} alt=""></img>
                    <img className="right__action--arrow" src={icRightArrow} alt=""></img>
                </div>
            </div>
        </DownWrap>
    );
};

export default SecondDown;
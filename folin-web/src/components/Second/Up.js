import React from 'react';
import Styled from 'styled-components';
import BannerImageLeft from '../../assets/icons/dummyImg.jpeg';
import BannerImageRight from '../../assets/icons/dummyImg2.jpg';

const SecondUpWrap = Styled.div`
    .banner {
        width: 119.9rem;
        height: 49.5rem;
        display: flex;
        align-items: center;
        position:absolute;
        left: 50%;
        margin-left: -59.95rem;
        margin-top: 17.7rem;

        &__left {
            width: 43.1rem;
            height: 49.5rem;
            background: url(${BannerImageLeft});
            background-position: center;
            background-size: cover;

            &--description {         
                font-size: 16px;
                line-height: 117%;
                margin-left: 2.6rem;
                margin-right: 2.6rem;
                margin-top: 2.2rem;
                display: flex;
                justify-content: space-between;

                &--left {
                    width: 14.0rem;
                    word-break: keep-all;
                    word-wrap: break-word;
                }

                &--right {
                    
                }
            }

            &--title {
                font-size: 30px;
                line-height: 117%;
                letter-spacing: -0.025em;
                color: #FFFFFF;
                margin-top: 2.0rem;
                margin-left: 2.6rem;
                width: 32.4rem;
                word-break: keep-all;
                word-wrap: break-word;
            }

            &--assigneesTitle {
                margin-left: 4.2rem;
                margin-top: 15.8rem;
                font-family: Noto Sans KR;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #000000;
            }

            &--assigneesCount {
                margin-left: 4.2rem;
                margin-bottom: 1.5rem;
                font-family: Noto Sans KR;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 35px;
                color: #000000;
            }

            &--button {
                margin-left: 4.2rem;
                margin-bottom: 3.5rem;
                background: none;
                border: 2px solid white;
                width: 23.9rem;
                height: 4.8rem;
                border-radius: 2.4rem;
                color: white;
            }

        }

        &__right {
            width: 76.8rem;
            height: 49.5rem;
            background: url(${BannerImageRight});
            background-position: center;
            background-size: cover;
        }
    }

    .indicator {

    }

    @media (max-width: 1000px) {
        .banner {
            width: 88.2rem;
            height: 31.7rem;
            display: flex;
            align-items: center;
            position:absolute;
            left: 50%;
            margin-left: -44.1rem;
            margin-top: 17.7rem;

            &__left {
                width: 31.9rem;
                height: 31.7rem;
                background: url(${BannerImageLeft});
                background-position: center;
                background-size: cover;
    
                &--description {         
                    font-size: 16px;
                    line-height: 117%;
                    margin-left: 1.8rem;
                    margin-right: 2.6rem;
                    margin-top: 1.5rem;
                    display: flex;
                    justify-content: space-between;
    
                    &--left {
                        display: none;
                    }
    
                    &--right {
                        
                    }
                }
    
                &--title {
                    font-size: 30px;
                    line-height: 117%;
                    letter-spacing: -0.025em;
                    color: #FFFFFF;
                    margin-top: 1.5rem;
                    margin-left: 1.8rem;
                    width: 32.4rem;
                    word-break: keep-all;
                    word-wrap: break-word;
                }
    
                &--assigneesTitle {
                    display: none;
                }
    
                &--assigneesCount {
                    display: none;
                }
    
                &--button {
                    margin-top: 13.5rem;
                    margin-left: 3.5rem;
                    background: none;
                    border: 2px solid white;
                    width: 23.9rem;
                    height: 4.8rem;
                    border-radius: 2.4rem;
                    color: white;
                }
    
            }
    
            &__right {
                width: 56.8rem;
                height: 31.7rem;
                background: url(${BannerImageRight});
                background-position: center;
                background-size: cover;
            }
        }
    }
`;

const SecondUp = () => {
    return (
        <SecondUpWrap>
            <div className="banner">
                <div className="banner__left">
                    <div className="banner__left--description">
                        <p className="banner__left--description--left">AI 비즈니스, 분야와 국가를 넘어 확장하다</p>
                        <p className="banner__left--description--right">폴인세미나</p>
                    </div>
                    <p className="banner__left--title">뤼이드 어떻게 100대 AI기업이 되었나</p>
                    <p className="banner__left--assigneesTitle">신청자</p>
                    <p className="banner__left--assigneesCount">669명</p>
                    <button className="banner__left--button" type="submit">신청하기</button>
                </div>
                <div className="banner__right"></div>
            </div>
            <div className="indicator">
                <div className="indicator--one"></div>
                <div className="indicator--two"></div>
                <div className="indicator--three"></div>
            </div>
        </SecondUpWrap>
    );
};

export default SecondUp;
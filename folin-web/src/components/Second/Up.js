import React from 'react';
import Styled from 'styled-components';
import BannerImageLeft from '../../assets/icons/dummyImg.jpeg';
import BannerImageRight from '../../assets/icons/dummyImg2.jpg';

const SecondUpWrap = Styled.div`
    display: flex;
    justify-content: center;
    align-items: space-around;
    position: relative;
    top: 14rem;
    width: 80%;
    .banner {
        width: 119.9rem;
        display: flex;
        align-items: center;


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
            background: url(${(props) => props.bannerImg});
            background-position: center;
            background-size: cover;
        }.bind(this)
    }

    .indicator {
        width: 7.6rem;
        height: 0.9rem;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 50%;
        margin-left: -3.8rem;
        margin-top: 55.0rem;

        &--one {
            box-sizing: border-box;
            width: 2.2rem;
            height: 0.9rem;
            background: ${(props) => props.theme.colorEmerald};
            border-radius: 0.45rem;
        }

        &--two, 
        &--three {
            box-sizing: border-box;
            width: 0.9rem;
            height: 0.9rem;
            background: #E0E0E0;
            border-radius: 50%;
        }
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
                background: url(${(props) => props.bannerImg});
                background-position: center;
                background-size: cover;
            }
        }

        .indicator {
            width: 7.6rem;
            height: 0.9rem;
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 50%;
            margin-left: -3.8rem;
            margin-top: 52.0rem;
    
            &--one {
                box-sizing: border-box;
                width: 2.2rem;
                height: 0.9rem;
                background: ${(props) => props.theme.colorEmerald};
                border-radius: 0.45rem;
            }
    
            &--two, 
            &--three {
                box-sizing: border-box;
                width: 0.9rem;
                height: 0.9rem;
                background: #E0E0E0;
                border-radius: 50%;
            }
        }
    }
`;

const SecondUp = (bannerData) => {
  return (
    <SecondUpWrap bannerImg={bannerData.main_image}>
      <div className="banner">
        <div className="banner__left">
          <div className="banner__left--description">
            <p className="banner__left--description--left">AI ????????????, ????????? ????????? ?????? ????????????</p>
            <p className="banner__left--description--right">???????????????</p>
          </div>
          <p className="banner__left--title">????????? ????????? 100??? AI????????? ?????????</p>
          <p className="banner__left--assigneesTitle">?????????</p>
          <p className="banner__left--assigneesCount">669???</p>
          <button className="banner__left--button" type="submit">
            ????????????
          </button>
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

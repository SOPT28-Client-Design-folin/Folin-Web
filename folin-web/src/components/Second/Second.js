import React from 'react';
import SecondUp from './Up';
import SecondMiddle from './Middle';
import SecondDown from './Down';
import Styled from 'styled-components';

const SecondWrap = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Second = () => {
    return (
        <SecondWrap>
            <SecondUp />
            <SecondMiddle />
            <SecondDown />
        </SecondWrap>
    );
};

export default Second;
import React from 'react';
import SecondUp from './Up';
import SecondMiddle from './Middle';
import SecondDown from './Down';
import Styled from 'styled-components';
import { getSecondPageData } from '../../libs/api';

const SecondWrap = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Second = () => {
  const [userData, setUserData] = React.useState(null);

  setData() => {
    (async () => {
      const data = await getSecondPageData();
      setUserData(data);
    })();
  };

  return (
    <SecondWrap>
      <SecondUp bannerData={userData.main} />
      <SecondMiddle />
      <SecondDown lineupData={userData.lineup} />
    </SecondWrap>
  );
};

export default Second;

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

  React.useEffect(() => {
    (async () => {
      const data = await getSecondPageData();
      setUserData(data);
      console.log(userData)
    })();
  }, [userData]);

  return (
    <SecondWrap>
      <SecondUp bannerData={userData} />
      <SecondMiddle />
      <SecondDown lineupData={userData} />
    </SecondWrap>
  );
};

export default Second;

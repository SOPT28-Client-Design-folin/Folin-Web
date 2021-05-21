import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 30vh;
  width: 85%;
  background-color: purple;
`;
const List = styled.ul`
  display: flex;
  width: 100%;
`;

const Keyword = () => {
  return <Wrapper>This is the KeyWord</Wrapper>;
};

export default Keyword;

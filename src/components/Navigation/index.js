import React from 'react';

import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <SocialLinks />
      {/* <ThemeChallenger /> */}
    </S.NavigationWrapper>
  );
};

export default Navigation;

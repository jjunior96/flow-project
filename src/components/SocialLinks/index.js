import React from 'react';

import { Github } from 'styled-icons/boxicons-logos';
import { LinkedinWithCircle as Linkedin } from 'styled-icons/entypo-social';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        <S.SocialLinksItem>
          <S.SocialLinksLink>
            <S.Icons>
              <Github />
            </S.Icons>
          </S.SocialLinksLink>
        </S.SocialLinksItem>

        <S.SocialLinksItem>
          <S.SocialLinksLink>
            <S.Icons>
              <Linkedin />
            </S.Icons>
          </S.SocialLinksLink>
        </S.SocialLinksItem>
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
};

export default SocialLinks;

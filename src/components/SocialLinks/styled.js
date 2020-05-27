import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #ddd;
  text-decoration: none;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: #54a0ff;
  }
`;

export const Icons = styled.div`
  color: #d9d9d9;
  width: 30px;
`;

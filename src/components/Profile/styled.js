import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #c8d6e5;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.5s;
  color: #c8d6e5;

  &:hover {
    color: #abc8e2;
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0.5rem auto 1.5rem;
`;

export const ProfilePosition = styled.p`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`;

import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: #8899a6;
  &:hover {
    color: #1fa1f2;
  }
`;
export const TeamItemContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: #8899a6;
`;

export const TeamAvatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const TeamName = styled.h1`
  margin: 8px;
  font-size: 22px;
  font-weight: bold;
`;

export const TeamResponsibility = styled.span`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
`;

export const TeamBio = styled.small`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  max-width: 500px;
`;

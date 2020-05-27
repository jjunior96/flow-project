import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav`
  margin-top: 1.5rem;
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #54a0ff;
  }
`;

export const MenuLinksLink = styled(Link)`
  color: #c8d6e5;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #54a0ff;
  }
`;

import React from 'react';
// import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';

import Navigation from '../Navigation';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import GlobalStyled from '../../styles/global';
import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyled />
      <Sidebar />
      <MenuBar />
      <S.LayouyMain>
        {/* Elemento passado no index */}
        {children}
        <footer>Footer</footer>
      </S.LayouyMain>
    </S.LayoutWrapper>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;

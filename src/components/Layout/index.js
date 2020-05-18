import React from 'react'
import PropTypes from 'prop-types'
import MenuBar from '../Menu'
import GlobalStyles from '../../styles/global'

import { LayoutContainer, LayoutMain } from './styles'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <LayoutMain>{children}</LayoutMain>
      <MenuBar />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

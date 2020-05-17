import React from 'react'
import PropTypes from 'prop-types'
import MenuBar from '../Menu'
import GlobalStyles from '../../styles/global'

import { LayoutContainer } from './styles'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <main>{children}</main>
      <MenuBar />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

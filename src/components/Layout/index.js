import PropTypes from 'prop-types'
import MenuBar from '../Menu'
import GlobalStyles from '../../styles/global'

import { LayoutContainer, LayoutMain } from './styles'

const Layout = () => {
  return (
    <LayoutWrapper>
      <Globalstyle />
      <aside />
      <Sidebar />
      <LayoutMain />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

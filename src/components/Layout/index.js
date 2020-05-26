import React from 'react'
import styled from 'styled-components'

import Profile from '../Profile'
import Sidebar from '../Sidebar'

import Globalstyle from '../../styles/global'

const LayoutWrapper = styled.section`
  display: flex;
`

const LayoutMain = styled.main`
  background: #16202c;
`

const Layout = () => {
  return (
    <LayoutWrapper>
      <Globalstyle />
      <aside>
        <Profile />
      </aside>
      <Sidebar />
      <LayoutMain>Main</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout

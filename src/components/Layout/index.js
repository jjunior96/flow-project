import React from 'react'
import styled from 'styled-components'

import Sidebar from '../Sidebar'

import Globalstyle from '../../styles/global'

const LayoutWrapper = styled.section`
  display: flex;
  /* background: #273d59; */
`

const LayoutMain = styled.main`
  /* background: #273d59; */
`

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

export default Layout

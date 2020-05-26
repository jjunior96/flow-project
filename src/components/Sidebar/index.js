import React from 'react'
import styled from 'styled-components'

import Profile from '../Profile'

const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 20px;
  text-align: center; /* Importante */
  width: 300px;
`
const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <h2>Links</h2>
    <h2>Mídias</h2>
  </SidebarWrapper>
)

export default Sidebar

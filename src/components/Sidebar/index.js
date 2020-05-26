import React from 'react'
import styled from 'styled-components'

import Profile from '../Profile'

import SocialLinks from '../SocialLinks'

const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 20px;
  text-align: center;
  width: 250px;
`
const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <h2>Links</h2>
    <h2>Mídias</h2>
    <SocialLinks />
  </SidebarWrapper>
)

export default Sidebar

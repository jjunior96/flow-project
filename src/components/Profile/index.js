import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

const Title = styled.h1`
  color: #d9d9d9;
  font-size: 22px;
  padding: 10px 0 5px 0;
`

const SubTitle = styled.h2`
  color: #d9d9d9;
  font-size: 16px;
  padding: 0 0 10px 0;
`

const Description = styled.p`
  color: #d9d9d9;
  font-size: 14px;
  padding: 0 0 10px 0;
`

const Profile = () => {
  return (
    <div className="Profile">
      <Logo />
      <Title>Flow Soft</Title>
      <SubTitle>Software Development</SubTitle>
      <Description>Description</Description>
    </div>
  )
}

export default Profile

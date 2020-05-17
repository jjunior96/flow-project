import React from 'react'
import styled from 'styled-components'

import Avatar from '../Avatar'

const Description = styled.h2`
  color: #fff;
  padding: 0 0 10px 0;
`

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  padding: 0 0 5px 0;
`

const Profile = () => {
  return (
    <div className="Profile">
      <Avatar />
      <Title>Flow Soft</Title>
      <Description>Software Development</Description>
      <p>Description</p>
    </div>
  )
}

export default Profile

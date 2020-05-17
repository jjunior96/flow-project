import React from 'react'
import styled from 'styled-components'

import { FaGithub, FaFacebook } from 'react-icons/fa'

const SocialWrapper = styled.nav`
  margin: 20px auto;
`

const Icons = styled.div`
  color: #d9d9d9;
  width: 100px;
  /* margin-right: 100px; */
`

const SocialLinks = () => {
  return (
    <SocialWrapper>
      <Icons>
        <FaGithub />
        <FaFacebook />
      </Icons>
    </SocialWrapper>
  )
}

export default SocialLinks

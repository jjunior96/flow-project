import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

export const LogoWrapper = styled(Img)`
  border-radius: 10%;
  height: 40px;
  margin: auto;
  width: 40px;
  padding: 50px;
`

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <LogoWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar

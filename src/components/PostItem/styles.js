import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
  text-decoration: none;
  color: #8899a6;
  &:hover {
    color: #1fa1f2;
  }
`
export const PostItemContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #8899a6;
`

export const PostItemIcon = styled.div`
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 1rem;

  background: ${props => (props.background ? props.background : '#1fa1f2')};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  color: #fff;
`

export const PostItemInfo = styled.div``

export const PostItemDate = styled.time``

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0rem 0.5rem;
`

export const PostItemDesc = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

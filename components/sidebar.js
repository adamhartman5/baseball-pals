import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import dirt from '../public/assets/dirtsidebar.png'

const sidebar = () => {
  return (
    <SidebarContainer image={dirt}>
      <LinkContainer>
        <Link href='/' passHref legacyBehavior>
          <LinkTag>
            Home
          </LinkTag>
        </Link>
        <Link href='/about' passHref legacyBehavior>
          <LinkTag>
            About
          </LinkTag>
        </Link>
        <Link href='/predictiongames' passHref legacyBehavior>
          <LinkTag>
            Prediction Games
          </LinkTag>
        </Link>
      </LinkContainer>
    </SidebarContainer>
  )
}

export default sidebar

const SidebarContainer = styled.div`
  width: 175px;
  height: 100vh;
  border-right: 1px solid gray;
  display: flex;
  background-image: url(${props => props.image.src});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
`

const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`

const LinkTag = styled.a`
  display: flex;
  color: white;
  padding-top: 5px;
  :hover{
    color: red;
  }
`
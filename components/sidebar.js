import React from 'react'
import styled from 'styled-components'
import dirt from '../public/assets/dirtsidebar.png'
import Image from 'next/image'

const sidebar = () => {
  return (
    <SidebarContainer>sidebar</SidebarContainer>
  )
}

export default sidebar

const SidebarContainer = styled.div`
  width: 150px;
  height: 100vh;
  border-right: 1px solid gray;
  margin-top: 0;
  padding-top: 0;
  background-image: url(${dirt});
  display: flex;
`

const ImageContainer = styled.div`

`
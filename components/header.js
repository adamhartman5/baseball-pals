import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import banner from '../public/assets/baseballpalsbanner.png'

const header = () => {
  return (
    <HeaderContainer>
      <Image src={banner} width='1920' height='240'/>
    </HeaderContainer>
  )
}

export default header

const HeaderContainer = styled.div`
  width: 100vw;
  height: 360px;
  display: flex;
  padding: 0;
  margin: 0;
`
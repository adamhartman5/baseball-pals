import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import banner from '../public/assets/baseballpalsbanner.png'

const header = () => {
  return (
    <HeaderContainer>
      <Image src={banner} width='1920'/>
    </HeaderContainer>
  )
}

export default header

const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  position: relative;
  padding-bottom: 0;
  margin-bottom: 0;
  overflow-y: hidden ;
`
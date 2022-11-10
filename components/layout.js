import Sidebar from "./sidebar"
import Header from "./header"
import styled from 'styled-components'

import React from 'react'

const layout = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <Sidebar />
        <ChildContainer>
          {children}
        </ChildContainer>
      </MainContainer>
    </LayoutContainer>
  )
}

export default layout

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

const HeaderContainer = styled.div`
  display: flex;
`

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const ChildContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`
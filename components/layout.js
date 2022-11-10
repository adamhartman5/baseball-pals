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
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    padding: 0;
`

const HeaderContainer = styled.div`
`

const MainContainer = styled.div`
`

const ChildContainer = styled.main`
`
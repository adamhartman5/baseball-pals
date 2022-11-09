import Sidebar from "./sidebar"
import Header from "./header"
import styled from 'styled-components'

import React from 'react'

const layout = ({ children }) => {
  return (
    <LayoutContainer>
        <Header />
        <Sidebar />
        <main>{children}</main>
    </LayoutContainer>
  )
}

export default layout

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
`
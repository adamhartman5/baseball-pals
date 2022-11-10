import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const index = () => {
  return (
    <MainContainer>
      <LinkContainer>
        <Link href='fapredictions' passHref legacyBehavior>
          <LinkTag>
            Free Agency Prediction Game
          </LinkTag>
        </Link>
      </LinkContainer>
      </MainContainer>
  )
}

export default index

const MainContainer = styled.div`

`

const LinkContainer = styled.div`

`

const LinkTag = styled.a`

`
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

export default function Home() {
  return (
    <HeadContainer>
      <Head>
        <title>Baseball Pals</title>
        <link rel="icon" href="/assets/cutty-small.png" />
      </Head>

      <MainContainer>
        Test
      </MainContainer>
    </HeadContainer>
  )
}

const HeadContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;

`
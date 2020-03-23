import React from 'react'
import styled from 'styled-components'
import { Head, Header, Art, Music, WebDev, SocialBar, FluidBg } from '../components'
import style from '../ui/global.css'

const Container = styled.div`
  display: block;
`

const Home = () => (
  <Container className="content">
    <Head />
    <FluidBg />
    <SocialBar />
    <Header />
    { /* <WebDev /> */ }
    { /* <Music /> */ }
  </Container>
)

export default Home

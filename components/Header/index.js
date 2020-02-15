import React from 'react'
import * as S from './styled'

// https://codepen.io/csspoints/pen/WNeOEqd
const Header = ({ children }) => (
  <S.Container>
    <S.Headline>
      Hi, I'm Vincent. <br/>
      A <a href="#webdev">Web-Developer</a>, <a href="#art">Artist</a> and <br/>
      <a href="#music">Musician</a> from Berlin.
    </S.Headline>
  </S.Container>
)

export default Header

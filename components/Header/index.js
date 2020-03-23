import React from 'react'
import * as S from './styled'

// https://codepen.io/csspoints/pen/WNeOEqd
const Header = ({ children }) => (
  <S.Container>
    <S.Headline>
      Hi, I'm Vincent. <br/>
      A <a href="https://wweb.dev" target="_blank" rel="noopener noreferrer">Web-Developer</a>, <a href="https://vincenius.com" target="_blank" rel="noopener noreferrer">Artist</a> and <br/>
      <a href="https://tram4.de" target="_blank" rel="noopener noreferrer">Musician</a> from Berlin.
    </S.Headline>
  </S.Container>
)

export default Header

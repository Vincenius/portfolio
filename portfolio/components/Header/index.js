import React from 'react'
import Link from 'next/link'
import Nav from '../Nav'
import * as S from './styled'

const Header = ({ children }) => (
  <S.Container>
    <Nav />
    <S.Content>
      { children }
    </S.Content>
  </S.Container>
)

export default Header

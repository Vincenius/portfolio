import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  z-index: 1;
`
export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  filter: brightness(30%);
`
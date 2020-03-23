import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  background: #000;

  h2 {
    color: #fff;
  }
`
export const BgImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
  max-width: 50%;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
`
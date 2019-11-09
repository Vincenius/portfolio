import styled from 'styled-components'
import { boxShadow } from '../../ui/constants'

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    box-shadow: ${boxShadow};
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
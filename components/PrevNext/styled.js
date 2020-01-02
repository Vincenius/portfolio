import styled from 'styled-components'
import { Container as UiContainer } from '../../ui/index'

export const Container = styled(UiContainer)`
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
`
export const Next = styled.a`
    display: inline-flex;
    align-items: center;

    svg {
        margin-left: 10px;
    }
`
export const Prev = styled.a`
    display: inline-flex;
    align-items: center;

    svg {
        transform: rotate(180deg);
        margin-right: 10px;
    }
`
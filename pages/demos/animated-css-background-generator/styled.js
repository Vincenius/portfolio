import styled from 'styled-components'

export const Container = styled.div``
export const Navigation = styled.nav`
    position: relative;
    z-index: 2;
    padding: 20px 20px 0;

    a {
        cursor: pointer;
        color: #fff;
        margin-left: 20px;
        text-decoration: none;

        &:first-child {
            margin-left: 0;
        }

        &.active, &:hover {
            text-decoration: underline;
        }
    }
`
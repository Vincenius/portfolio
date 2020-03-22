import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    z-index: 5;
    right: 20px;
    top: 20px;

    a {
        color: #fff;
        cursor: pointer;
        margin: 0 15px;

        &:hover {
            opacity: .6;
        }
    }
`

import styled from 'styled-components'
import { gradient } from '../../ui/constants'

export const Container = styled.header`
    background: #000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Headline = styled.h1`
    font-family: 'Open Sans Condensed', sans-serif;
    color: #fff;
    font-size: 7vw;
    max-width: 1024px;
    margin: 0 10vw;
    line-height: 1.2;

    a {
        position: relative;
        color: #fff;
        text-decoration: none;
        z-index: 1;

        &::after {
            content: "";
            position: absolute;
            bottom: 10px;
            left: 0;
            height: 6px;
            width: 100%;
            background: ${gradient};
            background-size: 200% 200%;
            z-index: 0;
        }

        &:hover::after {
            animation: animateGradient 3s ease infinite;

            @keyframes animateGradient {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
        }
    }

`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 50px;
`
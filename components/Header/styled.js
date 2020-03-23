import styled from 'styled-components'
import { gradient } from '../../ui/constants'

export const Container = styled.header`

`

export const Headline = styled.h1`
    font-family: 'Open Sans Condensed', sans-serif;
    color: #fff;
    font-size: 7vw;
    max-width: 1024px;
    width: 100%;
    margin: 0;
    padding: 0 10vw;
    line-height: 1.2;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;

    @media only screen and (min-width: 1180px) {
        font-size: 82px;
        padding: 0 120px;
    }

    a {
        position: relative;
        color: #fff;
        text-decoration: none;
        z-index: 1;

        &::after {
            content: "";
            position: absolute;
            bottom: 8%;
            left: 0;
            height: 5%;
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
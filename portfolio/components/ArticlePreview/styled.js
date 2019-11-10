import styled from 'styled-components'
import { lightGrey, middleGrey, darkGrey, greenBlue } from '../../ui/constants'

export const Container = styled.article`
    border-bottom: 1px solid ${lightGrey};
    margin-bottom: 3.2rem;
    padding-bottom: 3.2rem;
`
export const Time = styled.time`
    color: ${middleGrey};
    font-size: .82397rem;
    line-height: 1.86667rem;
    margin-bottom: 8px;
`
export const Headline = styled.h2`
    font-size: calc(1.29454rem + .17836 * ((100vw - 20rem)/ 100));
    font-family: "Roboto Condensed",sans-serif;
    font-weight: 700;
    hyphens: manual;
    line-height: 1.2;
    margin: 0 0 16px;

    a {
        color: ${darkGrey};
        text-decoration: none;
        transition: all .12s ease;

        &:hover {
            color: ${greenBlue};
        }
    }
`
export const ReadMore = styled.a`
    display: block;
    font-size: .77248rem;
    font-weight: 700;
    margin-top: calc(1.06667rem + .25vw);
    text-transform: uppercase;
    color: ${greenBlue};

    &:hover {
        color: ${darkGrey};
        text-decoration: underline;
        cursor: pointer;
    }
`

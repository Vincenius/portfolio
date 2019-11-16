import styled, { css, keyframes } from 'styled-components'

const move = keyframes`
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
`

function createCSS({
    count,
    colors,
    size,
    speed,
}) {
    let styles = '';

    for (let i = 0; i < count; i += 1) {
        const speedValue = 500 - (speed * 10);
        const color = colors[Math.floor((Math.random() * colors.length))];
        const randomTop = Math.floor((Math.random() * 100) + 1);
        const randomLeft = Math.floor((Math.random() * 100) + 1);
        const randomDuration =
            ((Math.floor((Math.random() * speedValue) + 1) * 10) / 10) + 5;
        const randomDelay =
        ((Math.floor((Math.random() * speedValue) + 1) * 10) / 10) * -1;
        const randomTransition1 = Math.floor((Math.random() * 50) + 1) - 25;
        const randomTransition2 = Math.floor((Math.random() * 50) + 1) - 25;
        const blurRadius = Math.random() + 0.5 * size * 0.5;
        const x = Math.random() < 0.5 ? -1 : 1;
        const boxShadow = size * 2 * x;

        styles += ` span:nth-child(${i}) {
            color: ${color};
            top: ${randomTop}%;
            left: ${randomLeft}%;
            animation-duration: ${randomDuration}s;
            animation-delay: ${randomDelay}s;
            transform-origin: ${randomTransition1}vw ${randomTransition2}vh;
            box-shadow: ${boxShadow}vmin 0 ${blurRadius}vmin currentColor;
        }`
    }

    return css`${styles}`;
}

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: ${props => props.bgColor};
    overflow: hidden;

    ${props => createCSS(props)}
`

export const Span = styled.span`
    width: ${props => props.size}vmin;
    height: ${props => props.size}vmin;
    border-radius: ${props => props.size}vmin;
    backface-visibility: hidden;
    position: absolute;
    animation-name: ${move};
    animation-duration: ${props => props.speed};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`

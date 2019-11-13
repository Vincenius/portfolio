import styled, { css, keyframes } from 'styled-components'
// https://codepen.io/Mamboleoo/pen/BxMQYQ

const particleSize = '20vmin';
const animationDuration = 6;
const amount = '20';
const move = keyframes`
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
`

function createCSS() {
    let styles = '';

    for (let i = 0; i < 20; i += 1) {
        // TODO random color
        const randomTop = Math.floor((Math.random() * 100) + 1);
        const randomLeft = Math.floor((Math.random() * 100) + 1);
        const randomDuration =
            ((Math.floor((Math.random() * animationDuration) + 1) * 10) / 10) + 10;
        const randomDelay =
        ((Math.floor((Math.random() * animationDuration) + 1) * 10) / 10) - 1;
        const randomTransition1 = Math.floor((Math.random() * 50) + 1) - 25;
        const randomTransition2 = Math.floor((Math.random() * 50) + 1) - 25;
        const blurRadius = (Math.floor((Math.random() * 100) + 1) + 0.5) * particleSize * 0.5;
        const x = Math.random() < 0.5 ? -1 : 1

        styles += `&:nth-child(${i}) {
            background: red;
            top: ${randomTop}%;
            left: ${randomLeft}%;
            animation-duration: ${randomDuration}s;
            animation-delay: ${randomDelay}s;
            transform-origin: ${randomTransition1}vw ${randomTransition2}vh;
        }`

        /*
            $blurRadius: (random() + 0.5) * ${particleSize} * 0.5;
            $x: if(random() > 0.5, -1, 1);
            box-shadow: (${particleSize} * 2 * ${x}) 0 ${blurRadius} red;*/
    }

    return css`${styles}`;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #3E1E68;
`

export const Span = styled.span`
    width: ${particleSize};
    height: ${particleSize};
    border-radius: ${particleSize};
    backface-visibility: hidden;
    position: absolute;
    animation-name: ${move};
    animation-duration: ${animationDuration};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    $colors: (
        #583C87,
        #E45A84,
        #FFACAC
    );

    ${createCSS()}
`


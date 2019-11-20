import styled, { css } from 'styled-components'

export function createCSS({ addBgClass, count, size }) {
    let styles = '';

    for (let i = 0; i < count; i += 1) {
        const randomLeft = Math.floor(Math.random() * 90);
        const randomSize = Math.floor((Math.random() * (size[1] - size[0])) + size[0]);
        const randomDelay = Math.floor((Math.random() * (i * 5)) + 1);

        styles += `
${addBgClass ? '.background ' : ''}li:nth-child(${i}) {
    left: ${randomLeft}%;
    width: ${randomSize}px;
    height: ${randomSize}px;
    bottom: -${randomSize}px;
    animation-delay: ${randomDelay}s;
}`
    }

    return css`${styles}`;
}


export const Container = styled.ul`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #4e54c8;
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    overflow: hidden;

    li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate ${props => 51 - props.speed}s linear infinite;
    }

    ${props => createCSS(props)}

    @keyframes animate {
        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }
        100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }
`
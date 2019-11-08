import styled from 'styled-components'

export const Container = styled.header`
    position: relative;
    padding: 24px 0;
    display: block;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* todo variables */
        background: #0f8a9d;
        background: linear-gradient(57deg, #00C6A7 0%, #1E4D92 100%);
        transform-origin: 0;
        transform: skewY(-12deg);
    }
`

export const Content = styled.div`
    position: relative;
    max-width: 848px;
    width: 100%;
    padding: 50px 24px 0;
    margin: 0 auto 260px;
    /* todo variables */
    color: #fff;
    text-align: center;

    @media (max-width: 640px) {
        margin-bottom: 160px;
    }

    h1 {
        font-family: "PT Serif", serif;
        font-size: 42px;
        line-height: 52px;
        letter-spacing: -0.2px;
        margin-top: 48px;
        margin-bottom: 16px;

        /* todo variables  & animation */
        @media (max-width: 640px) {
            font-size: 36px;
            line-height: 46px;
        }
    }
`

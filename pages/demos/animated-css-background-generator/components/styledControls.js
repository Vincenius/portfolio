import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.8);
    color: #fff;
    margin: 20px;
    padding: 20px;
    max-width: 300px;
    z-index: 1;

    h3 {
        margin: 0;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const Source = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;

    > *:first-child {
        margin-right: 20px;
    }
`
import styled from 'styled-components'
import { TextareaAutosize } from '@material-ui/core';

export const Container = styled.div`
    position: relative;
    background: rgba(0,0,0,0.8);
    color: #fff;
    margin: 20px;
    padding: 20px;
    width: 300px;
    z-index: 1;

    h3 {
        margin: 0;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${props => props.noMargin ? '0' : '20px'};
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
export const CodeArea = styled(TextareaAutosize)`
    width: 100%;
    margin-bottom: ${props => props.marginBottom ? '20px' : '0'};
`
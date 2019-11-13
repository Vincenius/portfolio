import styled from 'styled-components'
import { middleGrey, darkGrey } from '../../ui/constants'

export const Container = styled.form`
    margin-bottom: 30px;
`
export const HiddenInput = styled.div`
    position: absolute;
    left: -5000px;
`
export const Label = styled.label`
    display: block;
    font-size: 16px;
    padding-bottom: 10px;
    font-weight: bold;
    line-height: 27px;
`
export const EmailInput = styled.input`
    font-size: 15px;
    display: block;
    padding: 0 0.4em;
    margin: 0 4% 10px 0;
    min-height: 32px;
    width: 58%;
    min-width: 130px;
    border-radius: 3px;
    border: 1px solid ${middleGrey};
    -webkit-appearance: none;
`
export const Button = styled.input`
    border: 1px solid ${middleGrey};
    -webkit-appearance: none;
    font-size: 18px;
    line-height: 27px;
    background: transparent;
    color: ${darkGrey};
`
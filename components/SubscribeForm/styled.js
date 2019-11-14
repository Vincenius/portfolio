import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { middleGrey, darkGrey, greenBlue } from '../../ui/constants'

export const Container = styled.form`
    margin-bottom: 30px;
`
export const HiddenInput = styled.div`
    position: absolute;
    left: -5000px;
`
export const Wrapper = styled(Paper)`
    padding: 20px;
    display: inline-block;
    min-width: 300px;
`
export const Input = styled(TextField)`
    width: 100%;
    margin-bottom: 20px !important;
`
export const SubmitButton = styled(Button)`
    background-color: ${greenBlue} !important;
    color: #fff !important;
`
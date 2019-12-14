import styled from 'styled-components'
import { breakpoint, breakpointSmall, breakpointLarge } from './constants'

export const Container = styled.div`
    max-width: 1128px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoint}) {
        padding-left: 16px;
        padding-right: 16px;
    }
`
export const PaddingContainer = styled(Container)`
    padding: 0 100px;

    @media (max-width: ${breakpoint}) {
        padding: 0 50px;
    }
    @media (max-width: ${breakpointSmall}) {
        padding: 0 20px;
    }
`
export const BlockLink = styled.a`
    display: block;
`
export const SidebarContainer = styled.div`
    display: flex;

    @media (max-width: ${breakpointLarge}) {
        flex-direction: column;
    }
`
export const Sidebar = styled.aside`
    width: 100%;
    max-width: 275px;
    margin-left: 50px;

    @media (max-width: ${breakpointLarge}) {
        margin: 0;
        max-width: 100%;
    }

    h2 {
        margin: 6px 0 16px;
    }
`

export const SidebarContent = styled.aside`
    @media (max-width: ${breakpointLarge}) {
        display: flex;
    }

    @media (max-width: ${breakpoint}) {
        flex-direction: column;
    }

    > * {
        @media (max-width: ${breakpointLarge}) {
            margin-right: 50px;

            &:last-child {
                margin-right: 0;
            }
        }

        @media (max-width: ${breakpoint}) {
            margin-right: 0
        }
    }
`
export const FlexBlock = styled.div`
    display: flex;
    margin-bottom: 50px;

    @media only screen and (max-width: ${breakpointSmall}) {
        flex-direction: column;
    }
`
export const FlexImage = styled.img`
    width: 300px;
    height: 100%;
    object-fit: cover;
    margin-right: 20px;
    margin-top: 15px;

    @media only screen and (max-width: ${breakpoint}) {
        width: 200px;
    }

    @media only screen and (max-width: ${breakpointSmall}) {
        width: 100%;
    }
`
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
export const GridContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
    margin: 40px auto;
    padding: 0;
`
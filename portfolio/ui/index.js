import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1128px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    margin: 0 auto;

    ul {
        display: inline-flex;
        list-style: none;
        padding: 0;
        margin: 0;

        a {
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0px;
            font-weight: 700;
            color: rgba(255,255,255,0.8);
            text-transform: uppercase;
            text-decoration: none;
            line-height: 16px;
            padding: 8px 24px;

            &:hover {
                color: #fff;
            }
        }
    }
`

// todo media query small: padding-left: 16px; padding-right: 16px;

import styled from 'styled-components'

export const Navigation = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

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

        li:last-child a {
            padding-right: 0;
        }
    }
`
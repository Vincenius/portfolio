import React from 'react'
import { GitHub, Twitter, LinkedIn } from '@material-ui/icons'
import * as S from './styled'

const SocialBar = props => (
    <S.Container>
        <a href="https://github.com/Vincenius" target="_blank" rel="noopener noreferrer">
            <GitHub />
        </a>
        <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener noreferrer">
            <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/vincent-will-58356212a/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
        </a>
    </S.Container>
)

export default SocialBar

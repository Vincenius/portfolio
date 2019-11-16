import React, { useState } from 'react'
import * as S from './styledControls'

const Controls = ({ children, source }) => {
    const [visible, toggleVisible] = useState(true);
    return (
        <S.Container>
            <S.Header>
                <h3>Controls</h3>
                <a
                    onClick={() => toggleVisible(!visible)}
                    href="#"
                >hide</a>
            </S.Header>

            { visible && children }

            <S.Source>
                <span>
                    Credit: Louis Hoebregts
                </span>
                <a href={source} target="_blank" rel="noopener">
                    Source
                </a>
            </S.Source>
        </S.Container>
    )
}

export default Controls

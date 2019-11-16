import React, { useState } from 'react'
import * as S from './styledControls'

const Controls = ({ children, source, credit, htmlCode }) => {
    const [showControl, toggleControl] = useState(true);
    const [showCode, toggleCode] = useState(false);

    return (
        <div>
            <S.Container>
                <S.Header>
                    <h3>Controls</h3>
                    <a
                        onClick={e => {
                            e.preventDefault()
                            toggleControl(!showControl)}
                        }
                        href="#"
                    >
                        { showControl && 'hide' }
                        { !showControl && 'show' }
                    </a>
                </S.Header>

                { showControl && children }

                <S.Source>
                    <span>
                        Credit: {credit}
                    </span>
                    <a href={source} target="_blank" rel="noopener">
                        Source
                    </a>
                </S.Source>
            </S.Container>
            <S.Container>
                <S.Header noMargin={!showCode}>
                    <h3>Code</h3>
                    <a
                        onClick={e => {
                            e.preventDefault()
                            toggleCode(!showCode)}
                        }
                        href="#"
                    >
                        { showCode && 'hide' }
                        { !showCode && 'show' }
                    </a>
                </S.Header>

                { showCode && <div>
                    <span>HTML</span>
                    <S.CodeArea
                        value={htmlCode}
                        rowsMax={5}
                        marginBottom={true}
                    />

                    <span>CSS</span>
                    <S.CodeArea rowsMax={5} />
                </div>}
            </S.Container>
        </div>

    )
}

export default Controls

import React, { useState } from 'react'
import { Head } from '../../../components'
import { Background1, Background2 } from './components'
import * as S from './styled'

const Demo = () => {
    const [activeBg, changeBg] = useState(0);
    return (
        <S.Container>
            <Head
                title="Animated CSS Background Generator"
                link="https://vincentwill.com/demos/animated-css-background-generator"
                image="TODO"
                description="A collection of pure css animated backgrounds with the possibility to customize"
                // TODO date={d}
                isArticle={true}
            />

            <S.Navigation>
                <a
                    onClick={() => changeBg(0)}
                    className={activeBg === 0 ? 'active' : ''}
                >
                    Demo 1
                </a>
                <a
                    onClick={() => changeBg(1)}
                    className={activeBg === 1 ? 'active' : ''}
                >
                    Demo 2
                </a>
            </S.Navigation>

            { activeBg === 0 && <Background1 /> }
            { activeBg === 1 && <Background2 /> }
        </S.Container>
    )
}

export default Demo

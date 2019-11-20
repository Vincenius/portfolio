import React, { useState } from 'react'
import { Head } from '../../../components'
import { Background1, Background2, Background3, Background4 } from './components'
import * as S from './styled'

const Demo = () => {
    const [activeBg, changeBg] = useState(1);
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
                <a
                    onClick={() => changeBg(2)}
                    className={activeBg === 2 ? 'active' : ''}
                >
                    Demo 3
                </a>
                <a
                    onClick={() => changeBg(3)}
                    className={activeBg === 4 ? 'active' : ''}
                >
                    Demo 4
                </a>
            </S.Navigation>

            { activeBg === 0 && <Background1 /> }
            { activeBg === 1 && <Background2 /> }
            { activeBg === 2 && <Background3 /> }
            { activeBg === 3 && <Background4 /> }
        </S.Container>
    )
}

export default Demo

import React, { useState } from 'react'
import Link from 'next/link'
import { Head } from '../../../components'
import Background1 from './components/Background1'
import Background2 from './components/Background2'
import Background3 from './components/Background3'
import * as S from '../../../styles/resources/animatedCssBg'

const Demo = () => {
    const [activeBg, changeBg] = useState(0);
    return (
        <S.Container>
            <Head
                title="Animated CSS Background Generator"
                link="https://vincentwill.com/demos/animated-css-background-generator"
                image="/resources/resources01.jpg"
                description="A collection of pure css animated backgrounds with the possibility to customize"
                date={new Date('November 27, 2019')}
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
            </S.Navigation>

            { activeBg === 0 && <Background1 /> }
            { activeBg === 1 && <Background2 /> }
            { activeBg === 2 && <Background3 /> }

            <S.Footer>
                Made by <Link href="/"><a>Vincent Will</a></Link>
            </S.Footer>
        </S.Container>
    )
}

export default Demo

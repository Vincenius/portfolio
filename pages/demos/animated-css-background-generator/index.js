import React from 'react'
import { Head } from '../../../components'
import { Background1 } from './components'
import * as S from './styled'

const Home = () => (
    <S.Container>
        <Head
            title="Animated CSS Background Generator"
            link="https://vincentwill.com/demos/animated-css-background-generator"
            image="TODO"
            description="A collection of pure css animated backgrounds with the possibility to customize"
            // TODO date={d}
            isArticle={true}
        />

        <Background1 />
    </S.Container>
)

export default Home

import React from 'react'
import * as S from '../styles/weekly'
import { WeeklyPreview, Layout } from '../components'

const Home = () => (
    <Layout
        title="Weekly roundup of resources about web development"
    >
        <S.Container>
            <WeeklyPreview
                number="2"
                date="December 04, 2019"
                description="Bootstrap Icons, SVG Landscapes, roughViz.js, JavaScript Christmas, Curlie, Cell and more.."
            />
            <WeeklyPreview
                number="1"
                date="November 27, 2019"
                description="SWR, Fresh Folk, Colors & fonts, Animated CSS Backgrounds, Postwoman, Pika and more.."
            />
        </S.Container>
    </Layout>
)

export default Home

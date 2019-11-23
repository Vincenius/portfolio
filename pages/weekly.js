import React from 'react'
import * as S from './weekly/styled'
import { WeeklyPreview, Layout } from '../components'

const Home = () => (
    <Layout
        title="Weekly roundup of resources about web development"
    >
        <S.Container>
            <WeeklyPreview
                number="1"
                date="November 27, 2019"
                description="TODO summary."
            />
        </S.Container>
    </Layout>
)

export default Home

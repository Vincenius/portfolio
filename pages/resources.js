import React from 'react'
import * as ui from '../ui'
import { ArticlePreview, Footer, Layout } from '../components'

const Home = () => (
    <Layout
        title="A Blog about Web-Development"
    >
        <ui.Container>
        <ArticlePreview
            date="November 27, 2019"
            headline="Animated CSS Background Generator"
            description="A collection of pure css animated backgrounds with the possibility to customize."
            link="/resources/animated-css-background-generator"
        />
        </ui.Container>
    </Layout>
)

export default Home

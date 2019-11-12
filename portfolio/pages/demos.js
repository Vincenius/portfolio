import React from 'react'
import * as ui from '../ui'
import Layout from '../components/Layout'
import ArticlePreview from '../components/ArticlePreview'
import Footer from '../components/Footer'

const Home = () => (
    <Layout
        title="A Blog about Web-Development"
    >
        <ui.Container>
        <ArticlePreview
            date="November 12, 2019"
            headline="Animated CSS Background Generator"
            description="A collection of pure css animated backgrounds with the possibility to customize."
            link="/demos/animated-css-background-generator"
            // TODO screenshot
        />
        </ui.Container>
        <Footer />
    </Layout>
)

export default Home

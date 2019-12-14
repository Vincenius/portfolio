import React from 'react'
import * as ui from '../ui'
import { ArticlePreview, SubscribeForm, Layout } from '../components'
import { generateResources } from '../content/generator'

const Home = () => (
    <Layout
        title="A Blog about Web-Development"
    >
        <ui.Container>
            { generateResources() }
            <SubscribeForm text="Don't miss the next resource. Drop your email in the box below and get it straight in your inbox." />
        </ui.Container>
    </Layout>
)

export default Home

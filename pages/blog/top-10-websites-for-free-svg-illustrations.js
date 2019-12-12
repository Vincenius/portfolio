import React from 'react'
import * as ui from '../../ui'
import { SubscribeForm, Layout } from '../../components'
import meta from '../../content/articles'

const postMeta = meta.find(m => m.id === 5)

const Post = () => (
    <Layout
        // TODO
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        link={`https://vincentwill.com${postMeta.link}`}
        description={postMeta.description}
        image="/blog/4-duckduckgo.png"
    >
        <ui.Container>
            <p>TODO Description</p>

            <h3>unDraw Illustrations</h3>
            <ui.BlockLink href="https://undraw.co/illustrations" target="_blank" rel="noopener">
                https://undraw.co/illustrations
            </ui.BlockLink>
            <img src="/blog/5/undraw.jpg" alt="unDraw Illustrations" />
            <p>
                My favourite illustrations site, as you can easily search and customize the color of the svgs. Also they are open-source.
            </p>
            <SubscribeForm />
        </ui.Container>
    </Layout>
)

export default Post

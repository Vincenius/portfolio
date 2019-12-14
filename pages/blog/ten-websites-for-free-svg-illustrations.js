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

            <ui.FlexBlock>
                <ui.FlexImage src="/blog/5/undraw.jpg" alt="unDraw Illustrations" />
                <div>
                    <a href="https://undraw.co/illustrations" target="_blank" rel="noopener">
                        <h3>unDraw Illustrations</h3>
                    </a>
                    <ui.BlockLink href="https://undraw.co/illustrations" target="_blank" rel="noopener">
                        https://undraw.co/illustrations
                    </ui.BlockLink>
                    <p>
                        My favourite illustrations site, as you can easily search and customize the color of the svgs. Also they are open-source.
                    </p>
                </div>
            </ui.FlexBlock>

            https://undraw.co/illustrations

            https://gallery.manypixels.co/

            https://isometric.online/

            https://illlustrations.co/

            https://lukaszadam.com/illustrations

            https://www.humaaans.com

            https://www.glazestock.com/

            https://www.opendoodles.com/

            https://fresh-folk.com/

            https://woobro.design/

            <SubscribeForm />
        </ui.Container>
    </Layout>
)

export default Post

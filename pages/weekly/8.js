import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 8
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.title}
        date={postMeta.date}
        link={postMeta.link}
        image={postMeta.image}
        description={postMeta.description}
    >
        <S.Container>
            <LinkBox
                title="Gradient Magic"
                description="A huge collection of beautiful css gradients."
                link="https://www.gradientmagic.com/"
                image="/weekly/screenshots/gradientmagic.jpg"
            />
            <LinkBox
                title="Broot"
                description="A cool cli to get a better overview of directories."
                link="https://dystroy.org/broot/"
                image="https://dystroy.org/broot/img/20191112-overview.png"
            />
            <LinkBox
                title="cacolor.co"
                description="A good way to manage and share color palettes."
                link="https://calcolor.co/"
                image="https://calcolor.co/assets/img/preview.png"
            />
            <LinkBox
                title="Stencil"
                description="A toolchain to build web components that run in every browser."
                link="https://stenciljs.com/"
                image="/weekly/screenshots/stencil.jpg"
            />
            <LinkBox
                title="23 lesser known VS Code Shortcuts as GIF"
                description="A nice article by Andreas Müller about useful shortcuts for VS Code."
                link="https://dev.to/devmount/23-lesser-known-vs-code-shortcuts-as-gif-80"
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--Wyiuef-E--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--b5JXyKSp--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/q7q5tlmm008s28c9r4f6.gif"
            />
            <LinkBox
                title="Craft.js"
                description="This is a library to create your own page editor. It comes with a drag-n-drop system and handles the way user components should be rendered, updated and moved."
                link="https://github.com/prevwong/craft.js"
                image="https://user-images.githubusercontent.com/16416929/72202590-4d05f500-349c-11ea-9e43-1da1cb0c30e9.gif"
            />
            <LinkBox
                title="CSS-Only Carousel"
                description="A good article how to create a carousel with only CSS by Chris Coyier."
                link="https://css-tricks.com/css-only-carousel/"
                image="https://css-tricks.com/wp-content/uploads/2019/12/carousel-slides.png"
            />
            <LinkBox
                title="How to move your project to TypeScript - at your own pace"
                description="A guide how to move your project to Typescript."
                link="https://www.twilio.com/blog/move-to-typescript"
                image="https://twilio-cms-prod.s3.amazonaws.com/images/1jt1K6xUWs_YCZZo-BiSoNeAAbFzm-dUb-BTx3VtEzJvDZ.width-808.png"
            />

            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post
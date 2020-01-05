import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 6
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
                title="Just JavaScript"
                description="A new email course by Dan Abramov about the JavaScript Mental Models he uses."
                link="https://justjavascript.com/"
                image="/weekly/screenshots/justjavascript.jpg"
            />
            <LinkBox
                title="CHL.LI"
                description="A simple, modern, free and privacy-friendly URL shortener."
                link="https://chl.li/"
                image="/weekly/screenshots/chlli.jpg"
            />
            <LinkBox
                title="CoreUI Icons"
                description="1500+ simply beautiful open source icons in multiple formats SVG, PNG, and Webfonts."
                link="https://github.com/coreui/coreui-icons/tree/1.0.0"
                image="https://camo.githubusercontent.com/6b9a71a7be4404bf82449d16e82b200b1e7e691d/68747470733a2f2f636f726575692e696f2f696d616765732f69636f6e735f667265655f62675f7365742e706e67"
            />
            <LinkBox
                title="Convert2Svg"
                description="A free and open-source tool to easily transform any image or photo into a multi colored svg vector file"
                link="https://convert2svg.com/"
                image="https://convert2svg.com/preview.jpg"
                selfPromoted="New Resource"
            />
            <LinkBox
                title="Generative Placeholders"
                description="Use generative art for your placeholder images."
                link="https://generative-placeholders.glitch.me/"
                image="https://generative-placeholders.glitch.me/image?width=400&height=300"
            />
            <LinkBox
                title="Accessibility tools for designers and developers"
                description="A nice article by Lisa Dziuba about accessibility and tools to test it."
                link="https://uxdesign.cc/accessibility-tools-for-designers-and-developers-ea400a415c0a"
                image="https://miro.medium.com/max/4000/1*v91ZxZxDtnXpU72vDvYaJg.png"
            />
            <LinkBox
                title="massCode"
                description="A free and open source code snippets manager for developers."
                link="https://github.com/antonreshetov/massCode"
                image="https://raw.githubusercontent.com/antonreshetov/massCode/master/logo.png"
            />
            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post
import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 2
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
                title="Bootstrap Icons"
                description="Bootstrap is releasing Icons their very first icon set that’s designed entirely by their team. It's open sourced for everyone to use, with or without Bootstrap."
                link="https://blog.getbootstrap.com/2019/11/26/bootstrap-icons/"
                image="https://blog.getbootstrap.com/assets/img/bootstrap-social.png"
            />
            <LinkBox
                title="Procedurally Generated SVG Landscapes"
                description="Kevin Wang wrote this great article how to create a generator for beautiful landscape svgs."
                link="https://kwa.ng/procedurally-generated-svg-landscapes/"
                image="https://kwa.ng/static/4922c522dbd60d5f4a14cbd0e0b48f95/2d017/confidence-gap-adam-eastburn.jpg"
            />
            <LinkBox
                title="JavaScript Christmas"
                description="A few days late, but this is a advent calendar with 24 days of articles about JavaScript."
                link="https://javascript.christmas/"
                image="https://cdn.jsdelivr.net/gh/kgolid/lukebilder@2cec035/11/tre.png"
            />
            <LinkBox
                title="roughViz.js"
                description="A nice JavaScript library for creating sketchy/hand-drawn styled charts."
                link="https://github.com/jwilber/roughViz"
                image="https://raw.githubusercontent.com/jwilber/random_data/master/roughViz_Title.png"
            />
            <LinkBox
                title="Curlie"
                description="Curlie is a command line HTTP client simliar to HTTPie, but with the features of curl."
                link="https://curlie.io/"
                image="https://curlie.io/doc/get.png"
            />
            <LinkBox
                title="Cell"
                description="A CSS naming convention similar to BEM, but using Sass."
                link="https://github.com/One-Nexus/Cell"
                image="https://camo.githubusercontent.com/d39657f9c535590620b3139de5af96a9058b8362/687474703a2f2f6f6e656e657875732e696f2f63656c6c2f696d616765732f63656c6c2d6c6f676f2e706e67"
            />
            <LinkBox
                title="Checklist to avoid the most common accessibility errors"
                description="A nice article by Bruce Lawson about the most common accessibility errors and how to avoid them."
                link="https://www.brucelawson.co.uk/2019/checklist-to-avoid-the-most-common-accessibility-errors/"
                image="https://www.brucelawson.co.uk/wp-content/themes/HTML5/images/coast-icon.png"
            />
            <LinkBox
                title="Button - Press for knowledge"
                description="An in-depth anatomy of Buttons."
                link="https://rgb.wiki/button"
                image="https://images.ctfassets.net/1o0msnomnlhl/3Skv8769tmFYMr5b46dd3y/b76a8baf03d46804d536cf0129070f1b/button.png?h=500"
            />
            <LinkBox
                title="Lighthouse CI"
                description="A possiblity to integrate Lighthouse into your CI, viewing the changes, and preventing regressions."
                link="https://github.com/GoogleChrome/lighthouse-ci"
                image="https://user-images.githubusercontent.com/39191/68522269-7917b680-025e-11ea-8d96-2774c0a0b04c.png"
            />
            <LinkBox
                title="Making a Better Custom Select Element"
                description="An interesting article by Julie Grundy how to make a custom select element accessible."
                link="https://24ways.org/2019/making-a-better-custom-select-element/?ref=resoource.com"
                image="https://cloud.24ways.org/2019/sharing/making-a-better-custom-select-element.png"
            />
            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post
import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 3
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
                title="Self Hosted"
                description=" An extensive searchable list of the best self hosted software developers."
                link="https://selfhostedsource.tech/self-hosted"
                image="/weekly/screenshots/selfhosted.jpg"
            />
            <LinkBox
                title="CSS Layout"
                description="A collection of popular layouts and patterns made with CSS."
                link="https://csslayout.io/"
                image="/weekly/screenshots/csslayouts.jpg"
            />
            <LinkBox
                title="Labels are a last resort"
                description="A good guide by the people of Refactorig UI about the usage of labels in UI."
                link="https://refactoringui.com/previews/labels-are-a-last-resort/"
                image="https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/previews/labels-are-a-last-resort-04.png"
            />
            <LinkBox
                title="Deep Sea"
                description="A really cool demo by Neal Agarwal. It's also totally worth to check out his other stuff!"
                link="https://neal.fun/deep-sea/"
                image="https://neal.fun/thumbnails/deep-sea.png"
            />
            <LinkBox
                title="react-spring"
                description=" A simple, spring-physics based animation library that should cover most of your UI related animation."
                link="https://www.react-spring.io/"
                image="https://www.react-spring.io/share.jpg"
            />
            <LinkBox
                title="Leonardo"
                description="A colors generator based on a desired contrast ratio for beautiful, accessible, and adaptive color systems."
                link="https://leonardocolor.io/"
                image="https://miro.medium.com/max/5636/1*rmcnZeNiITkATulEGyMZOA@2x.png"
            />
            <LinkBox
                title="CSS: An Art, a Science, a Nightmare"
                description="An in depth article about CSS by Tania Rascia for people who have had to touch CSS a few times but ultimately don't feel like they know what they're doing, or struggle with making basic layouts."
                link="https://www.taniarascia.com/overview-of-css-concepts/"
                image="https://www.taniarascia.com/static/fe910b03d4eeaf5767dc54e99c7337c8/4148e/css2.png"
            />
            <LinkBox
                title="Responsive Image Breakpoints Generator"
                description="Easily generate the optimal responsive image dimensions."
                link="https://responsivebreakpoints.com/"
                image="https://responsivebreakpoints.com/images/responsive_breakpoints_logo_square.png"
            />
            <LinkBox
                title="The State of UX in 2020"
                description="From the tools we'll use, to our process, to the behaviors that will change the way we design — here's a list of what to expect for User Experience (UX) Design in the next year."
                link="https://trends.uxdesign.cc/"
                image="https://images.squarespace-cdn.com/content/59ebb4b3cd39c3e3ae4822d5/1573932505917-2HL1P165FP6K1Y906POI/Social.jpg"
            />
            <LinkBox
                title="6 GitHub Repos For Instant Knowledge Boost"
                description="Mirosław Farajewicz lists a bunch of smaller and more single-subject repositories."
                link="https://dev.to/mfarajewicz/6-github-repos-for-instant-knowledge-boost-3mo0"
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--0oew9f0c--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--rV1qmRbb--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/6t9lakxmowneulfyvokg.jpg"
            />
            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post
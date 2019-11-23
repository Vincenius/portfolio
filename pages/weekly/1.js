import React from 'react'
import * as S from './styled'
import { SubscribeForm, Layout, LinkBox } from '../../components'

const Post = () => (
    <Layout
        isArticle={true}
        title="Weekly web development update from 27th November 2019"
        date="November 27, 2019"
        link="https://vincentwill.com/blog/4-websites-to-recreate-to-practice-your-web-development-skills"
        image="https://vincentwill.com/blog/4-duckduckgo.png"
        description="TODO"
    >
        <S.IntroText>
            <p>
                Today I'm introducing the weekly. This will be a curated list of things I stubmled upon during the previous week.
            </p>
            <p>
                I'm reading through lots of various forums and websites related to web development.
                Starting from now I will save the (for me) most interesting resources, tools and reads and will publish them here.
            </p>
            <p>
            If you have somthing, you think I should mention here, let me know: <a href="mailto:vincentwill@arcor.de">vincentwill@arcor.de</a>
            </p>
        </S.IntroText>
        <S.Container>
            <LinkBox
                title="SWR - React Hooks for Remote Data Fetching"
                description="A lightweight library for remote data fetching using React Hooks. It returns the data from cache, then sends the fetch request and finally comes with the up-to-date data again."
                link="https://swr.now.sh/"
                image="https://assets.zeit.co/image/upload/v1572282926/swr/twitter-card.jpg"
            />
            <LinkBox
                title="Fresh Folk - An illustration library of people and objects"
                description="Each character comes with a range of poses, outfits and skin tones. Create a wide range of scenes with 43 Objects to choose from."
                link="https://fresh-folk.com/"
                image="http://fresh-folk.com/assets/images/card.jpg?v51183319899651"
            />
            <LinkBox
                title="Animated CSS Background Generator"
                description="A collection of pure css animated backgrounds with the possibility to customize."
                link="/resources/animated-css-background-generator"
                image="/resources/resources01-small.jpg"
                selfPromoted={true}
            />
            <LinkBox
                title="Postwoman - An API request builder"
                description="A free, fast, and beautiful alternative to Postman."
                link="https://github.com/liyasthomas/postwoman"
                image="https://postwoman.io/logo.jpg"
            />
            <LinkBox
                title="Pika - A new kind of package registry for the modern web."
                description="It handles formatting, configuring, building and publishing every package on the registry, so that individual authors don't have to."
                link="https://www.pika.dev/registry"
                image="https://www.pika.dev/static/img/registry-cover.jpg"
            />
            <LinkBox
                title="Colors, fonts and resources for web developers"
                description="Curated library of colors and fonts for Web Developers & Digital Designers and a curated collection of resources."
                link="https://www.colorsandfonts.com/"
                image="https://colorsandfonts.com/images/opengraph.png"
            />
            <LinkBox
                title="Developer Roadmaps"
                description="Step by step guides and paths to learn different tools or technologies."
                link="https://roadmap.sh/roadmaps"
                image="https://roadmap.sh/static/brand.png"
            />
            { /* TODO <SubscribeForm /> */ }
        </S.Container>
    </Layout>
)

export default Post
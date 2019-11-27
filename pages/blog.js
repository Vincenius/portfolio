import React from 'react'
import * as ui from '../ui'
import { ArticlePreview, Footer, Layout } from '../components'

const Home = () => (
    <Layout
        title="A Blog about Web-Development"
    >
        <ui.Container>
        <ArticlePreview
            date="October 23, 2019"
            headline="4 Websites to recreate to practice your web development skills"
            description="The best way to learn web development is by practice. But when you get started you might feel lost. There are just so many things to learn, which makes it hard to choose the right project to get started. In the following I'll share some…"
            link="/blog/4-websites-to-recreate-to-practice-your-web-development-skills"
        />
        <ArticlePreview
            date="October 16, 2019"
            headline="The best note taking apps for developers"
            description="There are tons of note taking apps out there. But which ones are best suitable for developers? In the following I'll introduce three note taking apps for developers with good code support. + Available for: Mac, Windows, Android, iOS + Nice Code editor with a…"
            link="/blog/the-best-note-taking-apps-for-developers"
        />
        <ArticlePreview
            date="March 23, 2019"
            headline="How to toggle an array item with Javascript in React State"
            description="In this short article I will demonstrate how to write a function to toggle array items with Javascript and inside of React state. First of all let’s have a look how to toggle an array item with Javascript (ES6): This function will get an array and…"
            link="/blog/how-to-toggle-an-array-item-in-react-state"
        />
        <ArticlePreview
            date="July 27, 2018"
            headline="Widget based website with dynamic Vue.js components"
            description="In this post I will explain how to generate a webpage using dynamic Vue.js components. This could be the foundation of a CMS based on Vue. The finished project can be found here First of all install the vue-cli if you havent already. To do so open…"
            link="/blog/widget-based-website-with-dynamic-vuejs-components"
        />
        </ui.Container>
    </Layout>
)

export default Home

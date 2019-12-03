import React from 'react'
import * as ui from '../ui'
import { ArticlePreview, Layout, WeeklyPreview } from '../components'

const Home = () => (
  <Layout
    title="News, Resources and Articles about Web-Development"
  >
    <ui.Container>
      <ui.SidebarContainer>
        <div>
          <h2>Latest Articles & Resources</h2>
          <ArticlePreview
            type="Resource"
            date="November 27, 2019"
            headline="Animated CSS Background Generator"
            description="A collection of pure css animated backgrounds with the possibility to customize."
            link="/resources/animated-css-background-generator"
          />
          <ArticlePreview
            type="Article"
            date="October 23, 2019"
            headline="4 Websites to recreate to practice your web development skills"
            description="The best way to learn web development is by practice. But when you get started you might feel lost. There are just so many things to learn, which makes it hard to choose the right project to get started. In the following I'll share some…"
            link="/blog/4-websites-to-recreate-to-practice-your-web-development-skills"
          />
          <ArticlePreview
            type="Article"
            date="October 16, 2019"
            headline="The best note taking apps for developers"
            description="There are tons of note taking apps out there. But which ones are best suitable for developers? In the following I'll introduce three note taking apps for developers with good code support. + Available for: Mac, Windows, Android, iOS + Nice Code editor with a…"
            link="/blog/the-best-note-taking-apps-for-developers"
          />
          <ArticlePreview
            type="Article"
            date="March 23, 2019"
            headline="How to toggle an array item with Javascript in React State"
            description="In this short article I will demonstrate how to write a function to toggle array items with Javascript and inside of React state. First of all let’s have a look how to toggle an array item with Javascript (ES6): This function will get an array and…"
            link="/blog/how-to-toggle-an-array-item-in-react-state"
          />
          <ArticlePreview
            type="Article"
            date="July 27, 2018"
            headline="Widget based website with dynamic Vue.js components"
            description="In this post I will explain how to generate a webpage using dynamic Vue.js components. This could be the foundation of a CMS based on Vue. The finished project can be found here First of all install the vue-cli if you havent already. To do so open…"
            link="/blog/widget-based-website-with-dynamic-vuejs-components"
          />
        </div>
        <ui.Sidebar>
          <h2>Latest News</h2>

          <ui.SidebarContent>
            <WeeklyPreview
              number="2"
              date="December 04, 2019"
              description="Bootstrap Icons, roughViz.js, JavaScript Christmas, Curlie, Cell and more.."
            />
            <WeeklyPreview
              number="1"
              date="November 27, 2019"
              description="SWR, Fresh Folk, Colors & fonts, Animated CSS Backgrounds, Postwoman, Pika and more.."
            />
          </ui.SidebarContent>
        </ui.Sidebar>
      </ui.SidebarContainer>
    </ui.Container>
  </Layout>
)

export default Home

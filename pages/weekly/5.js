import React from 'react'
import * as S from '../../styles/weekly'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import meta from '../../content/weekly'

const postId = 5
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
        <S.IntroText>
            <p>
                Because of holiday and christmas, this weekly and the next one will be a little smaller :)
            </p>
        </S.IntroText>
        <S.Container>
            <LinkBox
                title="The Most Hearted Of 2019"
                description="The most popular Pens from the year 2019 of Codepen. Definitely worth checking out."
                link="https://codepen.io/2019/popular/pens"
                image="/weekly/screenshots/codepen2019.png"
            />
            <LinkBox
                title="V 8.0 Release"
                description="V8 is Google’s open source high-performance JavaScript and WebAssembly engine. It is used in Chrome and in Node.js, among others."
                link="https://v8.dev/blog/v8-release-80"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/512px-V8_JavaScript_engine_logo_2.svg.png"
            />
            <LinkBox
                title="lazy-simon.js"
                description="A tiny JavaScript library to lazy load all <img> on your website, by Simon Frey."
                link="https://lazy.simon-frey.eu/"
                image="https://lazy.simon-frey.eu/img/social.jpg"
            />
            <LinkBox
                title="Top GitHub Apps You Should Know About"
                description="A few, effective GitHub apps for your workflow."
                link="https://devops.substack.com/p/top-github-apps-you-should-know-about"
                image="https://res.cloudinary.com/hhsslviub/image/fetch/h_600/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F035344f5-d6ab-4d1f-85c6-c9484510719e_4032x1960.jpeg"
            />
            <LinkBox
                title="What Is JavaScript Made Of?"
                description="An interesting read by Dan Abramov about the details of Javascript."
                link="https://overreacted.io/what-is-javascript-made-of/"
                image="/weekly/screenshots/whatisjavascriptmadeof.png"
            />
            <LinkBox
                title="Replacing Redux with observables and React Hooks"
                description="A good read how (and why) Simon Trény got rid of Redux with observables and React Hooks."
                link="https://blog.betomorrow.com/replacing-redux-with-observables-and-react-hooks-acdbbaf5ba80"
                image="https://miro.medium.com/max/3200/1*mgGAjZDWMu1OnvGyTvbSYw@2x.png"
            />
            <SubscribeForm type="weekly" />
        </S.Container>

        <PrevNext postId={postId} />
    </Layout>
)

export default Post
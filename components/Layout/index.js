import React from 'react'
import Head from 'next/head'

import "../../ui/global.css"
import '../../ui/code-style/github.css';
import { Header, Footer } from '../'
import * as S from './styled'

class Layout extends React.Component {
    componentDidMount() {
        // matomo
        if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
            var _paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
                var u="//analytics.vincentwill.com/";
                _paq.push(['setTrackerUrl', u+'hokuspokusp']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'hokuspokusj'; s.parentNode.insertBefore(g,s);
            })();
        }
    }

    render() {
        const {
            title,
            children,
            isArticle,
            date,
            link,
            image,
            description,
        } = this.props
        const d = date ? new Date(date) : undefined

        return (
            <S.Container>
                <Head>
                    <title>{title} | Vincent Will</title>
                    <link rel='icon' href='/favicon.ico' type="image/x-icon" />
                    <meta charSet="utf-8"></meta>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <meta name="robots" content="index, follow"></meta>
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto&display=swap" rel="stylesheet" />

                    { isArticle &&
                        <React.Fragment>
                            <link rel="canonical" href={link} />
                            <meta name="description" content={description} />
                            <meta property="og:title" content={title} />
                            <meta property="og:image" content={image} />
                            <meta property="og:site_name" content="Vincent Will - Blog" />
                            <meta property="og:description" content={description} />
                            <meta property="og:url" content={link} />
                            <meta property="og:type" content="article" />
                            <script type="application/ld+json">
                                {`
                                    '@context': "http://schema.org",
                                    "@type":"Article",
                                    "mainEntityOfPage": {
                                        "@type": "WebPage",
                                        "@id":"${link}"
                                    },
                                    "headline": "${title}",
                                    "datePublished":"${d.toISOString()}",
                                    "image": {
                                        "@type":"ImageObject",
                                        "url":"${image}",
                                        "height":646,"width":1300
                                    },
                                    "description":"${description}",
                                    "author": {
                                        "@type":"Person",
                                        "name":"Vincent Will"
                                    },
                                    "publisher": {
                                        "@type":"Organization",
                                        "name":"Vincent Will",
                                        "logo":{
                                            "@type":"ImageObject",
                                            "url":"https://vincentwill.com/images/blog/logo.png",
                                            "height":64,
                                            "width":64
                                        }
                                    }
                                `}
                            </script>
                        </React.Fragment>
                    }
                </Head>
                <Header>
                    <h1>{title}</h1>
                    { isArticle && <p><S.Time datetime={d.toISOString()}>{date}</S.Time> by Vincent Will</p> }
                </Header>

                { children }

                <Footer />
            </S.Container>
        )
    }
}

export default Layout

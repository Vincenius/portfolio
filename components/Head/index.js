import React from 'react'
import Head from 'next/head'

class MyHead extends React.Component {
    componentDidMount() {
        // matomo
        if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
            var _paq = window._paq || [];
            _paq.push(["setDoNotTrack", true]);
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
            link,
            description,
            image,
            date,
            isArticle,
        } = this.props

        return (
            <Head>
                <title>{title} | Vincent Will</title>
                <link rel='icon' href='/favicon.ico' type="image/x-icon" />
                <meta charSet="utf-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="robots" content="index, follow"></meta>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

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
                                "datePublished":"${date}",
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
        )
    }
}

export default MyHead
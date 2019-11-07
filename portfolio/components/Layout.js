import React from 'react'
import Head from 'next/head'

import Nav from './Nav'

/* TODO add matomo
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
*/
const Layout = ({
    children,
    title,
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' type="image/x-icon" />
            <meta charSet="utf-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="robots" content="index, follow"></meta>
            <link href="https://fonts.googleapis.com/css?family=Lato:400,400i|PT+Serif:700" rel="stylesheet"></link>
        </Head>
        <style jsx global>{`
            body {
                background: #000;
                font: 11px menlo;
                color: #fff;
                margin: 0;

                font-family: "Roboto Condensed",sans-serif;
                hyphens: manual;
                letter-spacing: -.02rem;
                line-height: 1.2;
            }
        `}</style>

        <div>
            <Nav />

            { children }
        </div>
    </div>
)

export default Layout

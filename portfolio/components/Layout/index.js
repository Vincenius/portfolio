import React from 'react'
import Head from 'next/head'

import "../../ui/global.css"
import Header from '../Header'
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
        const { title, children } = this.props
        return (<S.Container>
            <Head>
                <title>{title} | Vincent Will</title>
                <link rel='icon' href='/favicon.ico' type="image/x-icon" />
                <meta charSet="utf-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="robots" content="index, follow"></meta>
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto&display=swap" rel="stylesheet" />
            </Head>
            <Header>
                <h1>{title}</h1>
            </Header>

            { children }
        </S.Container>)
    }
}

export default Layout

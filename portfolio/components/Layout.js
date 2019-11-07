import React from 'react'
import Head from 'next/head'

import Nav from './Nav'

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
        </Head>
        <style jsx global>{`
            body {
                background: #000;
                font: 11px menlo;
                color: #fff;
                margin: 0;
            }
        `}</style>

        <div>
            <Nav />

            { children }
        </div>
    </div>
)

export default Layout

import Document, {Html, Head, Main, NextScript } from 'next/document';

// Root file for global configulation, like meta property or analytics
// Rendered on the server side, NEVER on the client side
export default class CustomDocument extends Document {
    render() {
        return <Html>
            <Head>
                <meta property="custom" content="test" />
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    }
}
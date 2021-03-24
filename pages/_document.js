import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
 * Next.js custom document component.
 * Renders React components added to it on all pages of the application
 * in addition to the specific content of the pages.
 */

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head />
                <body>
                    {/* Fix for flashes of unstyled content in Firefox, based on:
                    https://github.com/vercel/next.js/issues/15642#issuecomment-710747889*/}
                    <script>0</script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

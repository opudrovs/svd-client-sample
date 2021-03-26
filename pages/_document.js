/* NEXT.JS */

import Document, { Head, Html, Main, NextScript } from 'next/document';


/**
 * Next.js custom document component.
 * Allows to add content/attributes the application's <html> and <body> tags.
 * The custom document is only rendered on the server, React components added to it outside of `Main` will not be initialized.
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

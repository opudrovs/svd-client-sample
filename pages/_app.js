import NextHead from 'next/head';

import PropTypes from 'prop-types';

import CookieConsent from 'react-cookie-consent';

import ErrorPage from 'components/pages/root/ErrorPage/ErrorPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import 'rc-collapse/assets/index.css';
import 'tippy.js/dist/tippy.css';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
    const { error } = pageProps;

    return (
        <>
            <NextHead>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="max-snippet:320, max-image-preview:large" />
                <link rel="icon" href="/favicon.ico" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: '<!-- Global site tag (gtag.js) - Google Analytics -->'
                    }}
                />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QNR0XG2K4F" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: 'window.dataLayer = window.dataLayer || [];\n' +
                            '  function gtag(){dataLayer.push(arguments);}\n' +
                            '  gtag(\'js\', new Date());\n' +
                            '  gtag(\'config\', \'G-QNR0XG2K4F\');'
                    }}
                />
            </NextHead>
            {error
                ?
                <ErrorPage errorCode={error.errorCode} errorMessage={error.errorMessage} />
                :
                <Component {...pageProps} />}
            <CookieConsent
                cookieName="SVDCookieConsent"
                buttonText="Accept"
                buttonStyle={{
                    borderRadius: '4px'
                }}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default MyApp;

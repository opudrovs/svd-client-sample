/* REACT */

import PropTypes from 'prop-types';

/* NEXT.JS */

import NextHead from 'next/head';

/* LIBRARIES */

import CookieConsent from 'react-cookie-consent';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

/* REDUX */

import store from 'redux/store';

/* COMPONENTS */

import ErrorPage from 'components/pages/root/ErrorPage';

/* SHARED COMPONENTS */

import AppNavbar from 'components/shared/AppNavbar';
import Footer from 'components/shared/Footer';

/* STYLES */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import 'rc-collapse/assets/index.css';
import 'tippy.js/dist/tippy.css';

import 'styles/globals.scss';


/**
 * Next.js custom app (page wrapper component).
 * Wraps other pages but does not create a shared state between them automatically.
 */

const MyApp = ({ Component, pageProps }) => {
    const { error } = pageProps;

    const persistor = persistStore(store);

    return (
        <>
            <NextHead>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="max-snippet:320, max-image-preview:large" />
                <link rel="icon" href="/favicon.ico" />
            </NextHead>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <>
                        <AppNavbar />
                        {error
                            ?
                            <ErrorPage errorCode={error.errorCode} errorMessage={error.errorMessage} />
                            :
                            <Component {...pageProps} />}
                        <Footer />
                    </>
                </PersistGate>
            </Provider>
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

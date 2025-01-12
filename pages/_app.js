import PropTypes from 'prop-types';

import NextHead from 'next/head';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from 'reduxStore/store';

import ErrorPage from 'components/pages/root/ErrorPage';

import AppNavbar from 'components/shared/AppNavbar';
import Footer from 'components/shared/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';

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
        <meta
          name="robots"
          content="max-snippet:320, max-image-preview:large"
        />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavbar />
          {error ? (
            <ErrorPage
              errorCode={error.errorCode}
              errorMessage={error.errorMessage}
            />
          ) : (
            <Component {...pageProps} />
          )}
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

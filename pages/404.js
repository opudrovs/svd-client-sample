/* COMPONENTS */

import ErrorPage from 'components/pages/root/ErrorPage';

/* CONSTANTS */

import { errorMessages } from 'constants/MessageConstants';

/**
 * Next.js custom document component.
 * Renders React components added to it on all pages of the application
 * in addition to the specific content of the pages.
 */

const Custom404 = () => <ErrorPage errorCode={404} errorMessage={errorMessages[404]} />;

export default Custom404;
/* COMPONENTS */

import ErrorPage from 'components/pages/root/ErrorPage';

/* CONSTANTS */

import { ERROR_MESSAGE } from 'constants/MessageConstants';

const Custom404 = () => <ErrorPage errorCode={404} errorMessage={ERROR_MESSAGE[404]} />;

export default Custom404;

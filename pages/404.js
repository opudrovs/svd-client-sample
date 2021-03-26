/* COMPONENTS */

import ErrorPage from 'components/pages/root/ErrorPage';

/* CONSTANTS */

import { errorMessages } from 'constants/MessageConstants';


const Custom404 = () => <ErrorPage errorCode={404} errorMessage={errorMessages[404]} />;

export default Custom404;

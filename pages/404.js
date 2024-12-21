import ErrorPage from 'components/pages/root/ErrorPage';

import { ERROR_MESSAGE } from 'constants/messageConstants';

const Custom404 = () => (
  <ErrorPage errorCode={404} errorMessage={ERROR_MESSAGE[404]} />
);

export default Custom404;

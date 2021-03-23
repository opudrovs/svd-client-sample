import PropTypes from 'prop-types';

import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';

import Page from 'components/shared/Page/Page';

/**
 * Custom Error page.
 * Contains all other components on the page.
 */

const ErrorPage = ({ errorCode, errorMessage }) => (
    <Page
        seoTitle="Page not found!"
        seoDescription="Error page."
    >
        <ErrorMessage errorCode={errorCode} errorMessage={errorMessage} />
    </Page>
);

ErrorPage.propTypes = {
    errorCode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    errorMessage: PropTypes.string.isRequired
};

export default ErrorPage;
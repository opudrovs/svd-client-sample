/* REACT */

import { memo } from 'react';

import PropTypes from 'prop-types';

/* COMMON COMPONENTS */

import ErrorMessage from 'components/common/ErrorMessage';

/* SHARED COMPONENTS */

import Page from 'components/shared/Page';


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

export default memo(ErrorPage);

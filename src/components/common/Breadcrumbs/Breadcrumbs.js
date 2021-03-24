import { Fragment } from 'react';

import PropTypes from 'prop-types';

import NextHead from 'next/head';

const classNames = require('classnames');

import Breadcrumb from './Breadcrumb/Breadcrumb';

import { COMPANY_WEBSITE_URL, INDEX_PATH } from 'constants/NavigationConstants';

import styles from './Breadcrumbs.module.scss';

/**
 * Breadcrumbs navigation.
 */

const Breadcrumbs = ({ breadcrumbs, externalClassName }) => (
    <div className={classNames(
        'd-flex align-items-center flex-wrap',
        styles.breadcrumbs,
        externalClassName
    )}>
        <>
            <NextHead>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
                                    "@context": "https://schema.org",
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        ${breadcrumbs
                                            .filter(({ url }) => url)
                                            .map(({ name, url }, index) => (
                                                `{
                                                    "@type": "ListItem",
                                                    "position": ${index + 1},
                                                    "name": "${name}",
                                                    "item": "${COMPANY_WEBSITE_URL}${url === INDEX_PATH ? '' : url}"
                                                }`
                                            ))
                                            .join(', ')}
                                    ]
                                }`
                    }}
                />
            </NextHead>
            {breadcrumbs
                .filter(({ isDataOnly }) => !isDataOnly)
                .map((element, index, filteredBreadcrumbs) => (
                    <Fragment key={`breadcrumb-${index}`}>
                        <Breadcrumb {...element} />
                        {index < filteredBreadcrumbs.length - 1 && <>&nbsp;/&nbsp;</>}
                    </Fragment>
                ))}
        </>
    </div>
);

Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isDataOnly: PropTypes.boolean
    })).isRequired,
    externalClassName: PropTypes.string
};

export default Breadcrumbs;

/* REACT */

import { Fragment } from 'react';

import PropTypes from 'prop-types';

/* NEXT.JS */

import NextHead from 'next/head';

/* LIBRARIES */

const classNames = require('classnames');

/* COMPONENTS */

import Breadcrumb from './Breadcrumb';

/* CONSTANTS */

import { COMPANY_WEBSITE_URL, INDEX_PATH } from 'constants/NavigationConstants';

/* STYLES */

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
                                            .filter(({ href }) => href)
                                            .map(({ name, href }, index) => (
                                                `{
                                                    "@type": "ListItem",
                                                    "position": ${index + 1},
                                                    "name": "${name}",
                                                    "item": "${COMPANY_WEBSITE_URL}${href === INDEX_PATH ? '' : href}"
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
        href: PropTypes.string,
        isDataOnly: PropTypes.boolean
    })).isRequired,
    externalClassName: PropTypes.string
};

export default Breadcrumbs;

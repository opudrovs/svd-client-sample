import { Fragment } from 'react';

import PropTypes from 'prop-types';

import NextHead from 'next/head';

import classNames from 'classnames';

import Breadcrumb from './Breadcrumb';

import { COMPANY_WEBSITE_URL, INDEX_PATH } from 'constants/navigationConstants';

import styles from './Breadcrumbs.module.scss';

/**
 * Breadcrumbs navigation.
 */
const Breadcrumbs = ({ breadcrumbs, className }) => (
  <div
    className={classNames(
      'd-flex align-items-center flex-wrap',
      styles.breadcrumbs,
      className
    )}
  >
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
                              .map(
                                ({ name, href }, index) =>
                                  `{
                                        "@type": "ListItem",
                                        "position": ${index + 1},
                                        "name": "${name}",
                                        "item": "${COMPANY_WEBSITE_URL}${href === INDEX_PATH ? '' : href}"
                                    }`
                              )
                              .join(', ')}
                          ]
                      }`,
          }}
        />
      </NextHead>
      {breadcrumbs
        .filter(({ isDataOnly }) => !isDataOnly)
        .map(({ text, href }, index, filteredBreadcrumbs) => (
          <Fragment key={`breadcrumb-${index}`}>
            <Breadcrumb text={text} href={href} />
            {index < filteredBreadcrumbs.length - 1 && <>&nbsp;/&nbsp;</>}
          </Fragment>
        ))}
    </>
  </div>
);

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      name: PropTypes.string,
      href: PropTypes.string,
      isDataOnly: PropTypes.boolean,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;

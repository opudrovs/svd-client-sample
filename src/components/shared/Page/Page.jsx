import PropTypes from 'prop-types';

import NextHead from 'next/head';

import classNames from 'classnames';

import Cart from 'components/shared/Cart';

import styles from './Page.module.scss';

/**
 * Page component.
 * A shared component (repeats across multiple pages).
 * Can wrap other shared components (header and footer) on a page.
 * Other shared components can also be used without the Page component.
 */
const Page = ({
  children,
  seoTitle,
  seoDescription,
  isContentMain = true,
  topComponent,
  shouldShowCart = true,
  externalContentClassName,
}) => {
  const ContentTag = isContentMain ? 'main' : 'div';

  return (
    <>
      <NextHead>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </NextHead>
      <div className={styles.page}>
        {topComponent}
        <ContentTag
          className={classNames(
            'container',
            styles.content,
            externalContentClassName
          )}
        >
          {shouldShowCart && (
            <div className="d-flex justify-content-end">
              <Cart />
            </div>
          )}
          {children}
        </ContentTag>
      </div>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  isContentMain: PropTypes.bool,
  topComponent: PropTypes.element,
  shouldShowCart: PropTypes.bool,
  externalContentClassName: PropTypes.string,
};

export default Page;

import PropTypes from 'prop-types';

import NextHead from 'next/head';

const classNames = require('classnames');

import AppNavbar from 'components/shared/AppNavbar/AppNavbar';
import Footer from 'components/shared/Footer/Footer';

import styles from './Page.module.scss';

/**
 * Page component.
 * A shared component (repeats across multiple pages).
 * Can wrap other shared components (`<head>` contents and footer) on a page.
 * Shared components can also be used without the Page component.
 */

const Page = ({
    children,
    seoTitle,
    seoDescription,
    isContentMain,
    topComponent,
    externalContentClassName
}) => {
    const ContentTag = isContentMain ? 'main' : 'div' ;

    return (
        <>
            <NextHead>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </NextHead>
            <div className={styles.page}>
                <AppNavbar />
                {topComponent}
                <ContentTag className={classNames(
                    'container',
                    styles.content,
                    externalContentClassName
                )}>
                    {children}
                </ContentTag>
                <Footer />
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
    externalContentClassName: PropTypes.string
};

Page.defaultProps = {
    isContentMain: true
};

export default Page;

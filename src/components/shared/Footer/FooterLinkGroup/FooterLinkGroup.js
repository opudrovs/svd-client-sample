/* REACT */

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* STYLES */

import styles from './FooterLinkGroup.module.scss';


/**
 * Footer link group component.
 * Groups footer links together.
 */

const FooterLinkGroup = ({
    children,
    externalClassName
}) => (
    <div
        className={classNames(
            'd-flex flex-column align-items-center align-items-md-start',
            styles.footerLinkGroup,
            externalClassName
        )}
    >
        {children}
    </div>
);

FooterLinkGroup.propTypes = {
    children: PropTypes.node,
    externalClassName: PropTypes.string
};

export default FooterLinkGroup;

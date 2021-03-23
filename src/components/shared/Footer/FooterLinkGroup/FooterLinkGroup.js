import PropTypes from 'prop-types';

const classNames = require('classnames');

import styles from './FooterLinkGroup.module.scss';

/**
 * Footer link group.
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

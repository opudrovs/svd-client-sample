import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './FooterLinkGroup.module.scss';

/**
 * Footer link group component.
 * Groups footer links together.
 */
const FooterLinkGroup = ({ children, className }) => (
  <div
    className={classNames(
      'd-flex flex-column align-items-center align-items-md-start',
      styles.footerLinkGroup,
      className
    )}
  >
    {children}
  </div>
);

FooterLinkGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FooterLinkGroup;

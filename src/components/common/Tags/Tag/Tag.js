import PropTypes from 'prop-types';

import styles from './Tag.module.scss';

/**
 * Tag.
 */

const Tag = ({ text }) => (
    <div className={styles.tag}>{text}</div>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired
};

export default Tag;

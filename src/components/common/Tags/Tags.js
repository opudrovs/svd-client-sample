/* REACT */

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* COMPONENTS */

import Tag from './Tag';

/* STYLES */

import styles from './Tags.module.scss';


/**
 * Tags container.
 */

const Tags = ({ tags, title, externalClassName }) => (
    <div className={externalClassName}>
        {title
            &&
            <h2 className={styles.title}>{title}</h2>}
        <div className={classNames(
            'd-flex flex-wrap',
            styles.tags
        )}>
            {tags.map((text, index) => (
                <Tag key={`tag-${index}`} text={text} />
            ))}
        </div>
    </div>
);

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string,
    externalClassName: PropTypes.string
};

export default Tags;

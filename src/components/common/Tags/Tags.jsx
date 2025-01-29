import PropTypes from 'prop-types';

import classNames from 'classnames';

import Tag from './Tag';

import styles from './Tags.module.scss';

/**
 * Tags container.
 */
const Tags = ({ tags, title, className }) => (
  <div className={className}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={classNames('d-flex flex-wrap', styles.tags)}>
      {tags.map((text, index) => (
        <Tag key={`tag-${index}`} text={text} />
      ))}
    </div>
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Tags;

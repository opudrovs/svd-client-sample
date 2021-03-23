import PropTypes from 'prop-types';

const classNames = require('classnames');

import Thumbnail from './Thumbnail/Thumbnail';

import { IMAGE_DATA_TYPE } from 'constants/TypeConstants';

import styles from './ThumbnailsContainer.module.scss';

/**
 * Thumbnails container.
 */

const ThumbnailsContainer = ({
    imageData,
    imageIndex,
    onThumbnailClickHandler,
    externalClassName
}) => (
    <div className={classNames(
        'row justify-content-center align-items-center'
    )}>
        <div className={classNames(
            'col',
            styles.thumbnailsContainer,
            externalClassName
        )}>
            <div className="row">
                {imageData.map((element, index) => (
                    <Thumbnail
                        key={`thumbnail-${index}`}
                        src={element.thumb}
                        alt={element.alt}
                        isActive={index === imageIndex}
                        onClickHandler={() => onThumbnailClickHandler(index)}
                    />))}
            </div>
        </div>
    </div>
);

ThumbnailsContainer.propTypes = {
    imageData: IMAGE_DATA_TYPE.isRequired,
    imageIndex: PropTypes.number.isRequired,
    onThumbnailClickHandler: PropTypes.func.isRequired,
    externalClassName: PropTypes.string
};

export default ThumbnailsContainer;

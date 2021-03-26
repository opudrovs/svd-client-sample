/* REACT */

import PropTypes from 'prop-types';


/**
 * Constants used for validating types of component props.
 */

const ERROR_MESSAGE = 'Either or both of "src" and "srcLarge" props must be provided.';

export const IMAGE_DATA_TYPE = PropTypes.arrayOf(PropTypes.shape({
    src: props => {
        if (!props.src && !props.srcPreview) {
            return new Error(ERROR_MESSAGE);
        }
    },
    srcPreview: props => {
        if (!props.src && !props.srcPreview) {
            return new Error(ERROR_MESSAGE);
        }
    },
    thumb: PropTypes.string,
    alt: PropTypes.string
}));
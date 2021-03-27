/* REACT */

import { useEffect } from 'react';

import PropTypes from 'prop-types';

/* LIBRARIES */

const classNames = require('classnames');

/* STYLES */

import styles from './Modal.module.scss';

let scrollTop = 0;

/**
 * Enables and disables scrolling of `<body>` and `<html>` elements
 * to prevent content from scrolling under the modal in all browsers.
 * Preserves and restores the vertical scroll position of the document.
 * Should be called within the `componentDidMount` lifecycle method or within the `useEffect` hook.
 * @param {boolean} isEnabled Controls scrolling of content under the modal
 */
const enableDocumentScrolling = (isEnabled) => {
    const elementsWithClassNames = [
        {
            element: document.documentElement,
            elementClassNames: [styles.modalOpen, styles.modalOpenHtml]
        },
        {
            element: document.body,
            elementClassNames: [styles.modalOpen]
        }
    ];

    if (isEnabled) {
        elementsWithClassNames.forEach(({ element, elementClassNames }) => element.classList.remove(...elementClassNames));
        window.scrollTo(0, scrollTop);
    } else {
        scrollTop = window.pageYOffset;
        elementsWithClassNames.forEach(({ element, elementClassNames }) => element.classList.add(...elementClassNames));
        document.body.scrollTop = scrollTop;
    }
};

/**
 * Modal dialog component.
 * Creates a modal dialog which accepts content as the `children` prop.
 * The modal has `fixed` CSS position, and  thus is removed from the normal document flow, and overlays the page content.
 * The modal's parent component is responsible for showing and closing it if needed.
 * The modal component cannot show or close itself.
 * It can only notify the parent component via the `onCloseHandler` prop that the modal's Close button was clicked.
 */

const Modal = ({
    children,
    shouldCloseOnClick,
    externalClassName,
    onCloseHandler
}) => {
    useEffect(() => {
        enableDocumentScrolling(false);

        return () => {
            enableDocumentScrolling(true);
        };
    }, []);

    return (
        <div
            className={classNames(
                styles.modal,
                externalClassName
            )}
            onClick={(e) => {
                if (shouldCloseOnClick) {
                    onCloseHandler && onCloseHandler();
                } else {
                    e.stopPropagation();
                }
            }}
        >
            <div className={classNames(
                'container',
                styles.content
            )}>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    shouldCloseOnClick: PropTypes.bool,
    externalClassName: PropTypes.string,
    onCloseHandler: PropTypes.func.isRequired
};

export default Modal;

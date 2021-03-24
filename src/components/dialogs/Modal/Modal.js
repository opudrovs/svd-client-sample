import { useEffect } from 'react';

import PropTypes from 'prop-types';

const classNames = require('classnames');

import styles from './Modal.module.scss';

/**
 * Modal dialog component.
 * Creates a modal dialog which accepts content as the `children` prop.
 * The modal can be closed with the Close button, which invokes the `onCloseHandler` prop when clicked.
 * The modal has `fixed` CSS position, is removed from the normal document flow, and overlays the page content.
 * The modal's parent component is responsible for rendering and closing it if needed.
 * The modal component cannot render or close itself.
 * It can only notify the parent component via the `onCloseHandler` prop that the modal's Close button was clicked.
 */

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
            elementClassNames: [styles.openModal, styles.openModalHtml]
        },
        {
            element: document.body,
            elementClassNames: [styles.openModal]
        }
    ];

    if (isEnabled) {
        elementsWithClassNames.forEach(({ element, elementClassNames }) => (
            element.classList.remove(...elementClassNames)
        ));
        window.scrollTo(0, scrollTop);
    } else {
        scrollTop = window.pageYOffset;
        elementsWithClassNames.forEach(({ element, elementClassNames }) => (
            element.classList.add(...elementClassNames)
        ));
        document.body.scrollTop = scrollTop;
    }
};

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
                'container h-100',
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
    onCloseHandler: PropTypes.func
};

export default Modal;

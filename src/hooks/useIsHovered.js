/* REACT */

import { useEffect, useRef, useState } from 'react';


/**
 * useIsHovered hook.
 * Checks if the component is hovered (for example, to update the component appearance).
 */

const useIsHovered = () => {
    const [isHovered, setIsHovered] = useState(false);

    const ref = useRef(null);

    const mouseEnterHandler = () => setIsHovered(true);

    const mouseLeaveHandler = () => setIsHovered(false);

    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('mouseenter', mouseEnterHandler);
            node.addEventListener('mouseleave', mouseLeaveHandler);

            return () => {
                node.removeEventListener('mouseenter', mouseEnterHandler);
                node.removeEventListener('mouseleave', mouseLeaveHandler);

            };
        }
    }, [ref.current]);

    return [ref, isHovered, setIsHovered];
};

export default useIsHovered;

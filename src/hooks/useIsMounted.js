/* REACT */

import { useCallback, useEffect, useRef } from 'react';


/**
 * useIsMounted hook.
 * Checks if the component is mounted (for example, to update the component state).
 */

const useIsMounted = () => {
    const ref = useRef(false);

    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        }

        return () => {
            ref.current = false;
        };
    }, []);

    return useCallback(() => ref.current, []);
};

export default useIsMounted;

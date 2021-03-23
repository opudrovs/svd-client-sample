import { useRef, useCallback, useEffect } from 'react';

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

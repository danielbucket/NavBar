import { useEffect } from 'react';

const useClickOutside= (ref, cb) => {
  useEffect(() => {
    const listener = event => {
      if(!ref.current || ref.current.contains(event.target)) {
        return
      }

      cb();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, cb]);
};

export default useClickOutside;
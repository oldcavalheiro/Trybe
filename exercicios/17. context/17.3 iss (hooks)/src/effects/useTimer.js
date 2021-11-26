import { useEffect } from 'react';

function useTimer(callback, timer) {
  useEffect(() => {
    const time = setInterval(() => {
      callback();
    }, timer);

    return () => {
      clearInterval(time);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useTimer;

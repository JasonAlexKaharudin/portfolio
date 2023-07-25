import { useEffect, useRef } from 'react';

const usePageDurationTracking = (viewDuration, setViewDuration) => {
  const startTimeRef = useRef(Date.now());
  const pathURL = window.location.pathname;

  useEffect(() => {
    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const pageDuration = (endTime - startTimeRef.current) / 1000;

      setViewDuration([...viewDuration, { pathURL: pathURL, duration: pageDuration }])
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  });

  // Update the start time when the path changes
  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);
};

export default usePageDurationTracking;

import { useState, useRef } from "react";

const useYVelocity = () => {
  const [velocityY, setVelocityY] = useState(0);
  const lastTouchY = useRef(0);
  const lastTime = useRef(0);

  const updateVelocity = (touchY: number) => {
    const now = performance.now();
    const timeDelta = now - lastTime.current;

    if (timeDelta > 0) {
      const deltaY = touchY - lastTouchY.current;
      const newVelocityY = deltaY / (timeDelta / 1000);

      setVelocityY(newVelocityY);
      lastTouchY.current = touchY;
      lastTime.current = now;
    }
  };

  const resetVelocity = () => {
    setVelocityY(0);
    lastTouchY.current = 0;
    lastTime.current = 0;
  };

  const velocityToTime = (maxVelocity: number = 1000) => {
    const time = 350 - (velocityY * 320) / maxVelocity;
    return Math.max(0, Math.min(250, time)); // Clamp between 0 and 250
  };

  return { velocityY, updateVelocity, resetVelocity, velocityToTime };
};

export default useYVelocity;

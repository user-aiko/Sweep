import { useEffect, useRef, useState } from "react";
import { dragEndAnimation } from "../animations";
import useYVelocity from "./useYVelocity";

const useDrag = (
  setOpen: (open: boolean) => void,
  parentRef: React.MutableRefObject<HTMLDivElement | null>,
  sheetRef: React.MutableRefObject<HTMLDivElement | null>,
  isOpen: boolean,
  borderRadius: number,
  snapPoint: number
) => {
  const [positionY, setPositionY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosY, setStartPosY] = useState(0);

  const { velocityToTime, updateVelocity, resetVelocity } = useYVelocity();
  const latestPositionYRef = useRef(0);

  const onTouchDown = (event: TouchEvent): void => {
    setIsDragging(true);
    const clientY =
      event instanceof PointerEvent ? event.clientY : event.touches[0].clientY;
    setStartPosY(clientY - positionY);
  };

  const onTouchMove = (event: TouchEvent) => {
    if (isDragging) {
      const clientY = event.touches[0].clientY;
      const newY = clientY - startPosY;

      updateVelocity(clientY);

      setPositionY(newY);
      latestPositionYRef.current = newY;
    }
  };

  const onTouchUp = () => {
    if (latestPositionYRef.current > snapPoint) {
      setOpen(false);
    }
    if (sheetRef?.current && parentRef?.current) {
      dragEndAnimation(
        sheetRef?.current,
        parentRef?.current,
        latestPositionYRef.current > snapPoint,
        velocityToTime(10)
      );
    }
    setPositionY(0);
    setStartPosY(0);
    setIsDragging(false);
    resetVelocity();
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onTouchUp);
    } else {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchUp);
    }

    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!isDragging && positionY === 0) return;

    if (parentRef?.current && sheetRef?.current && isOpen) {
      const height = sheetRef.current.getBoundingClientRect().height;
      const radius = Math.max(
        0,
        Math.min(
          borderRadius - (positionY * borderRadius) / height,
          borderRadius
        )
      );

      parentRef.current.animate(
        {
          transform: `translateY(calc(${
            Math.max(-25, Math.min(positionY, height)) -
            height -
            (positionY < 0 ? Math.pow(-positionY, 0.8) : 0)
          }px))`,

          borderRadius: isDragging
            ? `0 0 ${radius}px ${radius}px`
            : isOpen
            ? `0 0 ${borderRadius}px ${borderRadius}px`
            : "0",
        },
        {
          duration: 0,
          fill: "forwards",
        }
      );

      sheetRef?.current.animate(
        {
          marginBottom: isDragging
            ? `${
                -(
                  Math.max(-25, Math.min(positionY, 0)) -
                  (positionY < 0 ? Math.pow(-positionY, 0.8) : 0)
                ) / 2
              }px`
            : `0px`,
          transformOrigin: "bottom center",
          transform:
            positionY > 0
              ? `scale(${
                  1 - Math.max(0, Math.min((positionY * 0.1) / 200, 0.1))
                })`
              : "scale(1)",
          opacity: 1 - Math.max(0, Math.min((positionY * 0.5) / 100, 0.5)),
        },
        {
          duration: 0,
          fill: "forwards",
        }
      );
    }
  }, [positionY, isDragging]);

  return { onTouchDown };
};
export default useDrag;

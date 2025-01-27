import { useEffect, useRef } from "react";
import { animatorStyle } from "./style";
import { getTransformRatio } from "./helpers";
import {
  sheetFadeInAnimation,
  sheetFadeOutAnimation,
  sheetMainAnimation,
} from "./animations";
import { usePreventScroll } from "./hooks/usePreventScroll";
import useDrag from "./hooks/useDrag";

const SweepAnimator = ({
  isOpen,
  children,
  sheetRef,
  nextChildren,
  setSheetChildren,
  setNextChildren,
  setIsSwitching,
  parentRef,
  setOpen,
  tempRef,
  setIsChanging,
  isChanging,
  isClosing,
  isOppening,
  config,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  nextChildren: React.ReactNode;
  tempRef: React.MutableRefObject<HTMLDivElement | null>;
  sheetRef: React.MutableRefObject<HTMLDivElement | null>;
  setSheetChildren: (children: React.ReactNode) => void;
  setNextChildren: (children: React.ReactNode) => void;
  setIsSwitching: (isSwitching: boolean) => void;
  parentRef: React.MutableRefObject<HTMLDivElement | null>;
  setOpen: (open: boolean) => void;
  isSwitching: boolean;
  justOpened: boolean;
  isClosing: boolean;
  isChanging: boolean;
  isOppening: boolean;
  setIsChanging: (isChanging: boolean) => void;
  config: {
    blur?: boolean;
    disableTouchEvents?: boolean;
    borderRadius: number;
  };
}) => {
  usePreventScroll({ isDisabled: !isOpen });

  const { onTouchDown } = useDrag(
    setOpen,
    parentRef,
    sheetRef,
    isOpen,
    config.borderRadius
  );

  useEffect(() => {
    if (!isOpen) return;
    var transformRatio = 0;
    if (sheetRef.current && nextChildren) {
      setIsSwitching(true);
      if (sheetRef.current && tempRef.current) {
        transformRatio = getTransformRatio(sheetRef.current, tempRef.current);
      }

      sheetFadeOutAnimation(
        sheetRef.current,
        transformRatio,
        config.blur ?? false
      ).onfinish = () => {
        setSheetChildren(nextChildren);
        setNextChildren(null);
        if (sheetRef.current) {
          sheetFadeInAnimation(
            sheetRef.current,
            transformRatio,
            config.blur ?? false
          ).onfinish = () => {
            setIsChanging(false);
            setIsSwitching(false);
          };
        }
      };
    }
  }, [nextChildren]);

  useEffect(() => {
    if (sheetRef.current) {
      sheetMainAnimation(sheetRef.current, isOpen, config.blur ?? false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (
      !isOpen ||
      isOppening ||
      isChanging ||
      isClosing ||
      config.disableTouchEvents
    )
      return;

    window.addEventListener("touchstart", onTouchDown);
    return () => {
      window.removeEventListener("touchstart", onTouchDown);
    };
  }, [isOpen, isClosing, isChanging, isOppening]);

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        ref={sheetRef}
        style={animatorStyle()}
      >
        {children}
      </div>
      {nextChildren && (
        <div
          ref={tempRef}
          style={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          {nextChildren}
        </div>
      )}
    </>
  );
};

export default SweepAnimator;

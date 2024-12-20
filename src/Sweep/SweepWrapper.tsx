import { useEffect, useRef, useState } from "react";
import { SweepContext } from "./context";
import { overlayStyle, parentStyle } from "./style";
import SweepAnimator from "./SweepAnimator";
import { parentMainAnimation } from "./animations";

interface SweepWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  foregroundColor?: string;
  backgroundClassName?: string;
  foregroundClassName?: string;
}

const SweepWrapper: React.FC<SweepWrapperProps> = ({
  children,
  backgroundColor,
  foregroundColor,
  backgroundClassName,
  foregroundClassName,
}) => {
  const [sheetChildren, setSheetChildren] = useState<React.ReactNode>(null);
  const [nextChildren, setNextChildren] = useState<React.ReactNode>(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const [open, setOpen] = useState(false);

  const [sweepConfig, setSweepConfig] = useState({
    blur: false,
    disableTouchEvents: false,
    blockBodyClick: false,
    clickBodyToClose: false,
    borderRadius: 20,
  });

  const [isOppening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const [justOpened, setJustOpened] = useState(false);

  useEffect(() => {
    if (open) {
      setJustOpened(true);
      const timer = setTimeout(() => {
        setJustOpened(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (parentRef.current && sheetRef.current) {
      parentMainAnimation(
        sheetRef.current,
        parentRef.current,
        open,
        isSwitching,
        sweepConfig.borderRadius
      ).onfinish = () => {
        if (open) setIsOpening(false);
        else setIsClosing(false);
        if (open) return;
        setSheetChildren(null);
        setNextChildren(null);
      };
    }
  }, [open, nextChildren]);

  const contextValue = {
    open,
    setOpen,
    sheetChildren,
    setSweepConfig,
    setSheetChildren,
    nextChildren,
    setNextChildren,
    setIsChanging,
    setIsClosing,
    setIsOpening,
  };

  return (
    <SweepContext.Provider value={contextValue}>
      {/* parent */}
      <div
        ref={parentRef}
        style={parentStyle(open, foregroundColor, sweepConfig.blockBodyClick)}
        className={foregroundClassName}
      >
        {/* Indicator */}
        {/* An issue with the positioning when the content is scrollable */}
        {/* <div style={indicatorStyle(open)}></div> */}
        {children}
      </div>

      {/* Overlay */}
      <div
        style={overlayStyle(open, backgroundColor)}
        className={backgroundClassName}
        onClick={() => {
          if (!sweepConfig.clickBodyToClose) return;
          setOpen(false);
          setSweepConfig({
            blur: false,
            disableTouchEvents: false,
            blockBodyClick: false,
            clickBodyToClose: false,
            borderRadius: 20,
          });
        }}
      >
        {sheetChildren && (
          <>
            <SweepAnimator
              isOpen={open}
              sheetRef={sheetRef}
              nextChildren={nextChildren}
              setSheetChildren={setSheetChildren}
              setNextChildren={setNextChildren}
              setIsSwitching={setIsSwitching}
              setOpen={setOpen}
              isSwitching={isSwitching}
              parentRef={parentRef}
              justOpened={justOpened}
              setIsChanging={setIsChanging}
              isChanging={isChanging}
              isClosing={isClosing}
              isOppening={isOppening}
              config={sweepConfig}
            >
              {sheetChildren}
            </SweepAnimator>
          </>
        )}
      </div>
    </SweepContext.Provider>
  );
};

export default SweepWrapper;

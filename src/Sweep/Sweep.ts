import { useEffect } from "react";
import { isSameElement } from "./helpers";
import useSweepContext from "./hooks/useSweepContext";

type sweepConfig = {
  blur?: boolean;
  disableTouchEvents?: boolean;
  blockBodyClick?: boolean;
  clickBodyToClose?: boolean;
  borderRadius?: number;
};

type sweepCallbacks = {
  onToggle?: (state: boolean) => void;
  onSwitch?: (
    oldChildren: React.ReactNode,
    newChildren: React.ReactNode
  ) => void;
};

function useSweep(
  config: sweepConfig = {
    blur: false,
    disableTouchEvents: false,
    blockBodyClick: false,
    clickBodyToClose: false,
    borderRadius: 20,
  },
  callbacks?: sweepCallbacks
) {
  const context = useSweepContext();

  const {
    open: openState,
    setOpen,
    sheetChildren,
    nextChildren,
    setSheetChildren,
    setNextChildren,
    setIsClosing,
    setIsOpening,
    setIsChanging,
    setSweepConfig,
  } = context;

  useEffect(() => {
    if (callbacks?.onToggle) callbacks.onToggle(openState);
  }, [openState]);

  useEffect(() => {
    if (callbacks?.onSwitch && nextChildren != null)
      callbacks.onSwitch(sheetChildren, nextChildren);
  }, [sheetChildren, nextChildren]);

  function close() {
    setSweepConfig({ ...config });
    setIsClosing(true);
    setOpen(false);
  }

  function open(element: React.ReactNode) {
    setSweepConfig(config);
    if (!isSameElement(element, sheetChildren) && element !== null) {
      if (sheetChildren !== null) {
        setIsChanging(true);
        setNextChildren(element);
      } else {
        setIsOpening(true);
        setSheetChildren(element);
      }
    }
    setOpen(true);
  }

  return { open, close };
}

export default useSweep;
